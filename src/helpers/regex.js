export const validAccount = new RegExp(/(^$)|^[a-z0-9_]{1,50}$/);
export const validPassword = new RegExp(/(^$)|^[a-z0-9]{1,50}$/);
export const validEmail = new RegExp(
  /(^$)|[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
);
