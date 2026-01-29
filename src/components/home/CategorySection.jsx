export default function CategorySection({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-[38px]">
      <div className="flex items-center justify-center gap-7">
        {/* Left Arrow */}
        <button className="w-10 h-10 flex items-center justify-center border border-[#E6E8EC] rounded-full opacity-0">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 6.5L7 12" stroke="#353945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Categories */}
        <div className="flex items-center gap-8">
          {data.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-3">
              <div className="relative w-[148px] h-[148px] rounded-[17.41px] border border-[#901CDB]/20 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-gradient-to-b from-transparent to-[#160421]"></div>
                {/* Badge */}
                {category.badge && (
                  <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2">
                  <div className="bg-[#901CDB]  py-2  flex items-center justify-center">
                    <span className="text-[14px] font-medium text-white whitespace-nowrap">
                      {category.badge}
                    </span>
                  </div>
                </div>
                
                )}
              </div>
              <span className="text-base font-medium text-[#353945]">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="w-10 h-10 flex items-center justify-center border border-[#E6E8EC] rounded-full">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 6.5L1 12" stroke="#353945" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
