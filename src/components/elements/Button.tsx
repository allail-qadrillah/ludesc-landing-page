import Link from 'next/link';
import React from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

interface ButtonProps {
    icon?: React.ReactNode;
    text: string;
    href: string;
    className?: string;
    hasSubMenu?: boolean;
    isSubMenuOpen?: boolean;
    toggleSubMenu?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, href, className = '', hasSubMenu = false, isSubMenuOpen = false, toggleSubMenu }) => {

    return (
        <div>
            {hasSubMenu ? (
                <button
                    className={`flex items-center w-full p-3 rounded-[8px] font-medium text-[14px] ${className}`}
                    onClick={toggleSubMenu}
                >
                    {icon && <span>{icon}</span>}
                    <span>{text}</span>
                    <span className="ml-auto">
                        {isSubMenuOpen ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
                    </span>
                </button>
            ) : (
                <Link href={href}>
                    <button
                        className={`flex items-center w-full p-3 rounded-[8px] font-medium text-[14px] ${className}`}
                    >
                        {icon && <span>{icon}</span>}
                        <span>{text}</span>
                    </button>
                </Link>
            )}
        </div>
    );
};

export default Button;
