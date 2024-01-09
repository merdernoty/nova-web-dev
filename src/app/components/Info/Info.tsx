

import React from 'react';
import Image from "next/image";
interface InfoProps {
    mainText: string;
    subText: string;
}
const Info: React.FC<InfoProps> = ({ mainText, subText }) =>{
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow flex justify-center my-14">
                <div className="w-full max-w-screen-xl">
                    <div className="flex flex-col md:flex-row ml-10">
                        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                            <p
                                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-bold leading-loose text-white"
                            > {mainText}
                            </p>{subText}
                        </div>
                        <div className="md:w-1/3 ml-auto mt-auto">
                            <Image
                                width={400}
                                height={500}
                                src="/img/gregas.jpg"
                                alt="Изображение"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;