import React from 'react';
import Header from '@/components/shared/Header';
import ToHomeButton from '@/components/shared/ToHomeButton';
import back404 from '@/assets/404/back_404.png';
import sign1 from '@/assets/404/1.svg';
import sign2 from '@/assets/404/2.svg';

const NotFound: React.FC = () => {
  const primaryColor = '#C65A32';

  return (
    <div className="relative w-full h-screen bg-[#Fdfdfd] overflow-hidden font-glametrix text-[#2A2A2A]">
      <div className="pointer-events-auto relative z-50">
         <Header />
      </div>

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
           backgroundImage: `url(${back404})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Main Content Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-10">

          {/* Breadcrumb: Главная/ Пчеловодство */}
          <div
            className="absolute font-inter text-gray-500"
            style={{
               left: '8.418%',
               top: '12.342%',
               width: '11.685%',
               height: '1.857%',
               fontSize: 'clamp(12px, 0.9vw, 16px)',
               whiteSpace: 'nowrap'
            }}
          >
            Главная/ Пчеловодство
          </div>

          {/* Heading 1: Вы попали... */}
          <div
            className="absolute text-center flex items-center justify-center font-inter"
            style={{
               left: '41.681%',
               top: '23.304%',
               width: '21.06%',
               height: 'auto',
               fontSize: 'clamp(14px, 1.1vw, 20px)',
               color: '#4A4A4A'
            }}
          >
            Вы попали на несуществующую страницу.
          </div>

           {/* Heading 2: ВОЗМОЖНО ВЫ ИСКАЛИ */}
           <div
            className="absolute text-center font-bold uppercase flex items-center justify-center"
            style={{
               left: '26.354%',
               top: '29.74%',
               width: '51.791%',
               height: '4.812%',
               fontSize: 'clamp(20px, 2.5vw, 42px)',
               lineHeight: 1.1,
               color: '#2A2A2A'
            }}
          >
            ВОЗМОЖНО ВЫ ИСКАЛИ:
          </div>

          {/* Signs Images */}
          {/* Sign 1 */}
          <img src={sign1} className="absolute select-none" style={{ left: '8.472%', top: '36.494%', width: '19.792%', height: '38.831%', objectFit: 'contain' }} alt="Decoration" />
          {/* Sign 2 */}
          <img src={sign2} className="absolute select-none" style={{ left: '29.653%', top: '36.494%', width: '19.792%', height: '38.831%', objectFit: 'contain' }} alt="Decoration" />
          {/* Sign 3 */}
          <img src={sign1} className="absolute select-none" style={{ left: '50.764%', top: '36.494%', width: '19.792%', height: '38.831%', objectFit: 'contain' }} alt="Decoration" />
          {/* Sign 4 */}
          <img src={sign2} className="absolute select-none" style={{ left: '71.944%', top: '36.494%', width: '19.792%', height: '38.831%', objectFit: 'contain' }} alt="Decoration" />

          {/* Text on Signs */}
           <div className="absolute text-center flex items-center justify-center font-bold leading-tight"
                style={{ left: '12.977%', top: '58.4%', width: '10.756%', height: 'auto', fontSize: 'clamp(14px, 1.4vw, 24px)', color: '#3A3A3A' }}>
               Мероприятия
           </div>
            <div className="absolute text-center flex items-center justify-center font-bold leading-tight"
                 style={{ left: '34.991%', top: '58.4%', width: '8.815%', height: 'auto', fontSize: 'clamp(14px, 1.4vw, 24px)', color: '#3A3A3A' }}>
               Посещения
           </div>
            <div className="absolute text-center flex items-center justify-center font-bold leading-tight"
                 style={{ left: '54.978%', top: '58.4%', width: '11.062%', height: 'auto', fontSize: 'clamp(14px, 1.4vw, 24px)', color: '#3A3A3A' }}>
               Личное<br/>пчеловодство
           </div>
            <div className="absolute text-center flex items-center justify-center font-bold leading-tight"
                 style={{ left: '75.604%', top: '58.4%', width: '12.325%', height: 'auto', fontSize: 'clamp(14px, 1.4vw, 24px)', color: '#3A3A3A' }}>
               Корпоративное<br/>пчеловодство
           </div>

          {/* "ИЛИ" Text */}
          <div className="absolute text-center flex items-center justify-center italic"
               style={{ left: '51.326%', top: '80.327%', width: '1.682%', height: 'auto', fontSize: 'clamp(12px, 1vw, 18px)', color: '#666' }}>
              или
          </div>

          {/* Button Wrapper */}
          <div className="absolute z-20" style={{ left: '47.569%', top: '85.195%', width: '9.236%', height: '5.714%' }}>
               <ToHomeButton />
          </div>

          {/* Vector Lines */}
          {/* Vector 81 (Horizontal Top) */}
          <div className="absolute" style={{ backgroundColor: primaryColor, left: '15.417%', top: '17.727%', width: '72.708%', height: '1.5px' }} />
          {/* Vector 60 (Vertical Left) */}
          <div className="absolute" style={{ backgroundColor: primaryColor, left: '15.382%', top: '17.792%', width: '1.5px', height: '49.091%' }} />
          {/* Vector 82 (Vertical Right) */}
          <div className="absolute" style={{ backgroundColor: primaryColor, left: '88.09%', top: '9.74%', width: '1.5px', height: '57.143%' }} />
          {/* Vector 99 (Horizontal Bottom) */}
          <div className="absolute" style={{ backgroundColor: primaryColor, left: '15.417%', top: '66.818%', width: '72.708%', height: '1.5px' }} />

          {/* Vector 83 (Vertical Small Center Bottom) */}
          <div className="absolute" style={{ backgroundColor: primaryColor, left: '52.118%', top: '90.909%', width: '1.5px', height: '5.325%' }} />

          {/* Vector 100 (Horizontal Very Bottom Left) */}
          <div className="absolute" style={{ backgroundColor: primaryColor, left: '0.0%', top: '96.169%', width: '52.153%', height: '1.5px' }} />

      </div>
    </div>
  );
};

export default NotFound;
