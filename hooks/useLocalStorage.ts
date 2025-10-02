import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  // Initialize state with initialValue, don't access window yet
  const [storedValue, setStoredValue] = useState(initialValue);

  // Load value from localStorage on client only
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) setStoredValue(JSON.parse(item));
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  // Save value to localStorage whenever it changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const; // TypeScript tuple
};

export default useLocalStorage;
