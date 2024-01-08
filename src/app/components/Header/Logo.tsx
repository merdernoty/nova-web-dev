import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <div className="mt-6 ">
            <Image src="/img/logo.png" width={100} height={100} alt='Logo'/>
        </div>
    );
};

export default Logo;
