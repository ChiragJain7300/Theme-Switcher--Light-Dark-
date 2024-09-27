import { useEffect, useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [theme, setTheme] = useState(() => {
    let currentValue;
    try {
      currentValue = localStorage.getItem(key) || String(defaultValue);
    } catch (err) {
      console.log(err);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}
