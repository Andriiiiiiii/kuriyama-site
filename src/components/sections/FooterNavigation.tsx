import React from 'react';
import { Link } from 'react-router-dom';

const BASE_FOOTER_HEIGHT = 'var(--layout-height-ratio, 56.25vw)';

const NAV_LINKS = [
  { label: 'Агротуризм', to: '/visit' },
  { label: 'Пчеловодство', to: '/beekeeping' },
  { label: 'Ресурсы', to: '/photo-video' },
  { label: 'Цены', to: '/#prices' },
] as const;

interface FooterNavigationProps {
  navTop?: string;
  navHeight?: string;
  noteTop?: string;
  noteHeight?: string;
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  navTop = '78.74%',
  navHeight = `calc(${BASE_FOOTER_HEIGHT} * 0.1616)`,
  noteTop = '92.63%',
  noteHeight = `calc(${BASE_FOOTER_HEIGHT} * 0.0174)`,
}) => {
  return (
    <>
      <div
        className="absolute flex flex-col justify-between text-white"
        style={{
          left: '8.36%',
          top: navTop,
          width: '6.85%',
          height: navHeight,
          fontSize: '1.11vw',
          zIndex: 30,
        }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <p
        className="absolute font-glametrix text-white/70"
        style={{
          left: '62.03%',
          top: noteTop,
          width: '29.51%',
          height: noteHeight,
          fontSize: '0.90vw',
          zIndex: 30,
        }}
      >
        Информация, которую необходимо расположить в футере.
      </p>
    </>
  );
};

export default FooterNavigation;
