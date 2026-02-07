import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCartData } from '../services/cartService';

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCartData();
        setCart(data);
        const initialQuantities = {};
        data.items.forEach(item => {
          initialQuantities[item.id] = item.quantity;
        });
        setQuantities(initialQuantities);
      } catch {
        setCart(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const updateQuantity = (itemId, change) => {
    setQuantities(prev => {
      const newQty = Math.max(1, (prev[itemId] || 1) + change);
      return { ...prev, [itemId]: newQty };
    });
  };

  const removeItem = (itemId) => {
    if (cart) {
      setCart({
        ...cart,
        items: cart.items.filter(item => item.id !== itemId)
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">Loading...</div>
      </div>
    );
  }

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-[#141416] mb-6 md:mb-10">My Cart</h1>
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 md:gap-6">
            <p className="text-sm md:text-lg text-[#777E90] text-center">Your cart is empty</p>
            <Link
              to="/products"
              className="px-6 py-2.5 md:px-8 md:py-3 bg-[#901CDB] text-white rounded-lg text-sm md:text-base font-medium hover:bg-[#7A16C0] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#141416] mb-6 md:mb-10">My Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
            {cart.items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 md:p-6 bg-white border border-[#E6E8EC] rounded-lg shadow-sm relative">
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 flex items-center justify-center text-[#777E90] hover:text-[#141416]"
                  aria-label="Remove item"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="w-full sm:w-32 h-48 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden border border-[#E6E8EC]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 flex flex-col gap-2 md:gap-3 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-[#141416]">{item.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="text-lg md:text-xl font-semibold text-[#141416]">₹{item.price.toLocaleString()}</span>
                    <span className="text-sm md:text-base font-normal text-[#777E90] line-through">₹{item.originalPrice.toLocaleString()}</span>
                    <div className="bg-[#34C759] px-2 py-1 rounded-md">
                      <span className="text-xs font-bold text-white uppercase">{item.discount}% OFF</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#901CDB] text-white rounded-lg hover:bg-[#7A16C0] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <input
                      type="number"
                      value={quantities[item.id] || item.quantity}
                      readOnly
                      className="w-14 md:w-16 h-9 md:h-10 text-center border border-[#901CDB] rounded-lg text-sm md:text-base font-medium text-[#141416]"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#901CDB] text-white rounded-lg hover:bg-[#7A16C0] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-2 md:mt-4">
              <Link
                to="/products"
                className="px-6 py-2.5 md:px-8 md:py-3 border-2 border-[#901CDB] rounded-lg text-sm md:text-base font-medium text-[#901CDB] hover:bg-[#901CDB] hover:text-white transition-colors"
              >
                Keep Shopping
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-[#E6E8EC] rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold text-[#141416] mb-4 md:mb-6">Order Summary</h2>
              <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-normal text-[#141416]">Subtotal({cart.orderSummary.itemCount}items)</span>
                  <span className="text-sm md:text-base font-semibold text-[#141416]">₹ {cart.orderSummary.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-normal text-[#141416]">Discount</span>
                  <span className="text-sm md:text-base font-semibold text-[#34C759]">- ₹ {cart.orderSummary.discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base font-normal text-[#141416]">Delivery Fee</span>
                  <div className="flex flex-col items-end">
                    <span className="text-sm md:text-base font-semibold text-[#34C759]">₹ {cart.orderSummary.deliveryFee}</span>
                    <span className="text-xs md:text-sm font-normal text-[#34C759]">Free Delivery</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#E6E8EC] my-4 md:my-6"></div>
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <span className="text-base md:text-lg font-semibold text-[#141416]">Total Amount ({cart.orderSummary.itemCount} Items)</span>
                <span className="text-xl md:text-2xl font-bold text-[#141416]">₹ {cart.orderSummary.total.toLocaleString()}</span>
              </div>
              <p className="text-xs md:text-sm font-normal text-[#34C759] mb-4 md:mb-6">
                You saved ₹{cart.orderSummary.savings.toLocaleString()} on this order
              </p>
              <button
                onClick={() => navigate('/checkout/review')}
                className="w-full px-4 md:px-6 py-3 bg-[#901CDB] text-white rounded-lg text-sm md:text-base font-medium hover:bg-[#7A16C0] transition-colors mb-4 md:mb-6"
              >
                Checkout Securely
              </button>
              <div className="bg-[#EDE0F2] rounded-lg p-3 md:p-4">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <svg width="18" height="18" className="md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.5L10 12.5L17.5 7.5M2.5 12.5L10 17.5L17.5 12.5" stroke="#901CDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm md:text-base font-semibold text-[#141416]">Expected delivery on {cart.orderSummary.expectedDelivery}</span>
                </div>
                <p className="text-xs md:text-sm font-normal text-[#141416]">
                  Pan India Free Shipping for orders above Rs. {cart.orderSummary.freeShippingThreshold}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
