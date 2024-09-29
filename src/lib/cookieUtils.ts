import Cookies from 'js-cookie';

// Function to set a cookie
export const setCookie = (name: string, value: string, days: number = 7) => {
  Cookies.set(name, value, { expires: days });
};

// Function to get a cookie by name
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

// Function to remove a cookie
export const removeCookie = (name: string) => {
  Cookies.remove(name);
};

// Function to check if a cookie exists
export const hasCookie = (name: string): boolean => {
  return !!Cookies.get(name);
};
