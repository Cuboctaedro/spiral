import { globSync } from 'glob';
import path from 'path';
import fs from 'fs';
import * as matter from 'gray-matter';
import Markdown from 'react-markdown';

const EventPage = ({
    params,
}: {
    params: {
        locale: 'en' | 'el'
        event: string
    }
}) => {
    const pageContent = fs.readFileSync(`./content/events/${params.event}.${params.locale}.md`, 'utf8');

    const pageData = matter(pageContent);

    return (
        <div>
            <h1>{pageData.data.title}</h1>
            <div>
                <Markdown>{pageData.content}</Markdown>
            </div>
        </div>
    );
};

export default EventPage;

export const generateStaticParams = async () => {
    const pages = globSync('./content/events/*.en.md');
  
    return pages.map((filename) => ({
        event: filename.split(path.sep)[2].split('.')[0],
    }));
};
