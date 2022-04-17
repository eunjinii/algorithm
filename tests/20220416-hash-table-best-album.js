// https://programmers.co.kr/learn/courses/13213/lessons/91081
// Ch07-2. 해시 테이블_베스트 앨범

class HashTable {
    table = new Array(10000)
    
    getHashKey(key, tableSize) {
        let hash = 13;
        for (let i = 0; i < key.length; i++) {
            hash = (17 * hash * key.charCodeAt(i)) % tableSize;
        }
        return hash;
    }
    
    setValue(key, value, idx) {
        const index = this.getHashKey(key, this.table.length);
        if (this.table[index]) {
            this.table[index].push({
                play: value,
                idx
            })
            this.table[index].sort((a, b) => b.play - a.play)
        } else {
            this.table[index] = [{
                play: value,
                idx
            }];
        }
    }
    
    getValue(key) {
        const index = this.getHashKey(key, this.table.length)
        if (this.table[index]) {
            return this.table[index];
        } else {
            return null;
        }
    }
}

function solution(genres, plays) {
    const map = new HashTable();
    
    genres.forEach((item, i) => {
        map.setValue(item, plays[i], i);
    })
    
    const genreList = [...new Set(genres)]
    
    // 총 실행수 별로 정렬
    let totalPlayCount  = [];
    
    genreList.forEach((item, i) => {
        const singleGenrePlayCount = map.getValue(item).reduce((a,c) => a + c.play, 0)
        totalPlayCount.push({
            item,
            totalCount: singleGenrePlayCount
        })
    })
    totalPlayCount.sort((a, b) => b.totalCount - a.totalCount);
    
    // 실행수별로 내림차순된 장르를 가지고, map에서 두개씩 꺼내기
    let bestSongs = [];
    totalPlayCount.forEach((item, i) => {
        const songs = map.getValue(item.item).slice(0,2); // [{}, {}]
        bestSongs = [...bestSongs, ...songs];
    })
    
    const answer = bestSongs.map(item => item.idx)
    
    console.log(answer)
    return answer;
}