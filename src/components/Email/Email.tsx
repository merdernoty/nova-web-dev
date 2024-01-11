import React from 'react';

interface EmailButtonProps {
    email: string;
    label: string;
}

export const EmailButton: React.FC<EmailButtonProps> = ({ email, label }) => {
    const mailtoLink = `mailto:${email}`;

    return (
        <a href={mailtoLink} className="your-button-styles">
            {label}
        </a>
    );
};
