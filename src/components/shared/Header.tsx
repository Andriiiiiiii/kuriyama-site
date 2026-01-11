import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import ContactButton from './ContactButton';
import './Header.css';

interface HeaderProps {
  activeSection?: 'visit' | 'beekeeping' | null;
}

const Header: React.FC<HeaderProps> = ({ activeSection = null }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
    >
      <div className="header__inner">
        {/* Logo */}
        <div className="header__logo" style={{ fontSize: FONT_SIZES.subheading }}>
          К
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <a
            href="/visit"
            className={`header__nav-link ${
              activeSection === 'visit' ? 'header__nav-link--active' : ''
            }`}
            style={{ fontSize: FONT_SIZES.body }}
          >
            Агротуризм
          </a>
          <a
            href="/beekeeping"
            className={`header__nav-link ${
              activeSection === 'beekeeping' ? 'header__nav-link--active' : ''
            }`}
            style={{ fontSize: FONT_SIZES.body }}
          >
            Пчеловодство
          </a>
          <a
            href="#products"
            className="header__nav-link"
            style={{ fontSize: FONT_SIZES.body }}
          >
            Продукция
          </a>
          <a
            href="#history"
            className="header__nav-link"
            style={{ fontSize: FONT_SIZES.body }}
          >
            История
          </a>
          <a
            href="#prices"
            className="header__nav-link"
            style={{ fontSize: FONT_SIZES.body }}
          >
            Цены
          </a>
          <a
            href="#resources"
            className="header__nav-link"
            style={{ fontSize: FONT_SIZES.body }}
          >
            Ресурсы
          </a>
        </nav>

        {/* CTA Button */}
        <ContactButton />
      </div>
    </motion.header>
  );
};

export default Header;