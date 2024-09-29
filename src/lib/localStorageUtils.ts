// Utility to set data in localStorage
export const setLocalStorage = (
  key: string,
  value: any
) => {
  try {
    const jsonData = JSON.stringify(value); // Convert to JSON string
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

// Utility to get data from localStorage
export const getLocalStorage = (key: string) => {
  try {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null; // Parse JSON if exists
  } catch (error) {
    console.error(
      "Error getting data from localStorage",
      error
    );
    return null;
  }
};

// Utility to remove data from localStorage
export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(
      "Error removing from localStorage",
      error
    );
  }
};

// Utility to clear all data from localStorage
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage", error);
  }
};
