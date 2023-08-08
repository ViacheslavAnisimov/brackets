module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
if (str.length % 2 !== 0) return false;

for (let i = 0; i < bracketsConfig.length;) {
  if (str.includes(bracketsConfig[i].join(''))) {
    str = str.replace(bracketsConfig[i].join(''), '');
    i = 0;
  } else {
    i++;
  }
}

if (str.length === 0) {
  return true;
} else {
  return false;
}
}

// module.exports = function check(str, bracketsConfig) {
  // function check(str, bracketsConfig) {
//   let arr = str.split('');
//   if (str.length % 2 !== 0) return false;
//   for (let i = 0; i < bracketsConfig.length; i++) {

//     for (let j = 0; j < arr.length;) {
//       // console.log(bracketsConfig[j][0]);
//       // console.log(str[j]);
//       if (bracketsConfig[i][0] === arr[j] && bracketsConfig[i][1] === arr[j + 1]) {
//       // if (str.includes(bracketsConfig[i].join(''))) {
//         arr.splice(j, 2);
//         j = 0;
//       } else {
//         j++;
//       }
//     }
//   }
//   console.log(arr);
//   if (str.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];
// let str = '([{}])';

// console.log(check(str, bracketsConfig));

// console.log(bracketsConfig[0][1]);

