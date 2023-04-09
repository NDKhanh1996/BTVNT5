// Viết chương trình đầu vào 1 mảng và giá trị n. Đầu ra chương trình là 1 mảng 2 chiều sao cho mỗi phần tử trong mảng 2 chiều là 1 mảng gồm n phần tử từ mảng đã cho.
//     Ví dụ: arr = [1,2,3,4,5]
// n = 2: output = [ [1,2], [3,4], [5] ]
// n = 3: output = [ [1,2,3], [4,5] ]
// n = 4: output = [ [1,2,3,4], [5] ]
var inputArr = [1, 2, 3, 4, 5];
var inputN = 4;
var arr = [];
var a = 0;
for (var i = 0; i < inputArr.length / inputN; i++) {
    var temp = [];
    for (var j = 0; j < inputN; j++) {
        temp[j] = inputArr[j + a];
    }
    temp = temp.filter(function (i) { return i !== undefined; });
    arr.push(temp);
    a += inputN;
}
console.log(arr);
