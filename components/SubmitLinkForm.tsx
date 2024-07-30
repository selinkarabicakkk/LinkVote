import React, { useState } from 'react';
import { Link } from '../types/Link';

interface SubmitLinkFormProps {
    onAddLink: (link: Link) => void;
}

const SubmitLinkForm: React.FC<SubmitLinkFormProps> = ({ onAddLink }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

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
            setSuccessMessage(`${title} added.`);
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000); // Show the message for 3 seconds
        }
    };

    return (
        <div className="bg-white flex flex-col items-center pt-8">
            {successMessage && (
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg mt-4">
                    {successMessage}
                </div>
            )}
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
