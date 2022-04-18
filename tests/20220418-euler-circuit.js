// 알고리즘 문제해결전략
// dfs/오일러 - 끝말잇기

const makeGraph = (words) => {
    let graph = Array.from(Array(26), () => Array(26).fill(0));
    let wordsMap = Array.from(Array(26), () => Array(26).fill([]));
    let indegree = Array(26).fill(0);
    let outdegree = Array(26).fill(0);

    for (let i = 0; i < words.length; i++) {
        const u = words[i].charCodeAt(0) - "a".charCodeAt(0);
        const v =
            words[i].charAt(words[i].length - 1).charCodeAt(0) -
            "a".charCodeAt(0);
        graph[u][v] = 1;
        wordsMap[u][v] = [...wordsMap[u][v], words[i]];
        indegree[v]++;
        outdegree[u]++;
    }

    return {
        graph,
        wordsMap,
        indegree,
        outdegree,
    };
};

const solution = (words) => {
    const { graph, wordsMap, indegree, outdegree } = makeGraph(words);

    // 방향그래프를 위한 오일러 구하기 함수
    const getEulerForDirectedGraph = (here, circuit) => {
        for (let there = 0; there < graph.length; there++) {
            while (graph[here][there] > 0) {
                graph[here][there]--; // 방향그래프라 여기서 저기로 가는 간선만 지우면 됨.
                getEulerForDirectedGraph(there);
            }
        }
        circuit.push(here);
    };

    const getEulerTrailOrCircuit = () => {
        let circuit = [];

        // 오일러 트레일 먼저 판단해서 리턴한다.
        for (let i = 0; i < graph.length; i++) {
            if ((outdegree[i] = indegree[i] + 1)) {
                // 나가는 간선이 들어오는 간선보다 1개 많으면 오일러 트레일.
                getEulerForDirectedGraph(i, circuit);
                return circuit;
            }
        }

        // 그냥 아무데서나 시작한다.
        for (let i = 0; i < graph.length; i++) {
            if (outdegree[i]) {
                getEulerForDirectedGraph(i, circuit);
                return circuit;
            }
        }

        return circuit;
    };

    const checkEuler = () => {
        let start = 0;
        let end = 0;

        for (let i = 0; i < graph.length; i++) {
            const delta = outdegree[i] - indegree[i];
            if (delta < -1 || dela > 1) return false;
            if (delta === 1) start++;
            if (delta === -1) end++;
        }

        return (start === 0 && end === 0) || (start === 1 && end === 1);
    };

    const circuit = getEulerTrailOrCircuit();
    if (!checkEuler) return "IMPOSSIBLE";

    circuit.reverse();

    let answer = "";
    for (let i = 1; i < graph.length; i++) {
        const a = circuit[i - 1];
        const b = circuit[i];

        if (answer.length) {
            answer += "";
        }
        answer += wordsMap[a][b].pop();
    }

    return answer;
};

console.log(solution(["dog", "god", "dragon", "need"]));
