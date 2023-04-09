// Viết chương trình đầu vào 1 mảng và giá trị n. Đầu ra chương trình là 1 mảng 2 chiều sao cho mỗi phần tử trong mảng 2 chiều là 1 mảng gồm n phần tử từ mảng đã cho.
//     Ví dụ: arr = [1,2,3,4,5]
// n = 2: output = [ [1,2], [3,4], [5] ]
// n = 3: output = [ [1,2,3], [4,5] ]
// n = 4: output = [ [1,2,3,4], [5] ]
function output(inputArr: number[], inputN: number) {
    let arr: (number | undefined)[][] = []
    let a: number = 0
    for (let i = 0; i < inputArr.length / inputN; i++) {
        let temp: (number | undefined)[] = []
        for (let j = 0; j < inputN; j++) {
            temp[j] = inputArr[j + a]
        }
        temp = temp.filter((i: number | undefined) => i !== undefined)
        arr.push(temp)
        a += inputN
    }
    return arr
}

let inputArr: number[] = [1, 2, 3, 4, 5]
let inputN: number = 4
console.log(output(inputArr, inputN))
