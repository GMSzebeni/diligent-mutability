/*
 * Your task is to ensure that the functions here do not 
 * change the input object or its sub objects or arrays. Keep the original business logic.
 * 
 * Do not call the functions in this file for testing, but
 * use the playground.js.
 * 
 * Some resources to get inspired:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * - https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
 * - https://lodash.com/docs/4.17.15#cloneDeep
 * - https://immerjs.github.io/immer/produce
 * 
 * (immer and lodash are installed as a dependencies)
 */


/**
 * Increase the dog.owner.age by one.
 * 
 * The dog looks like this:
 * 
 * const zeus = {
 *   name: 'Zeus',
 *   colors: ['brown', 'black'],
 *   owner: {
 *     name: 'Higgins',
 *     age: 45
 *   }
 * }
 * 
 * @param {*} dog 
 * @returns The modified dog object.
 */
export function celebrateTheOwnersBirthday(dog) {
  const copiedDog = {...dog, owner: {...dog.owner, age:dog.owner.age + 1}}
  return copiedDog;
}

/**
 * Add a new color to the dog.color property.
 *  
 * The dog looks like this:
 * 
 * const zeus = {
 *   name: 'Zeus',
 *   colors: ['brown', 'black'],
 *   owner: {
 *     name: 'Higgins',
 *     age: 45
 *   }
 * }
 *
 * @param {*} dog 
 * @param {string} newColor 
 */
export function paintTheDogPartly(dog, newColor) {
  const newDog = {...dog, colors: [...dog.colors, newColor]}
  return newDog;
}

/**
 * Increase one item's quantity in a shopping cart.
 * 
 * A cart item looks like this:
 * {name: 'book', price: 32, quantity: 1}
 * 
 * @param {items[]} cart, an array of shopping cart item objects 
 * @param {number} index, the index of the item to change.
 * @returns the modified cart
 */
export function increaseItemQuantity(cart, index) {
  if (cart.length - 1 < index) {
    throw new Error('Cannot read properties of undefined');
  }
  const newCart = cart.map((item, currentIndex) => {
    if (currentIndex === index) {
      return {...item, quantity: item.quantity + 1}
    } else {
      return item;
    }
  })
  return newCart;
}

/**
 * Change the name of an item in a shopping cart.
 * 
 * A cart item looks like this:
 * {name: 'book', price: 32, quantity: 1}
 * 
 * @param {items[]} cart, an array of shopping cart item objects 
 * @param {number} index, the index of the item to change.
 * @param {string} newName 
 * @returns the modified cart
 */
export function renameItem(cart, index, newName) {
  if(index >= cart.length) {
    throw new Error('Invalid index, the cart has not enough items.');
  }
  const newCart = cart.map((item, currentIndex) => {
    if (currentIndex === index) {
      return { ...item, name: newName };
    } else {
      return item;
    }
  })
  return newCart;
}

/**
 * Decrease the price of an item with a given percentage.
 * 
 * A cart item looks like this:
 * {name: 'book', price: 32, quantity: 1}
 * 
 * @param {items[]} cart, an array of shopping cart item objects 
 * @param {number} index, the index of the item to change.
 * @param {number} discount, the percentage to decrease with
 *  e.g. if it is 20, it means cheaper with 20 percent, so the original
 *  price's 80% should be calculated. 
 * @returns the modified cart
 */
export function applyDiscount(cart, index, discount) {
  if(index >= cart.length) {
    throw new Error('Invalid index, the cart has not enough items.');
  }

  const newCart = cart.map((item, currentIndex) => {
    if(currentIndex === index) {
      return { ...item, price: item.price - (item.price * discount / 100)}
    } else {
      return item;
    }
  })
  return newCart;
}
