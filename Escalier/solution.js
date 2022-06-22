const [c, f, arg] = process.argv;

let rect = (start, end) => {
  end = !isNaN(end) && parseInt(end);
  start = !isNaN(start) && parseInt(start);

  if (typeof end !== 'number')
    console.log('\nUsage: node solution.js [number] \nPar example: node solution.js 4\n');

  for (let index = (start < end) ? start : end; index < (start < end) ? end : start; index++) {
    console.log(
      ' '.repeat(
        (start < end) ? end - index : index + 1
      )
      +
      '#'.repeat(
        (start < end) ? (index * 2) + 1 : (start - index) * 2 - 1
      )
    )
  }
}

rect(0, arg);
rect(arg, 0);