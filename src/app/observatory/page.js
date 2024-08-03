import styles from "./observatory.module.css";
import ObsNav from "@/components/ObsNav";

import path from 'path';
import fs from 'fs';
import { micromark } from 'micromark';

export function markdownToHtml(slug) {
    console.log(process.cwd());

    const filePath = path.join(process.cwd(), 'src/app/observatory/', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const htmlContent = micromark(fileContents);
    return htmlContent;
}

export default function Observatory() {
    const quotes = markdownToHtml('quotes');

    return (
        <div>
            <ObsNav>
                <div dangerouslySetInnerHTML={{ __html: quotes}} />
            </ObsNav>
        </div>
    );
}