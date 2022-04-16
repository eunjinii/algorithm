// 선형 큐 배열로 구현
class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return value;
  }

  peak() {
    return this.queue[this.head];
  }

  hasBiggerValueThan(value) {
    const result = false;
    for (let node of this.queue) {
      if (value < node) {
        return true;
      }
    }
    return result;
  }

  size() {
    return this.rear - this.head;
  }
}

// [2, 1, 3, 2] , 2
// [1, 1, 9, 1, 1, 1]	0

function solution(priorities, location) {
  const queue = new Queue();
  let fileLocation = location;
  for (let node of priorities) {
    queue.enqueue(node);
  }

  if (queue.size() === 1) {
    return 1;
  }

  let order = 0;
  while (queue) {
    if (queue.size() === 1) {
      order++;
      break;
    }

    const nextNode = queue.dequeue();

    if (queue.hasBiggerValueThan(nextNode)) {
      // 뒤에 더큰수 있어서 맨뒤행
      queue.enqueue(nextNode);

      if (fileLocation === 0) {
        fileLocation = this.rear;
      } else {
        fileLocation--;
      }
    } else {
      order++;
      // 꺼낸게 가장커서 프린트함
      if (fileLocation === 0) {
        break;
      } else {
        fileLocation--;
      }
    }
  }

  return order;
}

console.log(solution([2, 1, 3, 2], 2));
// solution([1, 1, 9, 1, 1, 1], 0);
