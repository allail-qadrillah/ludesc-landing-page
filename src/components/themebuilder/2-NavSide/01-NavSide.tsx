import { ReactNode } from 'react';

// Komponen Bungkus / Wrapper
interface SidebarProps {
    children: ReactNode;
}

const NavSide: React.FC<SidebarProps> = ({ children }) => {
    return (
        <div className="hidden md:flex w-full md:w-1/5 flex-col justify-start items-start space-y-4 mt-8 md:mt-0 ml-0 md:ml-10">
            {children}
        </div>
    );
};

export default NavSide;
