import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import '@/app/styles/github-dark.css';
import { Pluggable } from 'unified';
import langHttp from 'highlight.js/lib/languages/http';
import langNginx from 'highlight.js/lib/languages/nginx';
import Image from 'next/image';

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypeHighlight, { languages: { http: langHttp, nginx: langNginx } }] as Pluggable
      ],
    }
}
const components = {
  Greet: ({ name }: { name: string}) => <p>Hello, {name}!</p>,
  Image: ({ src, alt }: { src: string, alt: string }) => <Image src={src} alt={alt} width={500} height={500} />
};

export async function generateStaticParams() {
  const _dir = "src/content/system-design"
  const _path = path.join(process.cwd(), _dir)

  const files = fs.readdirSync(path.join(_path));

  const paths = files.map(filename => ({
      slug: filename.replace('.mdx', '')
  }))

  return paths
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const notes = getPost(params);
  return{
      title: notes.frontMatter.title,
      description: notes.frontMatter.description,
  }
}

function getPost({slug}:{slug : string}){
  const _dir = "src/content/system-design"
  const _path = path.join(process.cwd(), _dir)

  const markdownFile = fs.readFileSync(path.join(_path,slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownFile)

  return {
      frontMatter,
      slug,
      content
  }
}

export default function Post({ params } :any) {
 
  const props = getPost(params);

  return (
      <article className={`prose prose-sm md:prose-base lg:prose-lg prose-slate max-w-fit pr-16 dark:!prose-invert`}>
        <h1>{props.frontMatter.title}</h1>
        <MDXRemote source={props.content} options={options} components={components}/>
      </article>
  )
}