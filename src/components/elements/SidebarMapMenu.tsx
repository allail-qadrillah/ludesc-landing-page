import React from 'react';

interface ActiveMenuProps {
  number: string;
  href: string;
  text: string;
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SidebarMapMenu: React.FC<ActiveMenuProps> = ({
  number,
  href,
  text,
  isActive,
  onClick
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
      <a href={href} onClick={onClick}>
        <p
          className={`text-[16px] ${
            isActive ? 'font-semibold' : 'font-medium'
          } mb-1`}
        >
          {text}
        </p>
      </a>
    </div>
  );
};

export default SidebarMapMenu;
