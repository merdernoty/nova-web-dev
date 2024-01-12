import React from 'react';
import { EmailButton } from '../Email/Email';

const ButtonContact: React.FC = () => {
    return (
        <button className="p-2.5 my-6 border border-white rounded text-white bg-transparent hover:bg-indigo-700 transition duration-300" >
           <EmailButton email="developersnova1@gmail.com" label="Contact us" />
        </button>
    );
};

export default ButtonContact;
