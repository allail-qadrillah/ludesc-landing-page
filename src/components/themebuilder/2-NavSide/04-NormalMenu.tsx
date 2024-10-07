import Link from 'next/link';

// Komponen Menu Biasa
interface NormalMenuProps {
    number: string;
    href: string;
    text: string;
}

const NormalMenu: React.FC<NormalMenuProps> = ({ number, href, text }) => {
    return (
        <div className="flex items-center gap-4 justify-center text-[#999999]">
            <p className="text-[13px] font-medium ">{number}</p>
            <Link href={href}>
                <p className="text-[15px] font-medium mb-1  ">{text}</p>
            </Link>
        </div>
    );
};

export default NormalMenu;
