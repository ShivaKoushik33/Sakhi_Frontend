import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getOrderReviewData } from '../services/orderService';

export default function BuyNowReview() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrderReviewData()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">Loading...</div>
      </div>
    );
  }

  if (!data?.ui || !data?.order) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">No data available</div>
        <Link to="/cart" className="ml-2 text-[#901CDB]">Back to Cart</Link>
      </div>
    );
  }

  const { ui, order } = data;
  const { address, items, summary } = order;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#141416] mb-2">{ui.title}</h1>
        {ui.subtitle && (
          <p className="text-sm md:text-base text-[#777E90] mb-6 md:mb-8">{ui.subtitle}</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">
            {ui.sectionTitles?.deliveryAddress && (
              <section className="bg-white border border-[#E6E8EC] rounded-lg p-4 md:p-6">
                <h2 className="text-base md:text-lg font-semibold text-[#141416] mb-3 md:mb-4">
                  {ui.sectionTitles.deliveryAddress}
                </h2>
                <div className="text-sm md:text-base text-[#353945]">
                  <p className="font-medium text-[#141416]">{address.name}</p>
                  <p className="mt-1">{address.phone}</p>
                  <p className="mt-1">{address.line1}</p>
                  <p className="mt-1">{address.city}, {address.state} - {address.pincode}</p>
                </div>
                {ui.labels?.editAddress && (
                  <button type="button" className="mt-3 text-sm font-medium text-[#901CDB]">
                    {ui.labels.editAddress}
                  </button>
                )}
              </section>
            )}

            {ui.sectionTitles?.items && (
              <section className="bg-white border border-[#E6E8EC] rounded-lg p-4 md:p-6">
                <h2 className="text-base md:text-lg font-semibold text-[#141416] mb-3 md:mb-4">
                  {ui.sectionTitles.items}
                </h2>
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 md:gap-4 p-3 md:p-4 border border-[#E6E8EC] rounded-lg">
                      <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-[#E6E8EC]">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm md:text-base font-semibold text-[#141416] truncate">{item.name}</p>
                        <p className="text-sm text-[#777E90] mt-0.5">Qty: {item.quantity}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm md:text-base font-semibold text-[#141416]">₹{item.price.toLocaleString()}</span>
                          <span className="text-xs md:text-sm text-[#777E90] line-through">₹{item.originalPrice.toLocaleString()}</span>
                          <span className="bg-[#34C759] px-1.5 py-0.5 rounded text-[10px] md:text-xs font-bold text-white uppercase">{item.discount}% OFF</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <section className="sticky top-24 bg-white border border-[#E6E8EC] rounded-lg p-4 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-[#141416] mb-4 md:mb-6">
                {ui.sectionTitles?.orderSummary}
              </h2>
              <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-[#141416]">{ui.labels?.subtotal}({summary.itemCount}items)</span>
                  <span className="font-semibold text-[#141416]">₹ {summary.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-[#141416]">{ui.labels?.discount}</span>
                  <span className="font-semibold text-[#34C759]">- ₹ {summary.discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-[#141416]">{ui.labels?.deliveryFee}</span>
                  <span className="font-semibold text-[#34C759]">₹ {summary.deliveryFee}</span>
                </div>
              </div>
              <div className="border-t border-[#E6E8EC] my-4 md:my-6"></div>
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <span className="text-base md:text-lg font-semibold text-[#141416]">{ui.labels?.total} ({summary.itemCount} Items)</span>
                <span className="text-xl md:text-2xl font-bold text-[#141416]">₹ {summary.total.toLocaleString()}</span>
              </div>
              <p className="text-xs md:text-sm text-[#34C759] mb-4 md:mb-6">
                {ui.labels?.saved} ₹{summary.savings.toLocaleString()} {ui.labels?.onThisOrder}
              </p>
              <button
                type="button"
                onClick={() => navigate('/checkout/payment')}
                className="w-full py-3 bg-[#901CDB] text-white rounded-lg text-sm md:text-base font-medium hover:bg-[#7A16C0] transition-colors"
              >
                {ui.labels?.proceedToPayment}
              </button>
              <div className="mt-4 bg-[#EDE0F2] rounded-lg p-3 md:p-4">
                <p className="text-xs md:text-sm font-semibold text-[#141416]">
                  {ui.labels?.expectedDelivery} {summary.expectedDelivery}
                </p>
                <p className="text-xs md:text-sm text-[#141416] mt-1">
                  {ui.labels?.freeShippingNote} {summary.freeShippingThreshold}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
