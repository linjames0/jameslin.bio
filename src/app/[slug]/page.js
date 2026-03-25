import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

import styles from '../layout.module.css';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'markdown'));

  return files.map((fileName) => ({
    slug: fileName.replace('.md', ''),
  }));
}

async function getMarkdownContent(slug) {
  const filePath = path.join(process.cwd(), 'markdown', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(fileContents);
  return processedContent.toString();
}

export default async function MarkdownPage({ params }) {
  const { slug } = params;
  const contentHtml = await getMarkdownContent(slug);

  return (
    <div className={`${styles.markdown} ${styles[slug]}`}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
