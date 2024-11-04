import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import '@/app/styles/github-dark.css';

export async function generateStaticParams() {
  const dir = ["src/content/frontend", "src/content/system-design"];
  let paths: { slug: string }[] = [];
  for (const _dir of dir) {
    const _path = path.join(process.cwd(), _dir)
    const files = fs.readdirSync(path.join(_path));

    const _paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))
    paths = paths.concat(_paths);
  }
  return paths
}

export async function generateMetadata({ params } : { params : { slug : string } }) {
  const notes = getPost(params);
  return{
      title: notes.frontMatter.title,
      description: notes.frontMatter.description,
  }
}

function getPost({slug}:{slug : string}){
  const directories = ["src/content/frontend", "src/content/system-design"];
  let dir = "";
  for (const _d of directories) {
      if(fs.existsSync(path.join(process.cwd(), _d, slug + '.mdx'))){
          dir = _d;
          break;
      }
  }
  const _path = path.join(process.cwd(), dir)

  const markdownFile = fs.readFileSync(path.join(_path,slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownFile)

  return {
      frontMatter,
      slug,
      content
  }
}

export default function Post({ params } : { params : { slug : string } }) {
 
  const props = getPost(params);

  return (
      <article className={`prose prose-sm md:prose-base lg:prose-lg prose-slate max-w-fit pr-16 dark:!prose-invert`}>
        <h1>{props.frontMatter.title}</h1>
        <MDXRemote source={props.content}/>
      </article>
  )
}