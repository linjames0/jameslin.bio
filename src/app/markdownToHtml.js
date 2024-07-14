import path from 'path';
import fs from 'fs';
import { micromark } from 'micromark';

export default function markdownToHtml(slug) {
    const filePath = path.join(process.cwd(), '../app/observatory/quotes/quotes.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const htmlContent = micromark(fileContents);
    return htmlContent;
}