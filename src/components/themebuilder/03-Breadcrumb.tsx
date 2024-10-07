import Link from 'next/link';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

interface BreadcrumbProps {
    link: {
        name: string;
        href: string;
    };
    link2: {
        name: string;
    };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ link, link2 }) => {
    return (
        <div className='mb-6'>
            <div className="flex items-center pt-2 text-[14px] font-medium text-[#097785]">
                <Link href={link.href}>
                    <p>{link.name}</p>
                </Link>
                <HiChevronRight size={16} className="mx-3 text-[#22212186] " />
                <p className='text-[#22212186]'>
                    {link2.name}
                </p>
            </div>
        </div>
    );
};

export default Breadcrumb;
