import React from 'react';
import Link from 'next/link';

const AddButton: React.FC = () => {
    return (
        <div className="bg-white flex flex-col items-center pt-10 pb-4">
            <Link href="/add" className="bg-gray-100 p-4 flex items-center justify-center w-full max-w-md rounded-xl shadow-lg">
                <span className="text-2xl font-bold mr-2 mb-1 border-1">+</span>
                <span className="font-bold">SUBMIT A LINK</span>
            </Link>
        </div>
    );
};

export default AddButton;

