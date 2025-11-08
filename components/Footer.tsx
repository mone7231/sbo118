'use client';

const Footer = () => {
  // License images with custom dimensions
  const licenses = [
    { id: 1, image: '/images/License/1.webp', alt: 'License 1', width: '36px', height: '35px' },
    { id: 2, image: '/images/License/2.webp', alt: 'License 2', width: '32px', height: '35px' },
    { id: 3, image: '/images/License/3.webp', alt: 'License 3', width: '29px', height: '35px' },
    { id: 4, image: '/images/License/4.webp', alt: 'License 4', width: '40px', height: '35px' },
    { id: 5, image: '/images/License/5.webp', alt: 'License 5', width: '62px', height: '35px' },
    { id: 6, image: '/images/License/6.webp', alt: 'License 6', width: '40px', height: '35px' },
  ];

  return (
    <footer 
      className="w-full md:h-[60px]"
      style={{
        background: 'rgba(221, 234, 255, 1)',
        height: '104px',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 h-full py-3 md:py-0">
          
          {/* Right Side - License Images (shows first on mobile, right on desktop) */}
          <div 
            className="license-container flex items-center gap-2 md:gap-4 order-1 md:order-2 px-3 md:px-0"
            style={{
              height: '50px',
              borderRadius: '5px',
              justifyContent: 'space-between',
            }}
          >
            {licenses.map((license) => (
              <img
                key={license.id}
                src={license.image}
                alt={license.alt}
                className="object-contain"
                style={{
                  width: license.width,
                  height: license.height,
                }}
              />
            ))}
          </div>

          {/* Left Side - Copyright Text (shows below on mobile, left on desktop) */}
          <div className="order-2 md:order-1">
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                color: 'rgba(56, 56, 56, 1)',
              }}
            >
              Copyright © SBOTOP.com. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .license-container {
          background: rgba(255, 255, 255, 1);
        }
        
        @media (min-width: 768px) {
          .license-container {
            background: transparent;
          }
          footer {
            height: 60px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;