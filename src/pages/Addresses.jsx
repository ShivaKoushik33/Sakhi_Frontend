import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddressCard from '../components/profile/AddressCard';
import { getProfileUi, getUserAddresses } from '../services/profileService';

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const [ui, setUi] = useState(null);

  useEffect(() => {
    getProfileUi().then((data) => setUi(data || null));
    getUserAddresses().then((data) =>
      setAddresses(Array.isArray(data) ? data : [])
    );
  }, []);

  const pageUi = ui?.pages?.addresses;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] py-10">
        <div className="flex items-center justify-between mb-10">
          {pageUi?.title && (
            <div className="text-3xl font-bold text-[#141416]">
              {pageUi.title}
            </div>
          )}
          {pageUi?.primaryCtaText && (
            <Link
              to="/profile/addresses/new"
              className="px-10 py-3 bg-[#901CDB] text-white rounded-lg text-base font-medium hover:bg-[#7A16C0] transition-colors"
            >
              {pageUi.primaryCtaText}
            </Link>
          )}
        </div>

        {addresses.length === 0 ? (
          <div className="w-full min-h-[60vh] flex items-center justify-center">
            <div className="flex flex-col items-center text-center max-w-[520px]">
              {pageUi?.empty?.illustration && (
                <img
                  src={pageUi.empty.illustration}
                  alt={pageUi.empty.title}
                  className="w-[520px] h-[320px] object-contain"
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
                <button className="mt-6 px-10 py-3 bg-[#901CDB] text-white rounded-lg text-base font-medium hover:bg-[#7A16C0] transition-colors">
                  {pageUi.empty.primaryCtaText}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {addresses.map((address) => (
              <AddressCard key={address.id} address={address} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

