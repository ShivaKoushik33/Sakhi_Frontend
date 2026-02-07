import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPaymentPageData } from '../services/orderService';

export default function BuyNowPayment() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaymentPageData()
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

  if (!data?.ui) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-[#141416]">No data available</div>
      </div>
    );
  }

  const { ui, orderSummary } = data;
  const total = orderSummary?.total ?? 0;
  const itemCount = orderSummary?.itemCount ?? 0;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#141416] mb-2">{ui.title}</h1>
        {ui.subtitle && (
          <p className="text-sm md:text-base text-[#777E90] mb-6 md:mb-8">{ui.subtitle}</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">
            <section className="bg-white border border-[#E6E8EC] rounded-lg p-4 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-[#141416] mb-4 md:mb-6">
                {ui.sectionTitles?.paymentMethod}
              </h2>
              <div className="flex flex-wrap gap-3">
                <button type="button" className="px-4 py-2 border-2 border-[#901CDB] rounded-lg text-sm font-medium text-[#901CDB] bg-[#901CDB]/5">
                  Card
                </button>
                <button type="button" className="px-4 py-2 border-2 border-[#E6E8EC] rounded-lg text-sm font-medium text-[#353945] hover:border-[#901CDB] hover:text-[#901CDB]">
                  UPI
                </button>
                <button type="button" className="px-4 py-2 border-2 border-[#E6E8EC] rounded-lg text-sm font-medium text-[#353945] hover:border-[#901CDB] hover:text-[#901CDB]">
                  Net Banking
                </button>
              </div>
            </section>

            <section className="bg-white border border-[#E6E8EC] rounded-lg p-4 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-[#141416] mb-4 md:mb-6">
                {ui.sectionTitles?.cardDetails}
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#141416] mb-1">{ui.labels?.cardNumber}</label>
                  <input
                    type="text"
                    placeholder={ui.placeholders?.cardNumber}
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#141416] mb-1">{ui.labels?.expiry}</label>
                    <input
                      type="text"
                      placeholder={ui.placeholders?.expiry}
                      className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#141416] mb-1">{ui.labels?.cvv}</label>
                    <input
                      type="text"
                      placeholder={ui.placeholders?.cvv}
                      className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#141416] mb-1">{ui.labels?.nameOnCard}</label>
                  <input
                    type="text"
                    placeholder={ui.placeholders?.nameOnCard}
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <section className="sticky top-24 bg-white border border-[#E6E8EC] rounded-lg p-4 md:p-6">
              <h2 className="text-base md:text-lg font-semibold text-[#141416] mb-4 md:mb-6">
                {ui.sectionTitles?.orderSummary}
              </h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm md:text-base text-[#141416]">Total ({itemCount} Items)</span>
                <span className="text-xl md:text-2xl font-bold text-[#141416]">₹ {total.toLocaleString()}</span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full py-3 bg-[#901CDB] text-white rounded-lg text-sm md:text-base font-medium hover:bg-[#7A16C0] transition-colors"
              >
                {ui.labels?.placeOrder}
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
