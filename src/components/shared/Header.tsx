import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FONT_SIZES } from '@/config/typography';
import ContactButton from './ContactButton';
import './Header.css';

interface HeaderProps {
  activeSection?: 'visit' | 'beekeeping' | 'personal-beekeeping' | 'corporate-beekeeping' | 'production' | 'history' | null;
}

const Header: React.FC<HeaderProps> = ({ activeSection = null }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset submenu when closing menu
      setActiveSubmenu(null);
    }
  }, [isMenuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Агротуризм', path: '/visit', key: 'visit' },
    { 
      label: 'Пчеловодство', 
      path: '/beekeeping', 
      key: 'beekeeping',
      submenu: [
        { label: 'Корпоративное пчеловодство', path: '/corporate-beekeeping' },
        { label: 'Личное пчеловодство', path: '/personal-beekeeping' },
        { label: 'Опыление', path: '/pollination' }
      ]
    },
    { label: 'Продукция', path: '/production', key: 'production' },
    { 
      label: 'История', 
      path: '/#history',
      key: 'history',
      submenu: [
        { label: 'Концепция и команда', path: '/concept' },
        { label: 'Вакансии', path: '/vacancies' },
        { label: 'Волонтерство', path: '/volunteering' },
      ]
    },
    { label: 'Цены', path: '/#prices' },
    { label: 'Ресурсы', path: '/#resources' },
  ];

  const currentSubmenu = navItems.find(item => item.key === activeSubmenu);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute' as 'absolute' 
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative' as 'relative'
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
       position: 'absolute' as 'absolute'
    })
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`header ${scrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}
      >
        <div className="header__inner">
          {/* Logo */}
          <div className="header__logo" style={{ fontSize: FONT_SIZES.subheading }}>
            <a href="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>К</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav desktop-only">
            {navItems.map((item) => {
              const isActive = activeSection === item.key || 
                (item.key === 'beekeeping' && (activeSection === 'personal-beekeeping' || activeSection === 'corporate-beekeeping'));
              
              return (
              <div key={item.label} className="header__nav-item">
                <a
                  href={item.path}
                  className={`header__nav-link ${
                    isActive ? 'header__nav-link--active' : ''
                  }`}
                  style={{ fontSize: FONT_SIZES.body }}
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="header__dropdown">
                    {/* Submenu items */}
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.path}
                        className="header__dropdown-link"
                        style={{ fontSize: FONT_SIZES.body }}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <ContactButton className="desktop-only" />

          {/* Mobile Menu Button - Hamburger */}
          <button 
             className={`header__menu-btn ${isMenuOpen ? 'open' : ''} mobile-only`} 
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             aria-label="Menu"
          >
             <span></span>
             <span></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} 
          >
            <div className="mobile-menu__content">
              
              <div className="mobile-menu__nav-container">
                 <AnimatePresence initial={false} mode="wait">
                    {!activeSubmenu ? (
                       <motion.div 
                          key="main-menu"
                          className="mobile-menu__nav"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                        {navItems.map((item, index) => (
                           <motion.div 
                              key={item.label} 
                              className="mobile-menu__item"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                           >
                              {item.submenu ? (
                                 <button
                                    onClick={() => setActiveSubmenu(item.key!)}
                                    className="mobile-menu__link mobile-menu__link--btn"
                                 >
                                    <span style={{flex: 1}}>{item.label}</span>
                                    <span className="mobile-menu__arrow">›</span>
                                 </button>
                              ) : (
                                 <a 
                                    href={item.path} 
                                    className="mobile-menu__link"
                                    onClick={() => setIsMenuOpen(false)}
                                 >
                                    {item.label}
                                 </a>
                              )}
                           </motion.div>
                        ))}
                       </motion.div>
                    ) : (
                       <motion.div 
                          key="submenu"
                          className="mobile-menu__submenu-page"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                       >
                          {currentSubmenu && (
                             <>
                                <button 
                                   onClick={() => setActiveSubmenu(null)}
                                   className="mobile-menu__back-btn"
                                >
                                   <span style={{ marginRight: '10px', opacity: 0.5 }}>‹</span>
                                   {currentSubmenu.label}
                                </button>
                                <div className="mobile-menu__submenu-list">
                                   {/* Parent link for mobile navigation */}
                                   <a
                                      href={currentSubmenu.path}
                                      className="mobile-menu__sublink"
                                      onClick={() => setIsMenuOpen(false)}
                                   >
                                      {currentSubmenu.label}
                                   </a>

                                   {currentSubmenu.submenu?.map((subItem) => (
                                      <a
                                         key={subItem.label}
                                         href={subItem.path}
                                         className="mobile-menu__sublink"
                                         onClick={() => setIsMenuOpen(false)}
                                      >
                                         {subItem.label}
                                      </a>
                                   ))}
                                </div>
                             </>
                          )}
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <motion.div 
                className="mobile-menu__footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                 <ContactButton onClick={() => setIsMenuOpen(false)} className="mobile-menu__btn" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;