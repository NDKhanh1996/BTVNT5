// Viết chương trình kiểm tra xem một số có phải là số hoàn hảo hay không. Một số hoàn hảo là số có tổng các ước số bằng chính nó.
function check(input: number) {
    let array: number [] = [];
    for (let i = 0; i < input; i++) {
        if (input % i === 0) {
            array.push(i)
        }
    }
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    if (sum === input) {
        return (`${input} is perfect number`)
    } else {
        return (`${input} is not perfect number`)
    }
}

console.log(check(8128))
