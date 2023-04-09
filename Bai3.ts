// Viết chương trình đảo ngược một chuỗi
function revert(str: string) {
    let arr: string[] = []
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[str.length - 1 - i]
    }
    return arr.join('')
}

let str1: string = '1234567'
console.log(revert(str1))