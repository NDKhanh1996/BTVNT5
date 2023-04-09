// Viết chương trình đảo ngược một chuỗi
let str: string = '1234567'

let arr: string[] = []
for (let i = 0; i < str.length; i++) {
    arr[i] = str[str.length - 1 - i]
}
let result: string = arr.join('')
console.log(result)