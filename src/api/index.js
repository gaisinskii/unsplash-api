import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.VUE_APP_ACCESS_KEY,
  secret: process.env.VUE_APP_SECRET_KEY,
});

export { unsplash, toJson };
