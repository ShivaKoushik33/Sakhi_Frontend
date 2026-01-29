// Mock profile data service (API layer)
// Replace these mocks with real API calls later without changing UI components.

const UI = {
  pages: {
    myOrders: {
      title: 'My Orders',
      empty: {
        title: 'No Items Ordered Yet',
        subtitle: 'Oops! No items get ordered',
        primaryCtaText: 'Keep shopping',
        illustration: '/api/placeholder/520/360',
      },
    },
    addresses: {
      title: 'Addresses',
      primaryCtaText: 'Add New Address',
      empty: {
        title: 'No addresses added',
        subtitle: 'Add an address to get faster checkout',
        primaryCtaText: 'Add New Address',
        illustration: '/api/placeholder/520/360',
      },
    },
    addAddress: {
      title: 'Add New Address',
      useCurrentLocationText: 'Use my current location',
      primaryCtaText: 'Add Address',
      fields: {
        nameLabel: 'Name*',
        phoneLabel: 'Phone Number*',
        addressLabel: 'Address (Area and Street)*',
        landmarkLabel: 'Landmark(optional)',
        pincodeLabel: 'Pincode*',
        cityLabel: 'City/town*',
        stateLabel: 'State*',
        namePlaceholder: 'Enter your name',
        phonePlaceholder: '+91XXXXXXXXXX',
        addressPlaceholder: 'Enter Area and street no.',
        landmarkPlaceholder: 'Enter landmark',
        pincodePlaceholder: 'Enter pincode',
        cityPlaceholder: 'Enter city/town',
        statePlaceholder: 'Select State',
        addressErrorText: 'Please fill the address',
      },
    },
    bankDetails: {
      title: 'Bank & UPI Details',
      primaryCtaText: 'Add / Update',
      empty: {
        title: 'No bank details added',
        subtitle: 'Add bank or UPI details for faster refunds',
        primaryCtaText: 'Add bank details',
        illustration: '/api/placeholder/520/360',
      },
    },
  },
  common: {
    editText: 'Edit',
    deleteText: 'Delete',
  },
};

const mockOrders = [
  {
    id: 1,
    orderId: 'TSJ-ORD-10293',
    productName: 'Silver Classic Solitaire Ring',
    productImage: '/images/product-ring-56586a.png',
    price: 3799,
    orderDate: '19 Dec 2025',
    status: 'Delivered',
    ui: {
      statusTone: 'success',
    },
  },
  {
    id: 2,
    orderId: 'TSJ-ORD-10294',
    productName: 'Rose Gold Princess Earrings',
    productImage: '/api/placeholder/120/120',
    price: 2599,
    orderDate: '03 Jan 2026',
    status: 'Shipped',
    ui: {
      statusTone: 'info',
    },
  },
  {
    id: 3,
    orderId: 'TSJ-ORD-10295',
    productName: 'Silver Classic Solitaire Ring',
    productImage: '/images/product-ring-56586a.png',
    price: 3799,
    orderDate: '08 Jan 2026',
    status: 'Processing',
    ui: {
      statusTone: 'warning',
    },
  },
];

const mockAddresses = [
  {
    id: 1,
    name: 'Shaik Muzammil',
    phone: '+91 7032371104',
    addressLine:
      'Stay with friends gents pg, Hosapalaya, 8th Cross Road, Muneshwara Nagar,',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560068',
    ui: {
      editText: UI.common.editText,
      deleteText: UI.common.deleteText,
    },
  },
  {
    id: 2,
    name: 'Shaik Muzammil',
    phone: '+91 7032371104',
    addressLine:
      'Stay with friends gents pg, Hosapalaya, 8th Cross Road, Muneshwara Nagar,',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560068',
    ui: {
      editText: UI.common.editText,
      deleteText: UI.common.deleteText,
    },
  },
];

const mockBankAndUpiDetails = {
  accountHolderName: 'Shaik Muzammil',
  bankName: 'HDFC Bank',
  accountNumber: 'XXXXXX1104',
  ifscCode: 'HDFC0000123',
  upiId: 'muzammil@upi',
  ui: {
    editText: UI.common.editText,
    fields: {
      accountHolderName: 'Account holder',
      bankName: 'Bank',
      accountNumber: 'Account number',
      ifscCode: 'IFSC',
      upiId: 'UPI ID',
    },
  },
};

function withDelay(result, delayMs = 300) {
  return new Promise((resolve) => setTimeout(() => resolve(result), delayMs));
}

export async function getMyOrders() {
  return withDelay(mockOrders);
}

export async function getUserAddresses() {
  return withDelay(mockAddresses);
}

export async function getBankAndUpiDetails() {
  return withDelay(mockBankAndUpiDetails);
}

export async function getProfileUi() {
  return withDelay(UI);
}

