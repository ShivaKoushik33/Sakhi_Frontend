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
    <div className="flex flex-col gap-4 w-[307px]">
      {/* Product Image Container */}
      <div className="relative w-full h-[307px] bg-[#FCFDFC] border border-[#F8F8F9] rounded-t-[20px] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-0 right-0 bg-[#F4F5F6] rounded-tr-[20px] px-4 py-2 flex items-center gap-1.5">
          <div className="flex items-center">
            <span className="text-[13px] font-normal text-[#141416]">{rating}</span>
            <span className="text-base text-[#FF9900]">★</span>
          </div>
          <div className="w-px h-[17px] bg-[#141416]"></div>
          <span className="text-[13px] font-normal text-[#141416]">{reviews}</span>
        </div>

        {/* Bestseller Badge */}
        {isBestseller && (
          <div className="absolute top-0 left-[-10px] w-[108.16px] h-[44.41px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4D0F75] to-[#901CDB] rounded-br-[10px] flex items-center justify-center">
                <span className="text-sm font-semibold uppercase text-white tracking-wider">Bestseller</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2.5">
        {/* Price and Discount */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.25">
            <span className="text-lg font-medium text-[#141416]">₹{price.toLocaleString()}</span>
            <span className="text-sm font-normal text-[#777E90] line-through">₹{originalPrice.toLocaleString()}</span>
          </div>
          <div className="bg-[#34C759] px-2 py-1 rounded-md">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">{discount}% OFF</span>
          </div>
        </div>

        {/* Product Name and Coupon */}
        <div className="flex flex-col gap-2">
          <span className="text-[17px] font-normal text-[#777E90] leading-[1.83] tracking-wide">{name}</span>
          <span className="text-sm font-normal text-[#1E4CA6] leading-[1.85]">Get it for ₹{couponPrice.toLocaleString()} with coupon</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button className="flex-1 bg-[#901CDB] text-white px-2.5 py-2.5 rounded-lg text-lg font-medium text-center hover:bg-[#7A16C0] transition-colors">
            Add to Cart
          </button>
          <button className="w-10 h-10 border border-[#F8F8F9] rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17.5L2.5 11C1.5 10 1 8.5 1 7C1 4.5 3 2.5 5.5 2.5C6.5 2.5 7.5 2.8 8.2 3.5L10 5.3L11.8 3.5C12.5 2.8 13.5 2.5 14.5 2.5C17 2.5 19 4.5 19 7C19 8.5 18.5 10 17.5 11L10 17.5Z" stroke="#141416" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
