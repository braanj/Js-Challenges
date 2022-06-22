const fs = require('fs')

if (!process.argv[2] || !process.argv[3]) {
  console.log('Usage: node solution.js rect1.txt rect2.txt')
  return
}

const MATRIX = fs.readFileSync('./' + process.argv[2], 'utf-8').split('\n');
const NEO = fs.readFileSync('./' + process.argv[3], 'utf-8').split('\n');

let NEOWidth = NEO.length;
let MATRIXWidth = MATRIX.length;
let MATRIXHeight = MATRIX[0].length;

function findRect(indexMATRIX, indexNEO) {
  if (indexMATRIX >= MATRIXWidth) return;

  for (let index = 0; index < MATRIXHeight - 2; index++) {
    if (indexNEO >= NEOWidth) return;
    if (
      MATRIX[indexMATRIX][index] === NEO[indexNEO][0] &&
      MATRIX[indexMATRIX][index + 1] === NEO[indexNEO][1] &&
      MATRIX[indexMATRIX][index + 2] === NEO[indexNEO][2]
    ) {
      console.log('(', indexMATRIX, ',', index, ')', '(', indexMATRIX, ',', index + 1, ')', '(', indexMATRIX, ',', index + 2, ')');
      findRect(++indexMATRIX, indexNEO++)
    }
  }

  findRect(++indexMATRIX, indexNEO)
}

let before = new Date().getMilliseconds();
findRect(0, 0);
let after = new Date().getMilliseconds();

console.log('time: ', after - before, 'ms');
