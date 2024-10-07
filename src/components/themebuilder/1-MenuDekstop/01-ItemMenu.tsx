import React from 'react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';

interface ItemMenuProps {
    title: string;
    items: string[];
    isOpen: boolean;
    toggleDropdown: () => void;
    dropdownLinks?: string[];
    href?: string; // href sekarang opsional
}

const ItemMenu: React.FC<ItemMenuProps> = ({
    title,
    items,
    isOpen,
    toggleDropdown,
    dropdownLinks = [],
    href
}) => {
    const renderLink = dropdownLinks.length > 0 ? (
        <div className="flex items-center cursor-pointer text-[#3a3f3e]" onClick={toggleDropdown}>
            <p>{title}</p>
            <HiChevronDown className={`ml-2 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </div>
    ) : (
        <Link href={href || ''}>
            <p>{title}</p>
        </Link>
    );

    return (
        <li className="relative text-[#3a3f3e] text-[15px]">
            {renderLink}

            {dropdownLinks.length > 0 && (
                <ul
                    className={`absolute  text-[15px] left-0 top-full mt-4 bg-white border shadow-md transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} w-[230px]`} // Terapkan kelas lebar dropdown
                >
                    {dropdownLinks.map((link, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-100">
                            <Link href={link}>
                                <p>{items[index]}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default ItemMenu;
