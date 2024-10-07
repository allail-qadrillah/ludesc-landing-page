import Link from 'next/link';

interface ActiveMenuProps {
  number: string;
  href: string;
  text: string;
  isActive: boolean;
}

const ActiveMenu: React.FC<ActiveMenuProps> = ({
  number,
  href,
  text,
  isActive
}) => {
  return (
    <div
      className={`flex items-center gap-4 ${
        isActive ? 'text-[#1C738E]' : 'text-[#999999]'
      }`}
    >
      <p
        className={`text-[13px] font-medium ${
          isActive ? 'text-[#1C738E]' : 'text-[#999999]'
        }`}
      >
        {number}
      </p>
      <Link href={href}>
        <p
          className={`text-[16px] ${
            isActive ? 'font-semibold' : 'font-medium'
          } mb-1`}
        >
          {text}
        </p>
      </Link>
    </div>
  );
};

export default ActiveMenu;
