const {
  init,
  getCapacity,
  getSize,
  isEmpty,
  isFull,
  addLast,
  removeFirst,
} = require("./queue.js");

describe("test the queue initialization", () => {
  test("should return an object with empty array and an initialized capacity", () => {
    for (i = 0; i < 100; i++) {
      let expected = {
        list: [],
        capacity: i,
      };
      expect(init(i)).toStrictEqual(expected);
    }
  });
  test("should return an exception if the capacity is less than 0", () => {
    const capacity = -2;
    expect(() => init(capacity)).toThrowError(/capacity/gi);
  });
});

describe("test the get capacity function", () => {
  test("should throw an error if the queue parameter has a wrong structure", () => {
    const queue = {
      listValues: [],
      capacityOfList: 10,
    };
    expect(() => getCapacity(queue)).toThrowError(/queue/gi);
  });
  test("should return the right capacity", () => {
    for (i = 0; i < 100; i++) {
      const queue = {
        list: [],
        capacity: i,
      };
      const expected = i;
      expect(getCapacity(queue)).toBe(expected);
    }
  });
});

describe("test the get size function", () => {
  test("should throw an error if the queue parameter has a wrong structure", () => {
    const queue = {
      listValues: [],
      capacityOfList: i,
    };
    expect(() => getCapacity(queue)).toThrowError(/queue/gi);
  });
  test("should return the right size", () => {
    let queue = {
      list: [],
      capacity: 2,
    };
    let expected = 0;
    expect(getSize(queue)).toBe(expected);

    queue = {
      list: [5],
      capacity: 2,
    };
    expected = 1;
    expect(getSize(queue)).toBe(expected);

    queue = {
      list: [5, 7, 3],
      capacity: 10,
    };
    expected = 3;
    expect(getSize(queue)).toBe(expected);
  });
});

describe("test if the queue is empty ", () => {
  test("should the function return true", () => {
    const queue = {
      list: [],
      capacity: 10,
    };
    const expected = true;
    expect(isEmpty(queue)).toBe(true);
  });

  test("should the function return false", () => {
    const queue = {
      list: [2],
      capacity: 10,
    };
    const expected = false;
    expect(isEmpty(queue)).toBe(false);
  });
});

describe("test if the queue is full ", () => {
  test("should the function return false", () => {
    const queue = {
      list: [2],
      capacity: 10,
    };
    const expected = false;
    expect(isFull(queue)).toBe(false);
  });

  test("should the function return true", () => {
    const queue = {
      list: [2, 10, 11],
      capacity: 3,
    };
    const expected = true;
    expect(isFull(queue)).toBe(true);
  });
});

describe("test add element to the queue", () => {
  test("the element should be added to an empty queue", () => {
    let queue = {
      list: [],
      capacity: 10,
    };
    let element = 1;
    let expected = {
      list: [element],
      capacity: 10,
    };
    expect(addLast(element, queue)).toStrictEqual(expected);
  });

  test("the element should be added to a queue which is not empty", () => {
    let queue = {
      list: [1],
      capacity: 10,
    };
    let element = 1;
    let expected = {
      list: [1, element],
      capacity: 10,
    };
    expect(addLast(element, queue)).toStrictEqual(expected);
  });

  test("should throw an error if the queue is Full ", () => {
    let queue = {
      list: [2, 2],
      capacity: 2,
    };
    let element = 1;
    expect(() => addLast(element, queue)).toThrowError(/queue/gi);
  });

  test("should throw an error if the queue parameter has a wrong structure", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 10,
    };

    let element = 1;
    expect(() => addLast(element, queue)).toThrowError(/queue/gi);
  });

  test("should throw an error if the element is not a number", () => {
    let queue = {
      list: [],
      capacity: 10,
    };

    let element = "something";
    expect(() => addLast(element, queue)).toThrowError(/number/gi);
  });
});

// test de la fonction removeFirst

describe("test removeFirst  from queue", () => {
  test("should throw an error if the queue parameter has a wrong structure", () => {
    let queue = {
      listOfNumbers: [],
      capacityOfList: 15,
    };
    expect(() => removeFirst(queue)).toThrowError(/queue/gi);
  });
  test("should throw an error if queue is already empty and we can not remove an element", () => {
    let queue = {
      list: [],
      capacity: 3,
    };
    expect(() => removeFirst(queue)).toThrowError(/queue/gi);
  });

  test("should return the new queue without the first element which is just removed", () => {
    let queue = {
      list: [1, 2, 3],
      capacity: 15,
    };
    let expected = {
      list: [2, 3],
      capacity: 15,
    };
    expect(removeFirst(queue)).toStrictEqual(expected);
  });
});
