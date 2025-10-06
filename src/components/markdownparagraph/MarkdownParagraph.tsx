import React from 'react';
import MarkdownIt from 'markdown-it';

import './MarkdownParagraph.css'

const md = new MarkdownIt({ breaks: true });

export default function MarkdownParagraph({ text }: { text: string }) {
  const html = md.render(text);
  console.log(md.render(text));

  return (
    <div
      className='markdown'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
