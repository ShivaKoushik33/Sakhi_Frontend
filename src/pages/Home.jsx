import { useState, useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategorySection from '../components/home/CategorySection';
import JewelleryEssentials from '../components/home/JewelleryEssentials';
import ProductGrid from '../components/home/ProductGrid';
import Testimonials from '../components/home/Testimonials';
import OurStory from '../components/home/OurStory';
import { getHomepageData } from '../services/homepageService';

import PromoBannerSection from '../components/home/PromoBannerSection';

export default function Home() {
  const [homepage, setHomepage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHomepageData();
        setHomepage(data);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FCFDFC] flex items-center justify-center">
        <div className="text-lg text-[#141416]">Loading...</div>
      </div>
    );
  }

  if (!homepage) {
    return (
      <div className="min-h-screen bg-[#FCFDFC] flex items-center justify-center">
        <div className="text-lg text-[#141416]">No data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFDFC]">
      {/* Hero Banner */}
      {homepage.hero && <HeroBanner data={homepage.hero} />}

      {/* Shop by Categories */}
      {homepage.categories && (
        <div className="w-full max-w-[1440px] mx-auto my-6 md:my-10 px-2 md:px-4">
          <div className="flex flex-col items-center gap-2.5 px-2.5 py-2.5 mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[#141416] text-center">Shop by Categories</h2>
          </div>
          <CategorySection data={homepage.categories} />
        </div>
      )}

      {/* 2026 Jewellery Essentials */}
      {homepage.essentials && (
        <div className="my-10 md:my-20">
          <JewelleryEssentials data={homepage.essentials} />
        </div>
      )}

      {/* Most Gifted */}
      {homepage.mostGifted && (
        <div className="w-full max-w-[1440px] mx-auto my-10 md:my-20 px-2 md:px-4">
          <div className="flex flex-col items-center gap-2.5 px-2.5 py-2.5 mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-[#141416] text-center">Most Gifted</h2>
          </div>
          <ProductGrid title="" products={homepage.mostGifted} showViewMore={true} />
        </div>
      )}

      {/* Promo Banner Section */}
      {homepage.promoBanner && (
        <PromoBannerSection data={homepage.promoBanner} />
      )}

      {/* Best Selling Products */}
      {homepage.bestSelling && (
        <div className="my-10 md:my-20">
          <ProductGrid 
            title="Best Selling products" 
            products={homepage.bestSelling} 
            showViewMore={true} 
          />
        </div>
      )}

      {/* Testimonials */}
      {homepage.testimonials && (
        <div className="my-10 md:my-20">
          <Testimonials data={homepage.testimonials} />
        </div>
      )}

      {/* Our Story */}
      {homepage.ourStory && <OurStory data={homepage.ourStory} />}
    </div>
  );
}
