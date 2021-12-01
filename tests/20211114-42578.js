function solution(clothes) {
  let map = new Map();
  let result = 1;

  for (let clothing of clothes) {
    if (map.get(clothing[1])) {
      map.set(clothing[1], [...map.get(clothing[1]), clothing[0]]);
    } else {
      map.set(clothing[1], [clothing[0]]);
    }
  }

  for (let [key, value] of map) {
    result = result * (value.length + 1);
  }

  return result - 1;
}
