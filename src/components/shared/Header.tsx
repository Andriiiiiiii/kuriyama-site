import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FONT_SIZES } from '@/config/typography';
import ContactButton from './ContactButton';
import PricesVisitContactModal from '@/components/sections/prices-visit/PricesVisitContactModal';
import './Header.css';

interface HeaderProps {
  activeSection?:
    | 'visit'
    | 'beekeeping'
    | 'personal-beekeeping'
    | 'corporate-beekeeping'
    | 'production'
    | 'history'
    | 'resources'
    | 'prices'
    | 'prices-visit'
    | 'prices-beehives'
    | null;
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection = null,
  onContactClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isDefaultContactModalOpen, setIsDefaultContactModalOpen] = useState(false);

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
    {
      label: 'Агротуризм',
      path: '/visit',
      key: 'visit',
      submenu: [
        { label: 'Визит на пасеку', path: '/apiary-visit' },
        { label: 'Мероприятия', path: '/events' },
        { label: 'Правила посещения', path: '/visiting-rules' },
        { label: 'Сад камней', path: '/stone-garden' }
      ]
    },
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
      path: '/concept',
      key: 'history',
      submenu: [
        { label: 'Вакансии', path: '/vacancies' },
        { label: 'Волонтерство', path: '/volunteering' },
      ]
    },
    {
      label: 'Цены',
      path: '/prices-visit',
      key: 'prices',
      submenu: [
        { label: 'Цены на визит', path: '/prices-visit' },
        { label: 'Цены на ульи', path: '/prices-beehives' },
      ],
    },
    {
      label: 'Ресурсы',
      path: '/photo-video',
      key: 'resources',
      submenu: [
        { label: 'Фото и видео', path: '/photo-video' },
        { label: 'Блог', path: '/blog' },
      ]
    },
  ];

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }

    setIsDefaultContactModalOpen(true);
  };

  const currentSubmenu = navItems.find(item => item.key === activeSubmenu);
  const handleMobileContactClick = () => {
    handleContactClick();
    setIsMenuOpen(false);
  };

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
      <header
        className={`header ${scrolled ? 'header--scrolled' : ''} ${isMenuOpen ? 'header--menu-open' : ''}`}
      >
        <div className="header__inner">
          {/* Logo */}
          <div className="header__logo" style={{ fontSize: FONT_SIZES.subheading }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>К</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav desktop-only">
            {navItems.map((item) => {
              const isActive = activeSection === item.key || 
                (item.key === 'beekeeping' && (activeSection === 'personal-beekeeping' || activeSection === 'corporate-beekeeping')) ||
                (item.key === 'prices' && (activeSection === 'prices-visit' || activeSection === 'prices-beehives'));
              
              return (
              <div key={item.label} className="header__nav-item">
                <Link
                  to={item.path}
                  className={`header__nav-link ${
                    isActive ? 'header__nav-link--active' : ''
                  }`}
                  style={{ fontSize: FONT_SIZES.body }}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="header__dropdown">
                    {/* Submenu items */}
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="header__dropdown-link"
                        style={{ fontSize: FONT_SIZES.body }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <ContactButton className="desktop-only" onClick={handleContactClick} />

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
      </header>

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
                                 <Link 
                                    to={item.path} 
                                    className="mobile-menu__link"
                                    onClick={() => setIsMenuOpen(false)}
                                 >
                                    {item.label}
                                 </Link>
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
                                   <Link
                                      to={currentSubmenu.path}
                                      className="mobile-menu__sublink"
                                      onClick={() => setIsMenuOpen(false)}
                                   >
                                      {currentSubmenu.label}
                                   </Link>

                                   {currentSubmenu.submenu?.map((subItem) => (
                                      <Link
                                         key={subItem.label}
                                         to={subItem.path}
                                         className="mobile-menu__sublink"
                                         onClick={() => setIsMenuOpen(false)}
                                      >
                                         {subItem.label}
                                      </Link>
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
                 <ContactButton onClick={handleMobileContactClick} className="mobile-menu__btn" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PricesVisitContactModal
        open={isDefaultContactModalOpen}
        onClose={() => setIsDefaultContactModalOpen(false)}
      />
    </>
  );
};

export default Header;
