import React from 'react';
import { useRouter } from 'next/router';

const ReturnToList: React.FC = () => {
    const router = useRouter();

    const handleReturn = () => {
        router.push('/');
    };

    return (
        <button
            onClick={handleReturn}
            className="bg-blue-500 text-white p-2 rounded mt-4"
        >
            Return to List
        </button>
    );
};

export default ReturnToList;