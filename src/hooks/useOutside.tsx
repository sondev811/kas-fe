import { useEffect } from 'react';

const useOutside = (ref: any, cbFunction: () => void) => {
  useEffect(() => {
    const handle = (event: MouseEvent | TouchEvent) => {
      if(ref.current && !ref.current.contains(event.target)) {
        cbFunction();
      }
    }
    window.addEventListener('mousedown', handle);
    document.addEventListener('touchstart', handle);
    return() => {
      window.removeEventListener('mousedown', handle);
      window.removeEventListener('touchstart', handle);
    }
  }, [ref, cbFunction]);
};

export default useOutside;