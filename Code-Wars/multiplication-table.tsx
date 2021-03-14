// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

export function multiplicationTable(size: number): number[][] {
    const resultArr: number[][] = []
    let multiplicationArr: number[] = []

    for (let row = 1; row <= size; row++) {
        multiplicationArr = []

        for (let col = 1; col <= size; col++) {
            multiplicationArr.push(row * col)
        }

        resultArr.push(multiplicationArr)
    }

    return resultArr
}