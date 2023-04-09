// Viết chương trình đầu vào 1 mảng và giá trị n. Đầu ra chương trình là 1 mảng 2 chiều sao cho mỗi phần tử trong mảng 2 chiều là 1 mảng gồm n phần tử từ mảng đã cho.
//     Ví dụ: arr = [1,2,3,4,5]
// n = 2: output = [ [1,2], [3,4], [5] ]
// n = 3: output = [ [1,2,3], [4,5] ]
// n = 4: output = [ [1,2,3,4], [5] ]
// let inputArr: number[] = [1,2,3,4,5]
// let inputN: number = 2
// let arr: number[][] = []
// let a: number = 0
//  for (let i = 0; i <inputArr.length / inputN ; i++) {
//     let temp: number[] = []
//     for (let j = 0; j < inputN ; j++) {
//         temp[j] = inputArr[j + a]
//     }
//     arr.push(temp)
//     a += inputN
// }
// console.log(arr)
var a = [1, 2, undefined];
var b = a.filter(function (item) { return item !== undefined; });
console.log(b);
