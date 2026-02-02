import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../components/profile/OrderCard';
import { getMyOrders, getProfileUi } from '../services/profileService';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [ui, setUi] = useState(null);

  useEffect(() => {
    getProfileUi().then((data) => setUi(data || null));
    getMyOrders().then((data) => setOrders(Array.isArray(data) ? data : []));
  }, []);

  const pageUi = ui?.pages?.myOrders;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
        {pageUi?.title && (
          <div className="text-3xl font-bold text-[#141416] mb-10">
            {pageUi.title}
          </div>
        )}

        {orders.length === 0 ? (
          <div className="w-full min-h-[60vh] flex items-center justify-center">
            <div className="w-full flex items-center justify-between gap-6 md:gap-10 flex-col sm:flex-row">
              <div className="flex-1 hidden sm:block" />
              <div className="flex flex-col items-center text-center max-w-[520px] w-full px-2">
                {pageUi?.empty?.illustration && (
                  <img
                    src={pageUi.empty.illustration}
                    alt={pageUi.empty.title}
                    className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] h-auto max-h-[240px] sm:max-h-[280px] md:max-h-[320px] object-contain"
                  />
                )}
                {pageUi?.empty?.title && (
                  <div className="text-xl font-semibold text-[#141416] mt-6">
                    {pageUi.empty.title}
                  </div>
                )}
                {pageUi?.empty?.subtitle && (
                  <div className="text-sm text-[#777E90] mt-2">
                    {pageUi.empty.subtitle}
                  </div>
                )}
                {pageUi?.empty?.primaryCtaText && (
                  <Link
                    to="/products"
                    className="mt-6 inline-block px-8 md:px-10 py-3 border border-[#901CDB] rounded-lg text-base font-medium text-[#901CDB] hover:bg-[#901CDB] hover:text-white transition-colors text-center"
                  >
                    {pageUi.empty.primaryCtaText}
                  </Link>
                )}
              </div>
              <div className="flex-1 hidden sm:block" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

