import React from 'react';

const SubmitLinkForm: React.FC = () => {
    return (
        <div className=" bg-white flex flex-col items-center pt-8">
            <button className="bg-gray-100 p-4 flex items-center justify-center w-full max-w-md">
                <span className="text-2xl font-bold mr-2 mb-1 border-1">+</span>
                <span className="font-bold"> SUBMIT A LINK </span>
            </button>
        </div>
    );
};

export default SubmitLinkForm;
