import Logo from '../../assets/images/Logo.svg';

export default function OurStory({ data }) {
  if (!data) return null;

  return (
    <div className="w-full bg-gradient-to-r from-[#5B167A] to-[#8A2BE2] mt-20">
      <div className="max-w-[1440px] mx-auto px-[121px] py-[80px] relative flex items-center">

        {/* Left Content */}
        <div className="w-1/2 text-white flex flex-col gap-4">
          <span className="text-sm opacity-80 font-color-[#FFEED8]">Our Story</span>

          <h2 className="text-3xl font-olivera font-size: 33.82px;">
            THE SAKHI JEWELS
          </h2>

          <p className="text-sm leading-relaxed max-w-[420px]">
            {data.description}
          </p>

          <button className="mt-4 w-[120px] h-[36px] bg-white text-[#5B167A] rounded-md text-sm font-medium">
            Know More
          </button>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 bottom-0 h-full flex items-end">
          <img
            // src={data.image}
            src={Logo}
            alt="Our Story"
            className="h-[300px] object-contain"
          />
        </div>

      </div>
    </div>
  );
}
