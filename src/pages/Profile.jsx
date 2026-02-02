import { useEffect, useState } from 'react';
import { getProfileUi, getPersonalInfo } from '../services/profileService';

export default function Profile() {
  const [ui, setUi] = useState(null);
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    getProfileUi().then((data) => setUi(data || null));
    getPersonalInfo().then((data) => setPersonalInfo(data || null));
  }, []);

  const pageUi = ui?.pages?.profile;
  const fields = pageUi?.fields;

  if (!pageUi) {
    return (
      <section className="min-h-screen bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
          <div className="text-[#141416]">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-6 md:py-10">
        <div className="max-w-[640px]">
          <h1 className="text-2xl md:text-3xl font-bold text-[#141416] mb-2">
            {pageUi.title}
          </h1>
          {pageUi.subtitle && (
            <p className="text-sm md:text-base text-[#777E90] mb-6 md:mb-8">
              {pageUi.subtitle}
            </p>
          )}

          <form className="flex flex-col gap-4 md:gap-5">
            {fields?.fullNameLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#141416]">
                  {fields.fullNameLabel}
                </label>
                <input
                  type="text"
                  defaultValue={personalInfo?.fullName}
                  className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  placeholder={fields.fullNamePlaceholder}
                />
              </div>
            )}

            {fields?.emailLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#141416]">
                  {fields.emailLabel}
                </label>
                <input
                  type="email"
                  defaultValue={personalInfo?.email}
                  className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  placeholder={fields.emailPlaceholder}
                />
              </div>
            )}

            {fields?.phoneLabel && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#141416]">
                  {fields.phoneLabel}
                </label>
                <input
                  type="tel"
                  defaultValue={personalInfo?.phone}
                  className="w-full h-[44px] px-4 border border-[#E6E8EC] rounded-lg text-sm text-[#141416] bg-white"
                  placeholder={fields.phonePlaceholder}
                />
              </div>
            )}

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
    </section>
  );
}
