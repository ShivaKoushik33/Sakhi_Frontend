import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileUi, getAddressById } from '../services/profileService';

export default function EditAddress() {
  const { id } = useParams();
  const [ui, setUi] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    getProfileUi().then((data) => setUi(data || null));
    if (id) {
      getAddressById(id).then((data) => setAddress(data || null));
    }
  }, [id]);

  const pageUi = ui?.pages?.editAddress;
  const fields = pageUi?.fields;

  if (!pageUi) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-[#141416]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
        {pageUi?.title && (
          <h1 className="text-2xl md:text-3xl font-bold text-[#141416] mb-6 md:mb-8">
            {pageUi.title}
          </h1>
        )}

        <div className="max-w-[640px]">
          {pageUi?.useCurrentLocationText && (
            <button type="button" className="mb-6 text-sm font-medium text-[#901CDB]">
              {pageUi.useCurrentLocationText}
            </button>
          )}

          <form className="flex flex-col gap-4 md:gap-5">
            {fields?.nameLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#141416]">{fields.nameLabel}</label>
                <input
                  type="text"
                  defaultValue={address?.name}
                  className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  placeholder={fields.namePlaceholder}
                />
              </div>
            )}

            {fields?.phoneLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#141416]">{fields.phoneLabel}</label>
                <input
                  type="tel"
                  defaultValue={address?.phone}
                  className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  placeholder={fields.phonePlaceholder}
                />
              </div>
            )}

            {fields?.addressLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#141416]">{fields.addressLabel}</label>
                <textarea
                  defaultValue={address?.addressLine}
                  className="w-full min-h-[72px] px-4 py-2 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  placeholder={fields.addressPlaceholder}
                />
                {fields.addressErrorText && (
                  <div className="text-xs text-[#FF3B30] mt-1">{fields.addressErrorText}</div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {fields?.landmarkLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#141416]">{fields.landmarkLabel}</label>
                  <input
                    type="text"
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                    placeholder={fields.landmarkPlaceholder}
                  />
                </div>
              )}
              {fields?.pincodeLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#141416]">{fields.pincodeLabel}</label>
                  <input
                    type="text"
                    defaultValue={address?.pincode}
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                    placeholder={fields.pincodePlaceholder}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {fields?.cityLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#141416]">{fields.cityLabel}</label>
                  <input
                    type="text"
                    defaultValue={address?.city}
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                    placeholder={fields.cityPlaceholder}
                  />
                </div>
              )}
              {fields?.stateLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#141416]">{fields.stateLabel}</label>
                  <select
                    defaultValue={address?.state}
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  >
                    <option value="">{fields.statePlaceholder}</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                </div>
              )}
            </div>

            {pageUi?.primaryCtaText && (
              <button
                type="button"
                className="mt-2 w-full sm:w-[200px] h-[44px] bg-[#901CDB] text-white rounded-lg text-base font-medium hover:bg-[#7A16C0] transition-colors"
              >
                {pageUi.primaryCtaText}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
