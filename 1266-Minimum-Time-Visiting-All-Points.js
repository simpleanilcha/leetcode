/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let time = 0;

  const toTime = function (from, to) {
    const xDiff = Math.abs(from[0] - to[0]);
    const yDiff = Math.abs(from[1] - to[1]);

    return Math.max(xDiff, yDiff);
  };

  for (let i = 1; i < points.length; i++) {
    time += toTime(points[i - 1], points[i]);
  }

  return time;
};