// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  let answer = '';
  const table = new Map();

  for (let person of participant) {
    if (!table.get(person)) {
      table.set(person, 1);
    } else {
      table.set(person, table.get(person) + 1);
    }
  }

  for (let person of completion) {
    if (table.get(person) >= 1) {
      table.set(person, table.get(person) - 1);
    } else {
      table.delete(person);
    }
  }

  for (let person of participant) {
    if (table.get(person) && table.get(person) >= 1) {
      answer = person;
    }
  }

  return answer;
}
