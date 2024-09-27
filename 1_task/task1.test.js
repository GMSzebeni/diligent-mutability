import { 
  celebrateBirthday, 
  getMarried, 
  paintHouse, 
  goToSecurityCheck, 
  applyFastLane, 
  doPoliceIntervention, 
  doSecretAgentThing
} from "./task1.js";

describe('celebrateBirthday', () => {
  it('should increase the age by one', () => {
    const person = {name: 'Bob', age: 36}
    const expected = {name: 'Bob', age: 37}

    const current = celebrateBirthday(person);

    expect(current).toStrictEqual(expected);
  })

  it('should not change the input person', () => {
    const person = {name: 'Bob', age: 36}
    const original = {name: 'Bob', age: 36}

    celebrateBirthday(person);

    expect(person).toStrictEqual(original);
  })

  it('the output must be a new object', () => {
    const person = {name: 'Bob', age: 36}

    const current = celebrateBirthday(person);

    expect(current).not.toBe(person);
  })
});

describe('getMarried', () => {
  it('should change the name of the person', () => {
    const person = {name: 'John Doe', age: 35}
    const expected = {name: 'John Doe Doe', age: 35}

    const current = getMarried(person, 'John Doe Doe');

    expect(current).toStrictEqual(expected);
  })

  it('should not change the input person', () => {
    const person = {name: 'John Doe', age: 35}
    const original = {name: 'John Doe', age: 35}

    getMarried(person, 'John Doe Doe');

    expect(person).toStrictEqual(original);
  })

  it('the output must be a new object', () => {
    const person = {name: 'John Doe', age: 35}

    const current = getMarried(person, 'John Doe Doe');

    expect(current).not.toBe(person);
  })
});

describe('paintHouse', () => {
  it('should change the color of the house', () => {
    const house = {color: 'black', rooms: 3}
    const expected = {color: 'white', rooms: 3}

    const current = paintHouse(house, 'white');

    expect(current).toStrictEqual(expected);
  })

  it('should not change the input house', () => {
    const house = {color: 'black', rooms: 3}
    const original = {color: 'black', rooms: 3}

    paintHouse(house, 'white');

    expect(house).toStrictEqual(original);
  })

  it('the output must be a new object', () => {
    const house = {color: 'black', rooms: 3}

    const current = paintHouse(house, 'white');

    expect(current).not.toBe(house);
  })
});

describe('goToSecurityCheck', () => {
  it('should add a person to the end of the queue', () => {
    const queue = ['Alice', 'Bob']
    const expected = ['Alice', 'Bob', 'Charlie']

    const current = goToSecurityCheck(queue, 'Charlie');

    expect(current).toStrictEqual(expected);
  })

  it('should not change the input queue', () => {
    const queue = ['Alice', 'Bob']
    const original = ['Alice', 'Bob']

    goToSecurityCheck(queue, 'Charlie');

    expect(queue).toStrictEqual(original);
  })

  it('the output must be a new array', () => {
    const queue = ['Alice', 'Bob']

    const current = goToSecurityCheck(queue, 'Charlie');

    expect(current).not.toBe(queue);
  })
});

describe('applyFastLane', () => {
  it('should add a person to the beginning of the queue', () => {
    const queue = ['Alice', 'Bob']
    const expected = ['Charlie', 'Alice', 'Bob']

    const current = applyFastLane(queue, 'Charlie');

    expect(current).toStrictEqual(expected);
  })

  it('should not change the input queue', () => {
    const queue = ['Alice', 'Bob']
    const original = ['Alice', 'Bob']

    applyFastLane(queue, 'Charlie');

    expect(queue).toStrictEqual(original);
  })

  it('the output must be a new array', () => {
    const queue = ['Alice', 'Bob']

    const current = applyFastLane(queue, 'Charlie');

    expect(current).not.toBe(queue);
  })
});

describe('doSecretAgentThing', () => {
  it('should replace a person in the queue at a given position', () => {
    const queue = ['Alice', 'Bob', 'Charlie']
    const expected = ['Alice', 'Bob', 'Agent']

    const current = doSecretAgentThing(queue, 'Agent', 2);

    expect(current).toStrictEqual(expected);
  })

  it('should not change the input queue', () => {
    const queue = ['Alice', 'Bob', 'Charlie']
    const original = ['Alice', 'Bob', 'Charlie']

    doSecretAgentThing(queue, 'Agent', 2);

    expect(queue).toStrictEqual(original);
  })

  it('the output must be a new array', () => {
    const queue = ['Alice', 'Bob', 'Charlie']

    const current = doSecretAgentThing(queue, 'Agent', 2);

    expect(current).not.toBe(queue);
  })

  it('should throw an error if the position is out of bounds', () => {
    const queue = ['Alice', 'Bob', 'Charlie']

    expect(() => doSecretAgentThing(queue, 'Agent', 5)).toThrow('Invalid position, the queue is too short.');
  })
});

describe('doPoliceIntervention', () => {
  it('should remove a person from the queue at a given position', () => {
    const queue = ['Alice', 'Bob', 'Charlie']
    const expected = ['Alice', 'Charlie']

    const current = doPoliceIntervention(queue, 1);

    expect(current).toStrictEqual(expected);
  })

  it('should not change the input queue', () => {
    const queue = ['Alice', 'Bob', 'Charlie']
    const original = ['Alice', 'Bob', 'Charlie']

    doPoliceIntervention(queue, 1);

    expect(queue).toStrictEqual(original);
  })

  it('the output must be a new array', () => {
    const queue = ['Alice', 'Bob', 'Charlie']

    const current = doPoliceIntervention(queue, 1);

    expect(current).not.toBe(queue);
  })

  it('should throw an error if the position is out of bounds', () => {
    const queue = ['Alice', 'Bob', 'Charlie']

    expect(() => doPoliceIntervention(queue, 5)).toThrow('Invalid position, the queue is too short.');
  })
});
