/**
 * API Service
 * Centralized place for all API calls
 * Will be populated with actual API calls when backend is integrated
 */

import API_ENDPOINTS from '../utils/constants';

/**
 * Base fetch wrapper for API calls
 * @param {string} url - The API endpoint URL
 * @param {object} options - Fetch options
 * @returns {Promise} Response data
 */
const apiCall = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};

/**
 * Product API calls
 */
export const productService = {
  getAll: () => apiCall(API_ENDPOINTS.products),
  getById: (id) => apiCall(API_ENDPOINTS.product(id)),
};

/**
 * Cart API calls
 */
export const cartService = {
  getCart: () => apiCall(API_ENDPOINTS.cart),
  addToCart: (productId, quantity) =>
    apiCall(API_ENDPOINTS.cart, {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    }),
  removeFromCart: (itemId) =>
    apiCall(API_ENDPOINTS.cartItem(itemId), {
      method: 'DELETE',
    }),
};

/**
 * Wishlist API calls
 */
export const wishlistService = {
  getWishlist: () => apiCall(API_ENDPOINTS.wishlist),
  addToWishlist: (productId) =>
    apiCall(API_ENDPOINTS.wishlist, {
      method: 'POST',
      body: JSON.stringify({ productId }),
    }),
  removeFromWishlist: (itemId) =>
    apiCall(API_ENDPOINTS.wishlistItem(itemId), {
      method: 'DELETE',
    }),
};

/**
 * Authentication API calls
 */
export const authService = {
  login: (email, password) =>
    apiCall(API_ENDPOINTS.auth.login, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  register: (userData) =>
    apiCall(API_ENDPOINTS.auth.register, {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  logout: () =>
    apiCall(API_ENDPOINTS.auth.logout, {
      method: 'POST',
    }),
};

/**
 * User Profile API calls
 */
export const profileService = {
  getProfile: () => apiCall(API_ENDPOINTS.profile),
  updateProfile: (userData) =>
    apiCall(API_ENDPOINTS.profile, {
      method: 'PUT',
      body: JSON.stringify(userData),
    }),
};
