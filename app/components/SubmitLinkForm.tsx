import React, { useState } from 'react';
import { Link } from '../../types/Link';

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
            }, 2000); 
        }
    };

    return (
        <div className="bg-white flex flex-col items-center pt-12">
            
            {successMessage && (
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg mt-4">
                    {successMessage}
                </div>
            )}
            <h2 className="text-2xl font-bold mb-8 pr-64">Add New Link</h2>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 flex flex-col items-center w-full max-w-md rounded-xl shadow-lg">
            <div className='mt-4'>
            <label className="w-full text-left">Link Name:</label>
                <input
                    type="text"
                    placeholder="e.g. Alphabet"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl mt-4"
                />
                </div>

                <div className='mt-4'>
                <label className="w-full text-left">Link URL:</label>
                <input
                    type="text"
                    placeholder="e.g. http://abc.xyz"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl mt-4"
                />
                </div>
                <button type="submit" className="bg-black text-white mt-7 pb-4 py-3 w-2/5 font-bold rounded-3xl">ADD</button>
            </form>
        </div>
    );
};

export default SubmitLinkForm;
