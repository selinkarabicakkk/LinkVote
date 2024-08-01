import React from 'react';  
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="bg-white flex flex-col">
            <div className="flex justify-between pt-2">
                <div className="flex items-center pb-1 ml-8 w-1/5">
                    <Image
                        src="/logo.png"
                        alt="Hepsiburada Logo"
                        width={60}
                        height={40}
                    />
                </div>
                <div className="flex mr-6 mt-4 font">
                    <span className="font-bold font-sans text-xl">Link</span>
                    <span className="mr-2 font-sans text-xl">VOTE</span>
                    <span className="font-sans text-xl"> Challenge</span>
                </div>
            </div>
            <div className="flex">
                <div className="header-line bg-black"></div>
                <div className="header-line bg-black"></div>
                <div className="header-line bg-black"></div>
                <div className="header-line bg-black"></div>
                <div className="header-line bg-black"></div>
            </div>
        </header>
    );
};

export default Header;