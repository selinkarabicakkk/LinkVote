import React, { useState, useEffect } from 'react';
import SubmitLinkForm from '../components/SubmitLinkForm';
import { Link } from '../types/Link';
import Header from '../components/Header';

const Add: React.FC = () => {
    const [links, setLinks] = useState<Link[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLinks = localStorage.getItem('links');
            if (savedLinks) {
                setLinks(JSON.parse(savedLinks));
            }
        }
    }, []);

    const handleAddLink = (newLink: Link) => {
        const updatedLinks = [newLink, ...links];
        setLinks(updatedLinks);
        if (typeof window !== 'undefined') {
            localStorage.setItem('links', JSON.stringify(updatedLinks));
        }
    };

    return (
        <div>
        <Header />
        <div className="bg-white flex flex-col items-center pt-8">
            <SubmitLinkForm onAddLink={handleAddLink} />
        </div>
        </div>
    );
};

export default Add;
