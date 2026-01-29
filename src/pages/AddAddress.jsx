import { useEffect, useState } from 'react';
import { getProfileUi } from '../services/profileService';

export default function AddAddress() {
  const [ui, setUi] = useState(null);

  useEffect(() => {
    getProfileUi().then((data) => setUi(data || null));
  }, []);

  const pageUi = ui?.pages?.addAddress;
  const fields = pageUi?.fields;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[120px] py-10">
        {pageUi?.title && (
          <h1 className="text-3xl font-bold text-[#141416] mb-8">
            {pageUi.title}
          </h1>
        )}

        <div className="max-w-[640px]">
          {pageUi?.useCurrentLocationText && (
            <button className="mb-6 text-sm font-medium text-[#901CDB]">
              {pageUi.useCurrentLocationText}
            </button>
          )}

          <form className="flex flex-col gap-5">
            {fields?.nameLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#141416]">
                  {fields.nameLabel}
                </label>
                <input
                  className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416]"
                  placeholder={fields.namePlaceholder}
                />
              </div>
            )}

            {fields?.phoneLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#141416]">
                  {fields.phoneLabel}
                </label>
                <input
                  className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416]"
                  placeholder={fields.phonePlaceholder}
                />
              </div>
            )}

            {fields?.addressLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm text-[#141416]">
                  {fields.addressLabel}
                </label>
                <textarea
                  className="w-full min-h-[72px] px-4 py-2 border border-[#E6E8EC] rounded-lg text-sm text-[#141416]"
                  placeholder={fields.addressPlaceholder}
                />
                {fields.addressErrorText && (
                  <div className="text-xs text-[#FF3B30] mt-1">
                    {fields.addressErrorText}
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-5">
              {fields?.landmarkLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#141416]">
                    {fields.landmarkLabel}
                  </label>
                  <input
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416]"
                    placeholder={fields.landmarkPlaceholder}
                  />
                </div>
              )}

              {fields?.pincodeLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#141416]">
                    {fields.pincodeLabel}
                  </label>
                  <input
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416]"
                    placeholder={fields.pincodePlaceholder}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-5">
              {fields?.cityLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#141416]">
                    {fields.cityLabel}
                  </label>
                  <input
                    className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416]"
                    placeholder={fields.cityPlaceholder}
                  />
                </div>
              )}

              {fields?.stateLabel && (
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-[#141416]">
                    {fields.stateLabel}
                  </label>
                  <select className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white">
                    <option>{fields.statePlaceholder}</option>
                  </select>
                </div>
              )}
            </div>

            {pageUi?.primaryCtaText && (
              <button
                type="button"
                className="mt-4 w-[200px] h-[44px] bg-[#901CDB] text-white rounded-lg text-base font-medium hover:bg-[#7A16C0] transition-colors"
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

