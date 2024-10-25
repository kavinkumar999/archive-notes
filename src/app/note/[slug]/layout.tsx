'use client';
import hljs from 'highlight.js';
import { useEffect } from 'react';
import Footer from '../../components/footer';

function Layout({children}: Readonly<{children: React.ReactNode;}>) {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      return hljs.highlightBlock(block as HTMLElement);
    });
  }, []);
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout