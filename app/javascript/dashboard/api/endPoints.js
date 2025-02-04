/* eslint arrow-body-style: ["error", "always"] */

const endPoints = {
  resetPassword: {
    url: 'auth/password',
  },
  register: {
    url: 'api/v1/accounts.json',
  },
  validityCheck: {
    url: '/auth/validate_token',
  },
  profileUpdate: {
    url: '/api/v1/profile',
  },
  logout: {
    url: 'auth/sign_out',
  },

  me: {
    url: 'api/v1/conversations.json',
    params: { type: 0, page: 1 },
  },

  getInbox: {
    url: 'api/v1/conversations.json',
    params: { inbox_id: null },
  },

  fetchFacebookPages: {
    url: 'api/v1/callbacks/facebook_pages.json',
    params: { omniauth_token: '' },
  },

  subscriptions: {
    get() {
      return {
        url: '/api/v1/subscriptions',
      };
    },
  },
};

export default page => {
  return endPoints[page];
};
