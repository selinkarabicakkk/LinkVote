import React from 'react';

interface Link {
    id: number;
    title: string;
    url: string;
    points: number;
}

const links: Link[] = [
    { id: 1, title: 'Hacker News', url: 'https://news.ycombinator.com/', points: 6 },
    { id: 2, title: 'Product Hunt', url: 'https://producthunt.com/', points: 4 },
    { id: 3, title: 'REDDIT', url: 'https://www.reddit.com/', points: 4 },
];

const LinkList: React.FC = () => {
    return (
        <div className=" bg-white flex flex-col items-center ml-42 pt-4">
            {links.map(link => (
                <div key={link.id} className="border p-4 w-full max-w-md mb-4 flex items-center justify-between bg-gray-100">
                    <div className="flex items-center">
                        <div className="point-part bg-gray-200 p-2 text-center w-20 h-12 flex items-center justify-center mr-4 ">
                            <span className="text-xl font-bold mr-1">{link.points}</span>
                            <span className="text-xs">POINTS</span>
                        </div>
                        <div>
                            <h2 className="font-bold">{link.title}</h2>
                            <p className="text-gray-500 text-sm">{link.url}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="text-sm text-gray-500 mb-2">↑ Up Vote</button>
                        <button className="text-sm text-gray-500">↓ Down Vote</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LinkList;
