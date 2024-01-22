// src/app/_app.js
import { useEffect } from 'react';
import { initFacebookPixel } from '../utils/facebook-pixel';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

