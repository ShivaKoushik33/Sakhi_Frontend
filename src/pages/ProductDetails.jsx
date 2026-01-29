import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/home/ProductCard';
import { getProductDetailsData } from '../services/productDetailsService';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductDetailsData(id);
        setProduct(data);
        setSelectedFinish(data.finishes?.find(f => f.selected) || data.finishes?.[0]);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] py-10">
        {/* Product Main Section */}
        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full h-[500px] rounded-lg border border-[#E6E8EC] overflow-hidden bg-[#FCFDFC]">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rating and See Similar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#141416]">{product.rating}</span>
                <span className="text-base text-[#FF9900]">★</span>
                <span className="text-base font-normal text-[#141416]">({product.reviews})</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#901CDB] rounded-lg text-sm font-medium text-[#901CDB]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1C4.5 1 1.5 4 1.5 7.5C1.5 11 4.5 14 8 14C11.5 14 14.5 11 14.5 7.5C14.5 4 11.5 1 8 1ZM8 12.5C5.5 12.5 3.5 10.5 3.5 7.5C3.5 4.5 5.5 2.5 8 2.5C10.5 2.5 12.5 4.5 12.5 7.5C12.5 10.5 10.5 12.5 8 12.5Z" fill="#901CDB"/>
                  <path d="M8 5.5C6.6 5.5 5.5 6.6 5.5 8C5.5 9.4 6.6 10.5 8 10.5C9.4 10.5 10.5 9.4 10.5 8C10.5 6.6 9.4 5.5 8 5.5Z" fill="#901CDB"/>
                </svg>
                See Similar
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center border border-[#E6E8EC] rounded-lg">
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 6.5L7 12" stroke="#353945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="flex gap-3 flex-1 overflow-hidden">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden ${
                      selectedImage === index ? 'border-[#901CDB]' : 'border-[#E6E8EC]'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <button className="w-10 h-10 flex items-center justify-center border border-[#E6E8EC] rounded-lg">
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 6.5L1 12" stroke="#353945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="flex flex-col gap-6">
            {/* Share and Wishlist Icons */}
            <div className="flex justify-end gap-4">
              <button className="w-10 h-10 flex items-center justify-center border border-[#E6E8EC] rounded-lg">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 15.5L2.5 9C1.5 8 1 6.5 1 5C1 2.5 3 0.5 5.5 0.5C6.5 0.5 7.5 0.8 8.2 1.5L9 2.3L9.8 1.5C10.5 0.8 11.5 0.5 12.5 0.5C15 0.5 17 2.5 17 5C17 6.5 16.5 8 15.5 9L9 15.5Z" stroke="#141416" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-[#E6E8EC] rounded-lg">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1L11.5 6.5L17.5 7.5L13 11.5L14 17.5L9 14.5L4 17.5L5 11.5L0.5 7.5L6.5 6.5L9 1Z" stroke="#141416" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-semibold text-[#141416]">₹{product.price.toLocaleString()}</span>
              <span className="text-xl font-normal text-[#777E90] line-through">₹{product.originalPrice.toLocaleString()}</span>
              <div className="bg-[#34C759] px-3 py-1 rounded-md">
                <span className="text-sm font-bold text-white uppercase">{product.discount}% OFF</span>
              </div>
            </div>
            <p className="text-sm text-[#777E90]">MRP incl. of all taxes</p>

            {/* Product Title */}
            <h1 className="text-2xl font-semibold text-[#141416]">{product.name}</h1>

            {/* Material */}
            <p className="text-base font-normal text-[#353945]">{product.material}</p>

            {/* Finish Options */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-[#141416]">Choose your finish</h3>
              <div className="flex gap-4">
                {product.finishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 ${
                      selectedFinish?.id === finish.id ? 'border-[#901CDB]' : 'border-[#E6E8EC]'
                    }`}
                  >
                    <img src={finish.image} alt={finish.name} className="w-20 h-20 object-cover rounded" />
                    <span className="text-sm font-medium text-[#141416]">{finish.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Time */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold text-[#141416]">Estimated Delivery Time</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Your Pincode"
                  className="flex-1 px-4 py-2 border border-[#E6E8EC] rounded-lg text-sm"
                />
                <button className="px-6 py-2 bg-[#901CDB] text-white rounded-lg text-sm font-medium">
                  Check
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 border-2 border-[#901CDB] rounded-lg text-base font-medium text-[#901CDB]">
                Buy Now
              </button>
              <button className="flex-1 px-6 py-3 bg-[#901CDB] text-white rounded-lg text-base font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#141416] mb-4">Product Description</h2>
          <p className="text-base font-normal text-[#353945] leading-relaxed mb-2">
            {product.description}
          </p>
          <button className="text-sm font-medium text-[#901CDB]">See more</button>
        </div>

        {/* You may also like */}
        {product.similarProducts && product.similarProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#141416] text-center mb-10">You may also like</h2>
            <div className="flex items-center gap-7 justify-center">
              {product.similarProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}

        {/* Customer Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#141416] text-center mb-6">Customer Reviews</h2>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-2xl text-[#FF9900]">★</span>
                  ))}
                </div>
                <span className="text-xl font-semibold text-[#141416]">
                  {product.aggregateRating.average} ({product.aggregateRating.totalReviews} Reviews)
                </span>
              </div>
              <button className="px-6 py-2 border-2 border-[#901CDB] rounded-lg text-base font-medium text-[#901CDB]">
                Write a Review
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="flex flex-col gap-3 p-4 border border-[#E6E8EC] rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src={review.image} alt={review.customerName} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-[#141416]">{review.customerName}</span>
                      <span className="text-sm text-[#777E90]">{review.date}</span>
                    </div>
                  </div>
                  <div className="flex">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <span key={i} className="text-base text-[#FF9900]">★</span>
                    ))}
                  </div>
                  <p className="text-sm font-normal text-[#353945]">{review.review}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 border-2 border-[#901CDB] rounded-lg text-base font-medium text-[#901CDB]">
                View more reviews
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
