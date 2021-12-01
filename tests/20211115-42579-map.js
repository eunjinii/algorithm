function solution(genres, plays) {
  // 1. map에 장르별로 하나씩 넣어주고 각각 value 정렬하기
  let map = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (map.get(genres[i])) {
      map.set(genres[i], [...map.get(genres[i]), { idx: i, count: plays[i] }]);
    } else {
      map.set(genres[i], [{ idx: i, count: plays[i] }]);
    }

    const temp = map.get(genres[i]);
    temp.sort((a, b) => b.count - a.count);
    temp.sort((a, b) => {
      if (a.count === b.count) {
        a.idx - b.idx;
      }
    });
    map.set(genres[i], temp);
  }

  // array에 장르별로 합계를 object로 넣기
  let array = [];
  for (let genre of map.keys()) {
    const temp = map.get(genre); // []
    const total = temp.reduce((acc, cur) => acc + cur.count, 0);
    array.push({
      genre: genre,
      total: total,
    });
  }
  array.sort((a, b) => b.total - a.total);

  // array에서 장르 하나씩 꺼내면서 2개
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    const topSongs = map.get(array[i].genre); // [{}, {}, {}, ...]
    const sliced = topSongs.slice(0, 2); // [{}, {}]
    if (sliced.length >= 2) {
      answer = [...answer, sliced[0].idx, sliced[1].idx]; // sliced가 원소가 1이하인 경우엔???
    } else {
      answer = [...answer, sliced[0].idx];
    }
  }

  return answer;
}
