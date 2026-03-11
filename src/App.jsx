import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black selection:bg-primary selection:text-white">
      {/* Background Video */}
      <video
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Navbar Overlay */}
      <nav className="relative z-20 w-full px-6 md:px-12 lg:px-[120px] py-[16px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
            <path d="M1.04356 6.35771L13.6437 0.666504C14.7432 0.169128 15.9387 0.169123 17.0382 0.666497L29.6384 6.3577C31.5714 7.23078 32.5195 9.48911 31.867 11.5367L28.123 23.2952C27.5097 25.2212 25.751 26.541 23.6309 26.5165L20.4578 26.4799L18.4719 28.5284C17.1687 29.8726 15.0065 29.9888 13.5358 28.8105C12.3551 27.8647 11.7511 26.3195 12.0229 24.8143L13.8041 14.949C13.9878 13.9317 14.9082 13.2081 15.9427 13.2383L19.4975 13.3421C19.8665 13.353 20.0639 13.7844 19.8272 14.061L18.6668 15.4172C18.3377 15.8016 17.8466 16.0232 17.3402 16.0386C16.852 16.0534 16.4475 16.3934 16.3725 16.8528L15.3957 22.8407C15.352 23.108 15.4419 23.3768 15.6318 23.5516C15.8504 23.7527 16.1627 23.7788 16.4087 23.6186L20.2443 21.1192C20.6685 20.8428 21.2064 20.8123 21.6591 21.0384L22.9575 21.6871C23.6273 22.0216 24.0882 22.6568 24.1687 23.3854L24.3204 24.757C24.3683 25.1916 24.8213 25.4384 25.228 25.2536L28.3653 23.8291C28.7997 23.6318 29.0883 23.2119 29.1352 22.759L29.9077 15.3093C29.9571 14.8329 29.6586 14.3986 29.2023 14.2494L18.4619 10.7424C16.3769 10.0617 14.0924 10.5186 12.3813 11.9567C10.6601 13.4042 9.68233 15.626 9.87189 17.8932L10.3201 23.2554C10.3644 23.7865 9.94421 24.2255 9.42398 24.2384L5.68962 24.3312C3.51352 24.3853 1.63677 22.9378 1.15785 20.8354L0.26786 16.9272C-0.370597 14.1256 0.165997 11.1683 1.95779 8.84666L4.35411 5.74102C4.54228 5.49712 4.49842 5.15875 4.25327 4.96023L3.08059 4.01027C2.92341 3.88293 2.68656 3.87445 2.518 3.99026C1.98394 4.35706 1.48866 4.79367 1.04356 6.35771Z" />
          </svg>
          {/* Include optional logo text if implied, or just logo. Prompt: "Logo Shape" */}
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-[32px] ml-16 mr-auto">
          <li>
            <a href="#" className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity">Home</a>
          </li>
          <li className="flex items-center gap-1 cursor-pointer group">
            <span className="font-manrope font-medium text-[14px] text-white group-hover:opacity-80 transition-opacity">Services</span>
            <ChevronDown size={16} className="text-white group-hover:opacity-80 transition-opacity" />
          </li>
          <li>
            <a href="#" className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity">Reviews</a>
          </li>
          <li>
            <a href="#" className="font-manrope font-medium text-[14px] text-white hover:opacity-80 transition-opacity">Contact us</a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-[16px]">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#e5e5e5] bg-white text-[#171717] shadow-sm hover:bg-gray-100 hover:text-black h-9 px-4 py-2">
            Sign In
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/90 h-9 px-4 py-2">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col px-6 py-[16px]">
          <div className="flex justify-end">
            <button className="text-white p-2" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center mt-12 gap-8">
            <a href="#" className="font-manrope text-2xl text-white">Home</a>
            <div className="flex items-center gap-2">
              <span className="font-manrope text-2xl text-white">Services</span>
              <ChevronDown className="text-white" />
            </div>
            <a href="#" className="font-manrope text-2xl text-white">Reviews</a>
            <a href="#" className="font-manrope text-2xl text-white">Contact us</a>
            
            <div className="w-full flex flex-col gap-4 mt-8">
              <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#e5e5e5] bg-white text-[#171717] shadow-sm hover:bg-gray-100 hover:text-black h-10 px-4 py-2">
                Sign In
              </button>
              <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/90 h-10 px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center text-center mt-20 sm:mt-24 md:mt-32 px-6">
        {/* Tagline Pill */}
        <div className="hidden items-center h-[38px] rounded-[10px] bg-[rgba(85,80,110,0.4)] backdrop-blur border border-[rgba(164,132,215,0.5)] p-1 pr-3">
          <div className="bg-primary rounded-[6px] text-white px-2 py-0.5 mr-2 font-cabin font-medium text-[12px] md:text-[14px]">
            New
          </div>
          <span className="font-cabin font-medium text-[14px] text-white tracking-wide">
            Say Hello to Datacore v3.2
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-instrument text-white text-5xl sm:text-6xl md:text-[80px] lg:text-[96px] leading-[1.1] max-w-[900px] mt-8 md:mt-10 tracking-tight">
          Book your perfect stay instantly <span className="italic pr-2 pl-1">and</span> hassle-free
        </h1>

        {/* Subtext */}
        <p className="font-inter font-normal text-[18px] text-white/70 max-w-[662px] mt-6 leading-relaxed">
          Discover handpicked hotels, resorts, and stays across your favorite
          destinations. Enjoy exclusive deals, fast booking, and 24/7 support.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
          <button className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/90 h-11 px-8">
            Book a Free Demo
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] text-white shadow-sm hover:bg-[rgba(255,255,255,0.1)] backdrop-blur-md h-11 px-8">
            Get Started Now
          </button>
        </div>
      </main>
    </div>
  );
}
