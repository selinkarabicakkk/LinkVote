import React, { useState, useEffect } from 'react';
import SubmitLinkForm from '../components/SubmitLinkForm';
import { Link } from '../types/Link';
import Header from '../components/Header';
import ReturnToList from '@/components/ReturnToList';

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
        <div style={{ height: '100vh', width: '100vw' }}>
            <Header />
            <SubmitLinkForm onAddLink={handleAddLink} />
            <ReturnToList />
        </div>
    );
};

export default Add;
