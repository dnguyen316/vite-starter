// import styles from './banner.module.css?inline';
// import Image from 'images/steve-after-a-workshop.jpg?h=400';

import { useCallback, useEffect, useRef } from 'react';
import { addBanner } from '../add-banner';
import { renderCharacterElement } from '../characters/render-character';
import Morduk from '../characters/morduk.json';
import { Character } from '../characters/generate-character';
import { initializeCounter } from '../counter.js';

const Application = () => {
  const memoAddBanner = useCallback((text: string) => {
    addBanner(text);
  }, []);

  const hasUnmounted = useRef(false);

  useEffect(() => {
    return () => {
      if (!hasUnmounted.current) {
        hasUnmounted.current = true;
        initializeCounter(document, hasUnmounted.current);
        // memoAddBanner('text');
        const characterDiv = renderCharacterElement(Morduk as Character);
        const main = document.querySelector('main');
        main?.appendChild(characterDiv);
      }
    };
  }, [memoAddBanner]);

  return (
    <main>
      <h1 className="bg-red-300">Hello World</h1>
      <h2 id="count"></h2>
      <button id="increment">+</button>
      <button id="decrement">-</button>
    </main>
  );
};

export default Application;
