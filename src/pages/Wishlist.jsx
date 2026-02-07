import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/home/ProductCard';
import { getWishlistData } from '../services/wishlistService';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getWishlistData();
        setWishlist(data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">Loading...</div>
      </div>
    );
  }

  if (!wishlist) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">No data available</div>
      </div>
    );
  }

  const isEmpty = wishlist.isEmpty || !wishlist.products?.length;
  const emptyState = wishlist.emptyState;

  if (isEmpty && emptyState) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 md:gap-6">
            {emptyState.illustration && (
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-square">
                <img
                  src={emptyState.illustration}
                  alt={emptyState.title || 'Empty Wishlist'}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            {emptyState.title && (
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#141416] text-center">
                {emptyState.title}
              </h1>
            )}
            {emptyState.subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-[#777E90] text-center">
                {emptyState.subtitle}
              </p>
            )}
            {emptyState.buttonText && (
              <Link
                to="/products"
                className="px-6 py-2.5 md:px-8 md:py-3 bg-[#901CDB] text-white rounded-lg text-sm md:text-base font-medium border-2 border-[#901CDB] hover:bg-[#7A16C0] transition-colors"
              >
                {emptyState.buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#141416] mb-6 md:mb-10">My Wishlist</h1>

        {wishlist.products && wishlist.products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7 mb-6 md:mb-8">
              {wishlist.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                to="/products"
                className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-[#901CDB] rounded-lg text-sm md:text-base font-medium text-[#901CDB] hover:bg-[#901CDB] hover:text-white transition-colors"
              >
                Keep Shopping
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 md:gap-6">
            <p className="text-sm md:text-lg text-[#777E90] text-center">No items in wishlist</p>
            <Link
              to="/products"
              className="px-6 py-2.5 md:px-8 md:py-3 bg-[#901CDB] text-white rounded-lg text-sm md:text-base font-medium hover:bg-[#7A16C0] transition-colors"
            >
              Add Items to wishlist
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
