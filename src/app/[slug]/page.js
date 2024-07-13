import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

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

  const processedContent = await remark().use(html).process(fileContents);
  return processedContent.toString();
}

export default async function MarkdownPage({ params }) {
  const { slug } = params;
  const contentHtml = await getMarkdownContent(slug);

  return (
    <div className={styles.markdown}>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
