"use client";

import React, { useState, useEffect } from 'react';
import SubmitLinkForm from '../components/SubmitLinkForm';
import { Link } from '../../types/Link';
import ReturnToList from '../components/ReturnToList';
import '../globals.css';

const page: React.FC = () => {
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
        <div style={{ height: '88.5vh' }} className='bg-white'>
            <div className='flex flex-col justify-center'>
            <ReturnToList />
            <SubmitLinkForm onAddLink={handleAddLink} />
            </div>
        </div>
    );
};

export default page;
