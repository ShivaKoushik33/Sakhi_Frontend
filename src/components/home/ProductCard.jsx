import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    name = 'Silver Classic Solitaire Ring',
    price = 3799,
    originalPrice = 8399,
    discount = 72,
    rating = 4.8,
    reviews = 323,
    image = '/images/product-ring-56586a.png',
    isBestseller = false,
    couponPrice = 3649
  } = product;

  return (
    <div className="flex flex-col gap-2 sm:gap-4 w-full max-w-[307px] mx-auto sm:mx-0">
      {/* Product Image Container - clickable to Product Details */}
      <Link to={`/products/${id}`} className="block">
        <div className="relative w-full aspect-square max-h-[200px] sm:max-h-[280px] md:max-h-[307px] md:h-[307px] bg-[#FCFDFC] border border-[#F8F8F9] rounded-t-xl md:rounded-t-[20px] overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        {/* Rating Badge */}
        <div className="absolute top-0 right-0 bg-[#F4F5F6] rounded-tr-xl md:rounded-tr-[20px] px-2 py-1 md:px-4 md:py-2 flex items-center gap-1 md:gap-1.5">
          <div className="flex items-center">
            <span className="text-[11px] md:text-[13px] font-normal text-[#141416]">{rating}</span>
            <span className="text-sm md:text-base text-[#FF9900]">★</span>
          </div>
          <div className="w-px h-3 md:h-[17px] bg-[#141416] hidden sm:block"></div>
          <span className="text-[11px] md:text-[13px] font-normal text-[#141416] hidden sm:inline">{reviews}</span>
        </div>
        {/* Bestseller Badge */}
        {isBestseller && (
          <div className="absolute top-0 left-[-10px] w-[80px] h-8 md:w-[108.16px] md:h-[44.41px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4D0F75] to-[#901CDB] rounded-br-[10px] flex items-center justify-center">
                <span className="text-[10px] md:text-sm font-semibold uppercase text-white tracking-wider">Bestseller</span>
              </div>
            </div>
          </div>
        )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col gap-1.5 md:gap-2.5">
        <Link to={`/products/${id}`} className="block">
          <div className="flex items-center gap-1.5 md:gap-2.5 flex-wrap">
          <div className="flex items-center gap-1 md:gap-1.25">
            <span className="text-base md:text-lg font-medium text-[#141416]">₹{price.toLocaleString()}</span>
            <span className="text-xs md:text-sm font-normal text-[#777E90] line-through">₹{originalPrice.toLocaleString()}</span>
          </div>
          <div className="bg-[#34C759] px-1.5 py-0.5 md:px-2 md:py-1 rounded-md">
            <span className="text-[10px] md:text-[11px] font-bold text-white uppercase tracking-wider">{discount}% OFF</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <span className="text-sm md:text-[17px] font-normal text-[#777E90] leading-snug line-clamp-2 hover:text-[#141416]">{name}</span>
          <span className="text-xs md:text-sm font-normal text-[#1E4CA6] leading-snug hidden sm:inline">Get it for ₹{couponPrice.toLocaleString()} with coupon</span>
        </div>
        </Link>
        <div className="flex items-center gap-1">
          <button className="flex-1 bg-[#901CDB] text-white px-2 py-2 md:px-2.5 md:py-2.5 rounded-lg text-sm md:text-lg font-medium text-center hover:bg-[#7A16C0] transition-colors">
            Add to Cart
          </button>
          <button className="w-9 h-9 md:w-10 md:h-10 border border-[#F8F8F9] rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0">
            <svg className="w-[18px] h-[18px] md:w-5 md:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17.5L2.5 11C1.5 10 1 8.5 1 7C1 4.5 3 2.5 5.5 2.5C6.5 2.5 7.5 2.8 8.2 3.5L10 5.3L11.8 3.5C12.5 2.8 13.5 2.5 14.5 2.5C17 2.5 19 4.5 19 7C19 8.5 18.5 10 17.5 11L10 17.5Z" stroke="#141416" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
