function solution(subway, start, end) {
  let len = subway.length;
  let dfs = new Array(len);
  let map = [];
  let startPoint, endPoint;

  start = start.toString();
  end = end.toString();
  for(let i=0;i<len;i++) {
    dfs[i] = [];
    map[i] = 0;
    subway[i] = subway[i].split(' ');
    
    if(subway[i].includes(start)) {
      startPoint = i;
    }
    if(subway[i].includes(end)) {
      endPoint = i;
    }
  }
  
  for(let i=0;i<len;i++) {
    for(let j=0;j<len;j++) {
      if(dfs[j][i] !== undefined) {
        dfs[i][j] = dfs[j][i];
        continue;
      }
      if(i===j) {
        dfs[i][j] = false;
      } else {
        dfs[i][j] = subway[i].some(r=> subway[j].includes(r));
      }
    }
  }

  const goDfs = (cur, level) => {
    let tmp = [];
    dfs[cur].forEach((x, index) => x && (map[index]>level || map[index] === 0) ? tmp.push(index) : null);
    tmp.forEach(x => {
      map[x] = level;
    });
    tmp.forEach(x => goDfs(x, level+1));
  }

  if(startPoint !== endPoint) {
    goDfs(startPoint, 1);
  }
  
  return map[endPoint];
}

console.log(solution(["1 2 3","8 2", "2 110 100 900", "8 1000 200", "2 777", "3 1000"], 1, 777));