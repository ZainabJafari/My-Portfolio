import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', '');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    if (!colorMode) {
      setColorMode('dark');
      bodyClass.add(className);
    } else {
      colorMode === 'dark' ? bodyClass.add(className) : bodyClass.remove(className);
    }
  }, [colorMode, setColorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
