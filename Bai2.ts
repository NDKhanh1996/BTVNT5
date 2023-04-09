// Viết chương trình đầu vào 4 mảng, đầu ra mảng có tổng các phần tử lớn nhất
function check(arr1: number[], arr2: number[], arr3: number[], arr4: number[]) {
    function sumArr(arr: number[]) {
        let sum: number = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }

    let arrays: number[][] = [arr1, arr2, arr3, arr4]
    let sumArrays: number[] = [sumArr(arr1), sumArr(arr2), sumArr(arr3), sumArr(arr4)]
    let sortArrays = sumArrays.sort((a: number, b: number) => {
        return b - a
    })
    for (let i = 0; i < arrays.length; i++) {
        if (sumArr(arrays[i]) === sortArrays[0]) {
            return (`mảng có tổng các phần tử lớn nhất là arr${i + 1} = [${arrays[i]}] với tổng các giá trị là ${sortArrays[0]}`)
        }
    }
}

let arr1: number[] = [1, 2, 3, 4, 5]
let arr2: number[] = [2, 3, 4, 5, 6]
let arr3: number[] = [3, 4, 5, 6, 7]
let arr4: number[] = [4, 5, 6, 7, 8]
console.log(check(arr1, arr2, arr3, arr4))