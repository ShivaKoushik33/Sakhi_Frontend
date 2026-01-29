import { Link } from 'react-router-dom';
import { useState } from 'react';
import MainIcon from '../../assets/images/MainIcon.svg';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Promotional Banner */}
      <div className="bg-[#901CDB] h-10 flex items-center justify-center overflow-hidden relative">
        <div className="flex items-center gap-[18px] animate-scroll whitespace-nowrap">
          <span className="text-sm font-bold bg-gradient-to-r from-[#FBCC8E] via-[#FFECD3] to-[#FBCC8E] bg-clip-text text-transparent">
            FLAT 50% on Rings and Necklaces
          </span>
          <div className="w-[9.9px] h-[9.9px] bg-[#FBCC8E] rounded-full"></div>
          <span className="text-sm font-bold bg-gradient-to-r from-[#FBCC8E] via-[#FFECD3] to-[#FBCC8E] bg-clip-text text-transparent">
            Exclusive Offers on Traditional Jewellery
          </span>
          <div className="w-[9.9px] h-[9.9px] bg-[#FBCC8E] rounded-full"></div>
          <span className="text-sm font-bold bg-gradient-to-r from-[#FBCC8E] via-[#FFECD3] to-[#FBCC8E] bg-clip-text text-transparent">
            FLAT 50% on Rings and Necklaces
          </span>
          <div className="w-[9.9px] h-[9.9px] bg-[#FBCC8E] rounded-full"></div>
          <span className="text-sm font-bold bg-gradient-to-r from-[#FBCC8E] via-[#FFECD3] to-[#FBCC8E] bg-clip-text text-transparent">
            Exclusive Offers on Traditional Jewellery
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-[140px] py-[18px]">
          <div className="flex items-center justify-between gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-[7.61px]">
  <img
    src={MainIcon}
    alt="The Sakhi Jewels"
    className="h-[49px] w-auto"
  />
  {/* Brand Text */}
  <span className="font-olivera text-[23.82px] leading-[0.83] text-transparent bg-clip-text bg-gradient-to-b from-[#FFBD37] to-[#F7D14E]">
    THE SAKHI
    <br />
    JEWELS
  </span>
</Link>

            {/* Location Selector */}
            <div className="flex flex-col gap-1 px-2 py-2 border border-[#901CDB] rounded-lg">
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C5.24 0 3 2.24 3 5C3 9 8 16 8 16S13 9 13 5C13 2.24 10.76 0 8 0ZM8 7C6.9 7 6 6.1 6 5C6 3.9 6.9 3 8 3C9.1 3 10 3.9 10 5C10 6.1 9.1 7 8 7Z" fill="#000000"/>
                </svg>
                <span className="text-xs text-right text-black">Where to Deliver?</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[11px] text-black">Update Delivery Pincode</span>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.42 0.42L4 4L7.58 0.42" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 flex items-center justify-between gap-[179px] px-5 py-[14px] border border-[#E8E8E8] rounded-xl">
              <span className="text-base font-light text-[#8C8C8C]">Search for 'Rings'</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="6.5" stroke="#901CDB" strokeWidth="2"/>
                <path d="M13.5 13.5L17 17" stroke="#901CDB" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-5 h-12">
              {/* Language Selector */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-full bg-gray-200"></div>
                <div className="flex items-center gap-1">
                  <span className="text-[13px] text-[#901CDB]">English</span>
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.42 0.42L4 4L7.58 0.42" stroke="#901CDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Wishlist */}
              <Link to="/wishlist" className="flex flex-col items-center gap-2">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 15.5L2.5 9C1.5 8 1 6.5 1 5C1 2.5 3 0.5 5.5 0.5C6.5 0.5 7.5 0.8 8.2 1.5L9 2.3L9.8 1.5C10.5 0.8 11.5 0.5 12.5 0.5C15 0.5 17 2.5 17 5C17 6.5 16.5 8 15.5 9L9 15.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-black">Wishlist</span>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="flex flex-col items-center gap-2 w-12">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H3.5L5.5 12H15.5L17 5H5" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="16" r="1.5" stroke="black" strokeWidth="0.5"/>
                  <circle cx="15" cy="16" r="1.5" stroke="black" strokeWidth="0.5"/>
                </svg>
                <span className="text-sm text-black">Cart</span>
              </Link>

              {/* Profile */}
              <Link to="/profile" className="flex flex-col items-center gap-2 w-12">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="5" r="3" stroke="black" strokeWidth="0.5"/>
                  <path d="M3 16C3 12 6 10 9 10C12 10 15 12 15 16" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                </svg>
                <span className="text-sm text-black">Profile</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="border-b border-[#E6E8EC]">
          <div className="max-w-[1440px] mx-auto px-[100px] pb-2">
          <div className="flex items-center gap-5 flex-nowrap whitespace-nowrap">

              <div className="flex items-center gap-1 px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">Shop by Category</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6L5 1L0 6" stroke="#353945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">SALE is Live</span>
              </div>
              <div className="px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">Necklaces</span>
              </div>
              <div className="px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">Bracelets</span>
              </div>
              <div className="px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">Earrings</span>
              </div>
              <div className="flex items-center gap-1 px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">Student collections</span>
                <svg  width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6L5 1L0 6" stroke="#353945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex items-center gap-1 px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">Exclusive collections</span>
                <svg  width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6L5 1L0 6" stroke="#353945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex items-center gap-1 px-[10px] py-[10px]">
                <span className="text-base text-[#353945]">More at Sakhi Jewels</span>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
