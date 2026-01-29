import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCartData } from '../services/cartService';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCartData();
        setCart(data);
        // Initialize quantities
        const initialQuantities = {};
        data.items.forEach(item => {
          initialQuantities[item.id] = item.quantity;
        });
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Error fetching cart:', error);
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
        <div className="max-w-[1440px] mx-auto px-[120px] py-10">
          <h1 className="text-3xl font-bold text-[#141416] mb-10">My Cart</h1>
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-6">
            <p className="text-lg text-[#777E90]">Your cart is empty</p>
            <Link
              to="/products"
              className="px-8 py-3 bg-[#901CDB] text-white rounded-lg text-base font-medium hover:bg-[#7A16C0] transition-colors"
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
      <div className="max-w-[1440px] mx-auto px-[120px] py-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#141416] mb-10">My Cart</h1>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="col-span-2 flex flex-col gap-6">
            {cart.items.map((item) => (
              <div key={item.id} className="flex gap-6 p-6 bg-white border border-[#E6E8EC] rounded-lg shadow-sm relative">
                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-[#777E90] hover:text-[#141416]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Product Image */}
                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-[#E6E8EC]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-[#141416]">{item.name}</h3>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold text-[#141416]">₹{item.price.toLocaleString()}</span>
                    <span className="text-base font-normal text-[#777E90] line-through">₹{item.originalPrice.toLocaleString()}</span>
                    <div className="bg-[#34C759] px-2 py-1 rounded-md">
                      <span className="text-xs font-bold text-white uppercase">{item.discount}% OFF</span>
                    </div>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-10 h-10 flex items-center justify-center bg-[#901CDB] text-white rounded-lg hover:bg-[#7A16C0] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                    <input
                      type="number"
                      value={quantities[item.id] || item.quantity}
                      readOnly
                      className="w-16 h-10 text-center border border-[#901CDB] rounded-lg text-base font-medium text-[#141416]"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-10 h-10 flex items-center justify-center bg-[#901CDB] text-white rounded-lg hover:bg-[#7A16C0] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Keep Shopping Button */}
            <div className="flex justify-center mt-4">
              <Link
                to="/products"
                className="px-8 py-3 border-2 border-[#901CDB] rounded-lg text-base font-medium text-[#901CDB] hover:bg-[#901CDB] hover:text-white transition-colors"
              >
                Keep Shopping
              </Link>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="col-span-1">
            <div className="sticky top-24 bg-white border border-[#E6E8EC] rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-[#141416] mb-6">Order Summary</h2>

              {/* Summary Details */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-base font-normal text-[#141416]">Subtotal({cart.orderSummary.itemCount}items)</span>
                  <span className="text-base font-semibold text-[#141416]">₹ {cart.orderSummary.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-normal text-[#141416]">Discount</span>
                  <span className="text-base font-semibold text-[#34C759]">- ₹ {cart.orderSummary.discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-normal text-[#141416]">Delivery Fee</span>
                  <div className="flex flex-col items-end">
                    <span className="text-base font-semibold text-[#34C759]">₹ {cart.orderSummary.deliveryFee}</span>
                    <span className="text-sm font-normal text-[#34C759]">Free Delivery</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E6E8EC] my-6"></div>

              {/* Total */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-[#141416]">Total Amount ({cart.orderSummary.itemCount} Items)</span>
                <span className="text-2xl font-bold text-[#141416]">₹ {cart.orderSummary.total.toLocaleString()}</span>
              </div>

              {/* Savings Message */}
              <p className="text-sm font-normal text-[#34C759] mb-6">
                You saved ₹{cart.orderSummary.savings.toLocaleString()} on this order
              </p>

              {/* Checkout Button */}
              <button className="w-full px-6 py-3 bg-[#901CDB] text-white rounded-lg text-base font-medium hover:bg-[#7A16C0] transition-colors mb-6">
                Checkout Securely
              </button>

              {/* Expected Delivery */}
              <div className="bg-[#EDE0F2] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7.5L10 12.5L17.5 7.5M2.5 12.5L10 17.5L17.5 12.5" stroke="#901CDB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base font-semibold text-[#141416]">Expected delivery on {cart.orderSummary.expectedDelivery}</span>
                </div>
                <p className="text-sm font-normal text-[#141416]">
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
