// import styles from './banner.module.css?inline';
// import Image from 'images/steve-after-a-workshop.jpg?h=400';

import { useCallback, useEffect, useRef } from 'react';
import { addBanner } from '../add-banner';

const Application = () => {
  const memoAddBanner = useCallback((text: string) => {
    addBanner(text);
  }, []);

  const hasUnmounted = useRef(false);

  useEffect(() => {
    return () => {
      if (!hasUnmounted.current) {
        hasUnmounted.current = true;
        memoAddBanner('text');
      }
    };
  }, [memoAddBanner]);

  return (
    <main>
      <h1 className="bg-red-300">Hello World</h1>
    </main>
  );
};

export default Application;
