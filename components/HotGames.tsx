'use client';

import { useState, useRef, useEffect } from 'react';

const HotGames = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Generate game data for 1-16 (to fill 2x8 desktop grid)
  const games = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    image: `/images/Game_Thumbnails/${(i % 10) + 1}.webp`, // Loop through 1-10
    title: `Game ${i + 1}`,
  }));

  // Mouse/Touch drag handlers for mobile swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #CBDFFF 0%, #A4C3F7 100%)',
        maxWidth: '1920px',
        height: '400px',
        margin: '0 auto',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        {/* Hot Games Title */}
        <div className="text-center mb-6 md:mb-8">
          <h2 
            className="inline-block"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'rgba(19, 67, 140, 1)',
              marginBottom: '10px',
            }}
          >
            HOT GAMES
          </h2>
          
          {/* Line decoration below title */}
          <div className="flex justify-center mt-2">
            <img 
              src="/images/Line.webp" 
              alt="Decorative Line" 
              className="h-2 w-auto"
            />
          </div>
        </div>

        {/* Games Grid Container */}
        {/* Desktop: 2x6 grid, Tablet: 2x5 scrollable, Mobile: 3x4 scrollable */}
        <div className="relative">
          {/* Desktop View - Static Grid 2x8 */}
          <div className="hidden lg:grid lg:grid-cols-8 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="cursor-pointer"
                style={{
                  width: '140px',
                  height: '110px',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px 0px rgba(116, 149, 204, 1)',
                  overflow: 'hidden',
                }}
              >
                <img 
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Tablet View - 4 rows, scrollable, centered */}
          <div className="hidden md:block lg:hidden">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing flex justify-center"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="grid grid-rows-4 grid-flow-col gap-4">
                {games.map((game) => (
                  <div
                    key={game.id}
                    className="cursor-pointer"
                    style={{
                      width: '159px',
                      height: '110px',
                      borderRadius: '10px',
                      boxShadow: '0px 4px 10px 0px rgba(116, 149, 204, 1)',
                      overflow: 'hidden',
                    }}
                  >
                    <img 
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - 3 rows x 6 columns, scrollable */}
          <div className="block md:hidden">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="grid grid-rows-3 grid-flow-col gap-3" style={{ width: 'max-content' }}>
                {games.map((game, index) => (
                  <div
                    key={game.id}
                    className="cursor-pointer transition-transform duration-300 active:scale-95"
                    style={{
                      width: '200px',
                      height: '138px',
                      borderRadius: '10px',
                      boxShadow: '0px 4px 10px 0px rgba(116, 149, 204, 1)',
                      overflow: 'hidden',
                    }}
                  >
                    <img 
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Smooth scrolling */
        .overflow-x-auto {
          scroll-behavior: smooth;
        }

        /* Prevent text selection while dragging */
        .cursor-grabbing {
          user-select: none;
        }

        @media (max-width: 1024px) {
          section {
            height: auto !important;
            min-height: 400px;
            padding: 40px 0;
          }
        }

        @media (max-width: 640px) {
          section {
            height: auto !important;
            min-height: 480px;
            padding: 30px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HotGames;