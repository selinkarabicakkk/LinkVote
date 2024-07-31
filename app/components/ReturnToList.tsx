import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'



const ReturnToList: React.FC = () => {

    
    const router = useRouter();

    const handleReturn = () => {
        router.push('/');
    };

    return (
        <button
            onClick={handleReturn}
            className="bg-white text-black pt-8 flex justify-end pl-4 ml-12 w-2/5"
        >
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </div>
            <div>
            <span className='font-bold'>
            Return to List
            </span> 
            </div>
        </button>
    );
};

export default ReturnToList;


