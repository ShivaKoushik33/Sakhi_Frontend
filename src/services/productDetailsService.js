// Mock product details data service
// This simulates a real API call and can be replaced with actual API later

const mockProductDetails = {
  id: 1,
  name: 'Rose Gold Princess Earrings',
  price: 2599,
  originalPrice: 5799,
  discount: 72,
  rating: 4.8,
  reviews: 323,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  material: 'Made With Pure 925 Silver',
  images: [
    '/images/product-ring-56586a.png',
    '/images/hero-banner-112775.png',
    '/images/product-ring-56586a.png',
    '/images/testimonial-1-56586a.png',
    '/images/product-ring-56586a.png'
  ],
  finishes: [
    {
      id: 1,
      name: 'ROSE GOLD',
      image: '/images/product-ring-56586a.png',
      selected: true
    },
    {
      id: 2,
      name: 'SILVER',
      image: '/images/product-ring-56586a.png',
      selected: false
    }
  ],
  similarProducts: [
    {
      id: 1,
      name: 'Silver Classic Solitaire Ring',
      price: 3799,
      originalPrice: 8399,
      discount: 72,
      rating: 4.8,
      reviews: 323,
      image: '/images/product-ring-56586a.png',
      isBestseller: false,
      couponPrice: 3649
    },
    {
      id: 2,
      name: 'Silver Classic Solitaire Ring',
      price: 3799,
      originalPrice: 8399,
      discount: 72,
      rating: 4.8,
      reviews: 323,
      image: '/images/product-ring-56586a.png',
      isBestseller: false,
      couponPrice: 3649
    },
    {
      id: 3,
      name: 'Silver Classic Solitaire Ring',
      price: 3799,
      originalPrice: 8399,
      discount: 72,
      rating: 4.8,
      reviews: 323,
      image: '/images/product-ring-56586a.png',
      isBestseller: false,
      couponPrice: 3649
    }
  ],
  reviews: [
    {
      id: 1,
      customerName: 'Bharathi',
      date: '11/19/2025',
      rating: 5,
      review: 'Excellent collection with good offer',
      image: '/images/testimonial-1-56586a.png'
    },
    {
      id: 2,
      customerName: 'Naba',
      date: '11/19/2025',
      rating: 5,
      review: 'I just love it just a small suggestion please display the weight of the item so the customer are aware how much grams he will get. Love it 🥰',
      image: '/images/testimonial-1-56586a.png'
    },
    {
      id: 3,
      customerName: 'Akansha',
      date: '11/19/2025',
      rating: 5,
      review: 'Excellent collection with good offer',
      image: '/images/testimonial-1-56586a.png'
    },
    {
      id: 4,
      customerName: 'Dillep',
      date: '11/19/2025',
      rating: 5,
      review: 'Excellent collection with good offer',
      image: '/images/testimonial-1-56586a.png'
    }
  ],
  aggregateRating: {
    average: 4.5,
    totalReviews: 150
  }
};

export async function getProductDetailsData(productId) {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProductDetails);
    }, 300);
  });
}
