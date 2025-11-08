'use client';

import { useState, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  isOpen: boolean;
}

const Banner = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      title: "Live Casino",
      description: "Play Baccarat, Roulette, Poker & more with real dealers in HD. Enjoy instant rewards, exclusive promos, and nonstop thrills — your live table awaits! Join now and play live!",
      image: "images/Category/category-livecasino.webp",
      isOpen: true, // Default active
    },
    {
      id: 2,
      title: "Slots Games",
      description: "Spin fan favorites like Betty Bonkers and Stick Bandits! Experience top slots and nonstop excitement — only on SBOTOP! Join now and spin your way to big wins.",
      image: "images/Category/category-slots.webp",
      isOpen: false,
    },
    {
      id: 3,
      title: "Sports Games",
      description: "Bet with SBOTOP — Proud Sponsor of Fulham FC! From Premier League to NBA, enjoy great odds, exclusive perks, and nonstop action. Join now bet with champions!",
      image: "images/Category/category-sports.webp",
      isOpen: false,
    },
    {
      id: 4,
      title: "Promotions",
      description: "More bets, more rewards! Grab bonuses, rebates, and free credits — start winning today! Join now and feel the thrill of victory!",
      image: "images/Category/category-promotion.webp",
      isOpen: false,
    }
  ]);

  const [currentMobileCard, setCurrentMobileCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Ensure Live Casino card stays active on refresh
  useEffect(() => {
    setCards(prevCards => 
      prevCards.map(card => 
        card.id === 1 
          ? { ...card, isOpen: true }
          : { ...card, isOpen: false }
      )
    );
  }, []);

  const toggleCard = (id: number) => {
    setCards(cards.map(card => 
      card.id === id 
        ? { ...card, isOpen: !card.isOpen }
        : { ...card, isOpen: false }
    ));
  };

  const nextMobileCard = () => {
    if (currentMobileCard < cards.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentMobileCard(currentMobileCard + 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevMobileCard = () => {
    if (currentMobileCard > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentMobileCard(currentMobileCard - 1);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/background.webp)',
        width: '100%',
        maxWidth: '1920px',
        minHeight: '567px', // Mobile default
        margin: '0 auto',
      }}
    >
      {/* Tiger Character Background - Behind everything */}
      <div 
        className="hidden lg:block absolute right-0"
        style={{
          width: '700px',
          height: '720px',
          top: '56%',
          transform: 'translateY(-50%)',
          right: '10%',
          zIndex: 1, // Behind cards
        }}
      >
        <img 
          src="/images/char-tiger.webp"
          alt="Tiger Character"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.4))',
          }}
        />
      </div>

      {/* Header Section */}
      <header className="bg-transparent min-h-[40px] w-full relative z-[1000]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-0 flex items-center justify-between h-full min-h-[50px] md:min-h-[60px] lg:min-h-[85px]">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-[15px]">
            <img 
              src="/images/SBOTOP_LOGO.webp" 
              alt="SBOTOP" 
              className="h-[32px] md:h-[35px] lg:h-[41px] w-[130px] md:w-[140px] lg:w-[167px]"
            />
            <img 
              src="/images/PT_LOGO.webp" 
              alt="Playtech" 
              className="h-[17px] md:h-[23px] lg:h-[27px] w-[80px] md:w-[100px] lg:w-[130px]"
            />
          </div>
          
          {/* Navigation - Hidden on mobile, visible on tablet and desktop */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-[30px] flex-1 justify-center">
            {/* Navigation items can be added here */}
          </nav>
          
          {/* Join Now Button */}
          <button 
            className="
              bg-gradient-to-b from-[#609AF5] to-[#062F6E]
              w-[110px] md:w-[120px] lg:w-[130px]
              h-[40px] md:h-[42px] lg:h-[45px]
              rounded-[50px]
              border-none
              cursor-pointer
              font-['Inter',_sans-serif]
              font-bold
              text-[14px] md:text-[15px] lg:text-[16px]
              leading-[100%]
              text-center
              text-white
              transition-all duration-200 ease-in-out
              hover:translate-y-[-2px]
              hover:shadow-[0_4px_12px_rgba(6,47,110,0.4)]
              active:translate-y-0
            "
          >
            Join Now
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 h-full relative z-10 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-8 lg:pt-0">
          
          {/* Left Side - Cards Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start py-8 lg:py-0">
            {/* Desktop Cards Layout */}
            <div className="hidden lg:flex flex-row gap-4 lg:gap-6 justify-center items-start">
              {cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => toggleCard(card.id)}
                  className={`
                    relative cursor-pointer overflow-hidden
                    rounded-[30px]
                    shadow-2xl
                    transition-all duration-500 ease-in-out
                  `}
                  style={{
                    width: card.isOpen ? '350px' : '150px',
                    height: '560px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
                    backdropFilter: 'blur(10px)',
                    transformOrigin: 'center center',
                  }}
                >
                  {/* Card Image - Fixed position, always covers entire card */}
                  <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                    <img 
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Arrow Icon - Only show when closed */}
                    {!card.isOpen && (
                      <div className="absolute bottom-0 left-0 right-0 pb-6">
                        <div className="flex justify-center">
                          <img 
                            src="/images/Category/Arrow.svg"
                            alt="Arrow"
                            className="opacity-90"
                            style={{
                              width: '50px',
                              height: '50px',
                              filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5))',
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Overlay Content - Appears over the image when open */}
                  {card.isOpen && (
                    <div className="absolute inset-0 p-6 flex flex-col justify-end rounded-[30px]">
                      <div className="space-y-4">
                        {/* Title - Left Aligned */}
                        <h3 className="text-white font-bold text-left text-[24px]">
                          {card.title}
                        </h3>

                        {/* Description - Left Aligned */}
                        <p className="text-white text-left text-[14px] leading-[18px] opacity-95">
                          {card.description}
                        </p>

                        {/* Join Us Now Button - Centered */}
                        <div className="flex justify-center pt-2">
                          <button
                            className="
                              relative
                              w-[160px]
                              h-[45px]
                              rounded-[50px]
                              text-white
                              font-bold
                              text-base
                              transition-all duration-300
                              hover:scale-105
                              active:scale-95
                            "
                            style={{
                              background: 'linear-gradient(180deg, #3FDCFF 0%, #006FAB 100%)',
                              boxShadow: 'inset 0px 0px 15px 0px rgba(135, 214, 255, 1), 0px 10px 10px 0px rgba(28, 104, 184, 1)',
                            }}
                          >
                            Join Us Now
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Cards Layout - Partial Preview */}
            <div className="lg:hidden w-full">
              {/* Mobile Cards Container with Partial Previews */}
              <div className="relative w-full h-[400px] flex items-center justify-center">
                {/* Previous Card Preview (Left -178px) */}
                {currentMobileCard > 0 && (
                  <div 
                    className="absolute z-20 cursor-pointer transition-transform duration-300 active:scale-95"
                    style={{ 
                      left: '-150px',
                      opacity: 0.7
                    }}
                    onClick={prevMobileCard}
                  >
                    <div 
                      className="w-[200px] h-[360px] rounded-[15px] shadow-lg overflow-hidden"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <img 
                        src={cards[currentMobileCard - 1].image}
                        alt={cards[currentMobileCard - 1].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Current Card (Full) */}
                <div 
                  className={`relative z-30 mx-auto transition-all duration-300 ease-in-out ${
                    isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
                  }`}
                >
                  <div 
                    className="w-[280px] h-[400px] rounded-[20px] shadow-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Card Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={cards[currentMobileCard].image}
                        alt={cards[currentMobileCard].title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent rounded-[20px]">
                      <div className="space-y-3">
                        <h3 className="text-white font-bold text-left text-[20px]">
                          {cards[currentMobileCard].title}
                        </h3>
                        <p className="text-white text-left text-[12px] leading-[16px] opacity-95">
                          {cards[currentMobileCard].description}
                        </p>
                        {/* Join Us Now Button - Centered */}
                        <div className="flex justify-center">
                          <button
                            className="
                              w-[120px]
                              h-[35px]
                              rounded-[50px]
                              text-white
                              font-bold
                              text-sm
                              transition-all duration-300
                              hover:scale-105
                              active:scale-95
                            "
                            style={{
                              background: 'linear-gradient(180deg, #3FDCFF 0%, #006FAB 100%)',
                              boxShadow: 'inset 0px 0px 10px 0px rgba(135, 214, 255, 1), 0px 6px 6px 0px rgba(28, 104, 184, 1)',
                            }}
                          >
                            Join Us Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Card Preview (Right -178px) */}
                {currentMobileCard < cards.length - 1 && (
                  <div 
                    className="absolute z-20 cursor-pointer transition-transform duration-300 active:scale-95"
                    style={{ 
                      right: '-150px',
                      opacity: 0.7
                    }}
                    onClick={nextMobileCard}
                  >
                    <div 
                      className="w-[200px] h-[360px] rounded-[15px] shadow-lg overflow-hidden"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <img 
                        src={cards[currentMobileCard + 1].image}
                        alt={cards[currentMobileCard + 1].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Side - Empty on mobile, Tiger background on desktop */}
          <div className="hidden lg:block w-full lg:w-1/2"></div>
        </div>
      </div>

      {/* Responsive Height Styles */}
      <style jsx>{`
        @media (min-width: 1024px) {
          section {
            min-height: 795px !important;
          }
        }
        
        @media (max-width: 1023px) {
          section {
            min-height: 567px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;