/*
main.js
@flow
*/

export function hello(name: string): string {
  return `Hello ${name}!`;
}

const message: string = hello('World');
/* eslint-disable no-console */
console.log(message);
