export default function PromoBannerSection({ data }) {
    if (!data) return null;
  
    return (
      <div className="w-full max-w-[1440px] mx-auto my-20 px-[121px]">
        <div className="w-full h-[235px] rounded-2xl overflow-hidden">
          <img
            src={data.image}
            alt="Promo Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  