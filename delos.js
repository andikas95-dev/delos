// No. 1
function denda(date1, date2) {
  const date1Arr = date1.split(' ').reverse();
  const date2Arr = date2.split(' ').reverse();

  for (let i = 0; i < date1Arr.length; i++) {
    if (Number(date2Arr[i]) > Number(date1Arr[i])) {
      // console.log(date1Arr[i], date2Arr[i])
      switch (i) {
        case 0:
          return 120000;
        case 1:
          return (Number(date2Arr[i]) - Number(date1Arr[i])) * 500;
        case 2:
          return (Number(date2Arr[i]) - Number(date1Arr[i])) * 15;
        default:
          return 'error';
      }
    }
  }
  return 0;
}

console.log(denda('7 8 2022', '19 8 2022'));

// No. 2
function sourCandy(student, candy, start) {
  let sour = start;

  for (let i = 1; i < candy; i++) {
    if (sour < student) {
      sour++;
    } else {
      sour = 1;
    }
  }

  return sour;
}

console.log(sourCandy(5, 3, 1));
