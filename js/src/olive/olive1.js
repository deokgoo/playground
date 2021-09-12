function solution(x, y, r, v) {
  function getRectangle(x, y, r) {
    let left = x[0] - r[0];
    let right = x[0] + r[0];
    let bottom = y[0] - r[0];
    let top = y[0] + r[0];

    for (let i = 1; i < x.length; i++) {
      left = x[i] - r[i] < left ? x[i] - r[i] : left;
      right = x[i] + r[i] > right ? x[i] + r[i] : right;
      bottom = y[i] - r[i] < bottom ? y[i] - r[i] : bottom;
      top = y[i] + r[i] > top ? y[i] + r[i] : top;
    }

    return {
      l: left,
      r: right,
      b: bottom,
      t: top,
    };
  }

  function getRandomCoor(rec, v) {
    const ranCoor = [];
    for (let i = 0; i < v.length; i += 2) {
      const coor = {
        x: rec.l + (v[i] % (rec.r - rec.l)),
        y: rec.b + (v[i + 1] % (rec.t - rec.b)),
      };
      ranCoor.push(coor);
    }
    return ranCoor;
  }

  function isInCircle(width, height, r) {
    return r >= Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  }
  const rectangCoor = getRectangle(x, y, r);
  const ran = getRandomCoor(rectangCoor, v);

  let count = 0;
  let numOfCoor = ran.length;
  for (let i = 0; i < numOfCoor; i++) {
    const curX = ran[i].x;
    const curY = ran[i].y;

    for (let j = 0; j < x.length; j++) {
      const cirX = x[j];
      const cirY = y[j];
      const cirR = r[j];
      if (isInCircle(Math.abs(curX - cirX), Math.abs(curY - cirY), cirR)) {
        count++;
        break;
      }
    }
  }

  return (
    (count / numOfCoor) *
    (rectangCoor.r - rectangCoor.l) *
    (rectangCoor.t - rectangCoor.b)
  );
}

console.log(solution([5], [5], [5], [92, 83, 14, 45, 66, 37, 28, 9, 10, 81]));
