import React, { useState } from 'react';
import { Link } from '../types/Link';

interface SubmitLinkFormProps {
    onAddLink: (link: Link) => void;
}

const SubmitLinkForm: React.FC<SubmitLinkFormProps> = ({ onAddLink }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && url) {
            const newLink: Link = {
                id: Date.now(),
                title,
                url,
                points: 0,
            };
            onAddLink(newLink);
            setTitle('');
            setUrl('');
        }
    };

    return (
        <div className="bg-white flex flex-col items-center pt-8">
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 flex flex-col items-center w-full max-w-md">
                <input
                    type="text"
                    placeholder="Link Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Link URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="border p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">SUBMIT A LINK</button>
            </form>
        </div>
    );
};

export default SubmitLinkForm;
