'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function MDXImage({ src, alt = '', ...props }) {
  const [imagePath, setImagePath] = useState(src);

  useEffect(() => {
    const prefix = process.env.NODE_ENV === 'production' ? '/archive-notes' : '';
    setImagePath(`${prefix}${src}`);
  }, [src]);

  return <Image alt={alt} src={imagePath} {...props} width={500} height={500} />;
} 