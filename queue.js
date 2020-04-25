// fonction init
init = (capacity) => {
  if (capacity < 0) {
    throw new Error("the capacity is less than 0 !!");
  }
  return { list: [], capacity: capacity };
};

// fonction getCapacity
getCapacity = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue parameter has a wrong structure");
  }
  return queue.capacity;
};

// fonction getSize
getSize = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue parameter has a wrong structure");
  }
  return queue.list.length;
};

// fonction isEmpty
isEmpty = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue parameter has a wrong structure");
  }
  return queue.list.length === 0;
};

// fonction isFull
isFull = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue parameter has a wrong structure");
  }
  return queue.list.length === queue.capacity;
};

// fonction addLast
addLast = (element, queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue parameter has a wrong structure");
  }
  if (typeof element !== "number") {
    throw new Error(" the element should be a number !");
  }
  if (!isFull(queue)) {
    queue.list.push(element);
    return queue;
  } else {
    throw new Error("the queue is already Full !");
  }
};

// fonction removeFirst
removeFirst = (queue) => {
  if (queue.list === undefined || queue.capacity === undefined) {
    throw new Error("the queue parameter has a wrong structure");
  }
  if (!isEmpty(queue)) {
    queue.list.shift();
    return queue;
  } else {
    throw new Error("We can not remove from an empty queue");
  }
};

module.exports = {
  init,
  getCapacity,
  getSize,
  isEmpty,
  isFull,
  addLast,
  removeFirst,
};
