// 알고리즘 문제해결전략
// dfs - 고대어 사전 문제

const makeGraph = (numOfTest, words) => {
    let graph = Array.from(Array(26), () => Array(26).fill(0)); // 1. 2차원 배열을 26*26 크기로 초기화해줌.

    for (let j = 1; j < numOfTest; j++) {
        // 2. 들어온 단어들을 돌아줌. 이 케이스에서는 나름의 알파벳 순서대로 정렬돼 있으므로 지금거([j])랑 이전거([j-1=i])랑 비교해서 graph에 간선 1로 표시해줌
        const i = j - 1;
        const length = Math.min(words[i].length, words[j].length); // 단어가 길어도 둘중 짧은 단어 까지만 이중포문 돌면 되니까 min으로 length 제한해줌.

        for (let k = 0; k < length; k++) {
            // 3. min 길이까지 단어 알파벳을 돌아줌. 알파벳을 2차원 배열의 인덱스화하기 위해 charCodeAt 써줘서 두번째, 세번째, 그 이상 자릿수끼리 for문돌며 비교함
            if (words[i][k] !== words[j][k]) {
                const a = words[i][k].charCodeAt(0) - "a".charCodeAt(0);
                const b = words[j][k].charCodeAt(0) - "a".charCodeAt(0);
                graph[a][b] = 1;
                break; // 알파벳을 도는 for문은 한 번 서로 다른 알파벳이 발견되면 그것까지만 간선으로 연결 후 멈춤.
            }
        }
    }
    return graph;
};

const topologicalSort = (numOfTest, words) => {
    const graph = makeGraph(numOfTest, words);
    const length = graph.length;

    let order = [];
    let visited = Array(26).fill(false);

    /**
     * 깊이 우선 탐색 dfs
     */
    const dfs = (here) => {
        visited[here] = true;

        for (let there = 0; there < length; there++) {
            if (graph[here][there] && !visited[there]) {
                // (u, v)간선이 있는데 방문을 안한 v가 있다면 방문처리하기.
                dfs(there);
            }
        }
        order.push(here); // 위상정렬 결과 얻기 위해 dfs() 종료 시마다 현재 정점 기록. 그 기록 순서를 뒤집으면 위상정렬 결과임
    };

    /**
     * 전체 노드에 대한 깊이 우선 탐색인 dfsAll() 역할
     */
    for (let i = 0; i < length; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    /**
     * 위상정렬 결과 도출하기 위하여 순서 뒤집는다.
     */
    order.reverse();

    /**
     * 문제 요구사항에서 위상정렬 여부를 판단해야 하므로
     * 그래프를 2중 for문을 돌면서, 반대로(n -> m) 연결된 간선이 있으면 빈 배열 리턴한다.(반대 간선 있으면 사이클이기 때문.)
     */
    for (let m = 0; m < length; m++) {
        for (let n = m + 1; n < length; n++) {
            if (graph[order[n]][order[m]]) {
                order = [];
            }
        }
    }

    /**
     * 문제 요구사항 도출 위해 order 값을 알파벳으로 변환, 또는 "INVALID HYPOTHESIS" 리턴.
     */
    let answer;
    if (order.length === 0) {
        answer = "INVALID HYPOTHESIS";
    } else {
        answer = order
            .map((num) => {
                const code = num + "a".charCodeAt(0);
                return String.fromCharCode(code);
            })
            .join("");
    }
    console.log(answer);
    return answer;
};

topologicalSort(5, ["gg", "kia", "lotte", "lg", "hanwha"]);
// zyxwvutsrqponmjigklhfedcba - 위상위상정렬 특성상 여러 답이 존재할 수 있는데, 선후관계가 위반하지 않으면 남은 알파벳은 어떤 순서든 상관 없다.
// o-g-k-l-h 순서만 맞으면 됨.

topologicalSort(3, ["ba", "aa", "ab"]);
// INVALID HYPOTHESIS

topologicalSort(6, [
    "dictionary",
    "english",
    "is",
    "ordered",
    "ordinary",
    "this",
]);
// zyxwvusrqpnmlkjhgfdeiotcba
// d-e-i-o-t
