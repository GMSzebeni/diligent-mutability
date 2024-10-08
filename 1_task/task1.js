/*
 * Your task is to ensure that the functions here do not 
 * change the input object or array. Keep the original business logic.
 * 
 * Do not call the functions in this file for testing, but
 * use the playground.js.
 * 
 * Some resources to get inspired:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with
 */

import { log } from "console";


/**
 * Make a person one year older.
 * 
 * @param {{name: string, age: number}} person example: {name: 'Tom', age: 35}
 * @returns a person with a modified age
 */
export function celebrateBirthday(person) {
  return {...person, age: person.age + 1};
}

/**
 * Change the name of the person.
 * 
 * @param {{name: string, age: number}} person example: {name: 'Tom', age: 35}
 * @param {string} newName 
 * @returns a person with a modified name.
 */
export function getMarried(person, newName) {
  return {...person, name: newName};
}

/**
 * Change the color of the house.
 * 
 * @param {{color: string, rooms: number}} house 
 *  example: {color: 'black', rooms: 3}, I hope you repaint it. 
 * @param {string} newColor 
 * @returns the house with the new color
 */
export function paintHouse(house, newColor) {
  return {...house, color: newColor};
}

/**
 * Add a person to the end of the queue.
 * 
 * @param {string[]} queue a list of names who stand in the queue, 
 *  example: ['Alice', 'Bob']
 * @param {string} me 
 * @returns The new queue.
 */
export function goToSecurityCheck(queue, me) {
  return [...queue, me];
}

/**
 * Add a person to the beginning of the queue.
 * 
 * @param {string[]} queue a list of names who stand in the queue, 
 *  example: ['Alice', 'Bob']
 * @param {string} me 
 * @returns The new queue.
 */
export function applyFastLane(queue, me) {
  return [me, ...queue];
}

/**
 * Replace a person in the queue.
 * 
 * @param {string[]} queue a list of names who stand in the queue, 
 *  example: ['Alice', 'Bob']
 * @param {string} me 
 * @param {number} position: index of the array to replace
 * @returns: the modified queue
 */
export function doSecretAgentThing(queue, me, position) {
  if(position >= queue.length) {
    throw new Error('Invalid position, the queue is too short.');
  }
  const newQueue = [...queue];
  newQueue[position] = me;
  return newQueue;
}

/**
 * Remove a suspicious person from the queue.
 * 
 * @param {string[]} queue a list of names who stand in the queue, 
 *  example: ['Alice', 'Bob']
 * @param {number} position: index of the array to remove
 * @returns the modified queue
 */
export function doPoliceIntervention(queue, position) {
  if(position >= queue.length) {
    throw new Error('Invalid position, the queue is too short.');
  }

  return queue.slice(0, position).concat(queue.slice(position + 1));
}