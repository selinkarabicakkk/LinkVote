import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-white flex flex-col pt-8">
            <div className="flex items-center mb-5 ml-8 w-1/5">
                <Image src="/hepsiburada_logo1.png" alt="Hepsiburada Logo" width={150} height={40}/>
            </div>
            <div className="flex">
                <div className="header-line bg-orange-500"></div>
                <div className="header-line bg-blue-400"></div>
                <div className="header-line bg-purple-500"></div>
                <div className="header-line bg-green-500"></div>
                <div className="header-line bg-purple-900"></div>
            </div>
        </header>
    );
};

export default Header;
