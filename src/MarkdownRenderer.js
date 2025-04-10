// MarkdownRenderer.jsx
import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function MarkdownRenderer({ markdown }) {
  const html = DOMPurify.sanitize(marked(markdown || ''));

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
