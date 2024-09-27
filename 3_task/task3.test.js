import { 
  celebrateTheOwnersBirthday,
  increaseItemQuantity,
  renameItem,
  applyDiscount,
  paintTheDogPartly
} from "./task3.js";

describe('celebrateTheOwnersBirthday', () => {
  it('should increase the owner\'s age by one', () => {
    const dog = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    const expected = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 46}};
    
    const current = celebrateTheOwnersBirthday(dog);
    
    expect(current).toStrictEqual(expected);
  });

  it('should not change the input dog object', () => {
    const dog = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    const original = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    
    celebrateTheOwnersBirthday(dog);
    
    expect(dog).toStrictEqual(original);
  });

  it('the output must be a new object, the owner should be a new too.', () => {
    const dog = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    
    const current = celebrateTheOwnersBirthday(dog);
    
    expect(current).not.toBe(dog);
    expect(current.owner).not.toBe(dog.owner);
  });
});

describe('paintTheDogPartly', () => {
  it('should add a new color to the dog\'s colors array', () => {
    const dog = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    const expected = {name: 'Zeus', colors: ['brown', 'black', 'white'], owner: {name: 'Higgins', age: 45}};
    
    const current = paintTheDogPartly(dog, 'white');
    
    expect(current).toStrictEqual(expected);
  });

  it('should not change the input dog object', () => {
    const dog = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    const original = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    
    paintTheDogPartly(dog, 'white');
    
    expect(dog).toStrictEqual(original);
  });

  it('the output must be a new object, the colors should be a new array too.', () => {
    const dog = {name: 'Zeus', colors: ['brown', 'black'], owner: {name: 'Higgins', age: 45}};
    
    const current = paintTheDogPartly(dog, 'white');
    
    expect(current).not.toBe(dog);
    expect(current.colors).not.toBe(dog.colors)
  });
});

describe('increaseItemQuantity', () => {
  it('should increase the item quantity by one', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    const expected = [{name: 'book', price: 32, quantity: 2}];
    
    const current = increaseItemQuantity(cart, 0);
    
    expect(current).toStrictEqual(expected);
  });

  it('should not change the input cart', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    const original = [{name: 'book', price: 32, quantity: 1}];
    
    increaseItemQuantity(cart, 0);
    
    expect(cart).toStrictEqual(original);
  });

  it('the output must be a new array like the modified item too', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    
    const current = increaseItemQuantity(cart, 0);
    
    expect(current).not.toBe(cart);
    expect(current[0]).not.toBe(cart[0]);
  });

  it('should throw an error if the index is out of bounds', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    
    expect(() => increaseItemQuantity(cart, 2)).toThrow('Cannot read properties of undefined');
  });
});

describe('renameItem', () => {
  it('should change the name of the item', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    const expected = [{name: 'notebook', price: 32, quantity: 1}];
    
    const current = renameItem(cart, 0, 'notebook');
    
    expect(current).toStrictEqual(expected);
  });

  it('should not change the input cart', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    const original = [{name: 'book', price: 32, quantity: 1}];
    
    renameItem(cart, 0, 'notebook');
    
    expect(cart).toStrictEqual(original);
  });

  it('the output must be a new array also the changed item', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    
    const current = renameItem(cart, 0, 'notebook');
    
    expect(current).not.toBe(cart);
    expect(current[0]).not.toBe(cart[0]);
  });

  it('should throw an error if the index is out of bounds', () => {
    const cart = [{name: 'book', price: 32, quantity: 1}];
    
    expect(() => renameItem(cart, 2, 'notebook')).toThrow('Invalid index, the cart has not enough items.');
  });
});

describe('applyDiscount', () => {
  it('should decrease the price of the item by a given percentage', () => {
    const cart = [{name: 'book', price: 100, quantity: 1}];
    const expected = [{name: 'book', price: 80, quantity: 1}];
    
    const current = applyDiscount(cart, 0, 20);
    
    expect(current).toStrictEqual(expected);
  });

  it('should not change the input cart', () => {
    const cart = [{name: 'book', price: 100, quantity: 1}];
    const original = [{name: 'book', price: 100, quantity: 1}];
    
    applyDiscount(cart, 0, 20);
    
    expect(cart).toStrictEqual(original);
  });

  it('the output must be a new array', () => {
    const cart = [{name: 'book', price: 100, quantity: 1}];
    
    const current = applyDiscount(cart, 0, 20);
    
    expect(current).not.toBe(cart);
    expect(current[0]).not.toBe(cart[0])
  });

  it('should throw an error if the index is out of bounds', () => {
    const cart = [{name: 'book', price: 100, quantity: 1}];
    
    expect(() => applyDiscount(cart, 2, 20)).toThrow('Invalid index, the cart has not enough items.');
  });
});



