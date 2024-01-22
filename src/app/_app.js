// src/app/_app.js
import { useEffect } from 'react';
import { initFacebookPixel } from '../facebook-pixel';
import '../global.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
