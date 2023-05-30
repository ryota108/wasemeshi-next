import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'wasemeshi',
  apiKey: process.env.CMS_API_KEY,
});
