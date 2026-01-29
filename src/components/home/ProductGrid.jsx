import ProductCard from './ProductCard';

export default function ProductGrid({ title, products, showViewMore = false }) {
  if (!products || !Array.isArray(products) || products.length === 0) return null;

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {/* Section Title */}
      {title && (
        <div className="flex flex-col items-center gap-2.5 px-2.5 py-2.5 mb-10">
          <h2 className="text-2xl font-semibold text-[#141416] text-center">{title}</h2>
        </div>
      )}

      {/* Product Grid */}
      <div className="px-[38px]">
        <div className="flex items-center gap-7 flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* View More Button */}
      {showViewMore && (
        <div className="flex justify-center mt-6">
          <button className="px-8 py-2.5 border border-[#901CDB] rounded-lg text-lg font-medium text-[#901CDB] hover:bg-[#901CDB] hover:text-white transition-colors">
            View More
          </button>
        </div>
      )}
    </div>
  );
}
