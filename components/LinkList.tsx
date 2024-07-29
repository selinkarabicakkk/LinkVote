import React, { useState, useEffect } from 'react';
import SubmitLinkForm from './SubmitLinkForm';
import Pagination from './Pagination';

interface Link {
    id: number;
    title: string;
    url: string;
    points: number;
}

const initialLinks: Link[] = [
    { id: 1, title: 'Hacker News', url: 'https://news.ycombinator.com/', points: 6 },
    { id: 2, title: 'Product Hunt', url: 'https://producthunt.com/', points: 4 },
    { id: 3, title: 'REDDIT', url: 'https://www.reddit.com/', points: 4 },
    { id: 4, title: 'GitHub', url: 'https://github.com/', points: 5 },
    { id: 5, title: 'Stack Overflow', url: 'https://stackoverflow.com/', points: 7 },
    { id: 6, title: 'Google', url: 'https://www.google.com/', points: 8 },
];

const LinkList: React.FC = () => {
    const [links, setLinks] = useState<Link[]>(() => {
        const savedLinks = localStorage.getItem('links');
        return savedLinks ? JSON.parse(savedLinks) : initialLinks;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const linksPerPage = 5;

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [linkToDelete, setLinkToDelete] = useState<Link | null>(null);

    useEffect(() => {
        localStorage.setItem('links', JSON.stringify(links));
    }, [links]);

    const handleVote = (id: number, delta: number) => {
        setLinks(links => links.map(link =>
            link.id === id ? { ...link, points: link.points + delta } : link
        ).sort((a, b) => b.points - a.points || b.id - a.id));
    };

    const handleAddLink = (newLink: Link) => {
        setLinks([newLink, ...links]);
    };

    const handleDelete = (id: number) => {
        setLinks(links => links.filter(link => link.id !== id));
        setShowDeletePopup(false);
        setLinkToDelete(null);
    };

    const handleDeleteClick = (link: Link) => {
        setLinkToDelete(link);
        setShowDeletePopup(true);
    };

    const handleCancelDelete = () => {
        setShowDeletePopup(false);
        setLinkToDelete(null);
    };

    // Calculate the links to display based on the current page
    const indexOfLastLink = currentPage * linksPerPage;
    const indexOfFirstLink = indexOfLastLink - linksPerPage;
    const currentLinks = links.slice(indexOfFirstLink, indexOfLastLink);

    const totalPages = Math.ceil(links.length / linksPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="bg-white flex flex-col items-center ml-42 pt-4">
            {currentLinks.map(link => (
                <div 
                    key={link.id} 
                    className="relative border p-4 w-full max-w-md mb-4 flex items-center justify-between bg-gray-100 group"
                >
                    <div className="flex items-center">
                        <div className="point-part bg-gray-200 p-2 text-center w-20 h-12 flex items-center justify-center mr-4">
                            <span className="text-xl font-bold mr-1">{link.points}</span>
                            <span className="text-xs">POINTS</span>
                        </div>
                        <div>
                            <h2 className="font-bold">{link.title}</h2>
                            <p className="text-gray-500 text-sm">{link.url}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <button onClick={() => handleVote(link.id, 1)} className="text-sm text-gray-500 mb-2">↑ Up Vote</button>
                        <button onClick={() => handleVote(link.id, -1)} className="text-sm text-gray-500">↓ Down Vote</button>
                    </div>
                    <button 
                        onClick={() => handleDeleteClick(link)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        &#10005;
                    </button>
                </div>
            ))}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            {showDeletePopup && linkToDelete && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                        <h2 className="mb-4">Remove Link</h2>
                        <p className="mb-4">Do you want to remove: <strong>{linkToDelete.title}</strong>?</p>
                        <div className="flex justify-center">
                            <button 
                                onClick={() => handleDelete(linkToDelete.id)} 
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                            >
                                OK
                            </button>
                            <button 
                                onClick={handleCancelDelete} 
                                className="bg-gray-300 text-black px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LinkList;
