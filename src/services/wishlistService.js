// Mock wishlist data service
// This simulates a real API call and can be replaced with actual API later

const mockWishlistProducts = [
  {
    id: 1,
    name: 'Silver Classic Solitaire Ring',
    price: 3799,
    originalPrice: 8399,
    discount: 72,
    rating: 4.8,
    reviews: 323,
    image: '/images/product-ring-56586a.png',
    isBestseller: true,
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
  },
  {
    id: 4,
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
];

const mockEmptyWishlist = {
  isEmpty: true,
  illustration: '/api/placeholder/400/400',
  title: 'Empty Wishlist',
  subtitle: 'Oops! No items Added to wishlist',
  buttonText: 'Add Items to wishlist'
};

export async function getWishlistData() {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Change isEmpty to false to show products
      resolve({
        isEmpty: false,
        products: mockWishlistProducts,
        emptyState: mockEmptyWishlist
      });
    }, 300);
  });
}
