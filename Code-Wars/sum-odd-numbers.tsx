/* Given the triangle of consecutive odd numbers:

            1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

*/

export class Challenge {
    static solution(number) {
        const multiples: Array<number> = []

        for (let i = 1; i < number; i++) {
            if ((i % 3 === 0) || (i % 5 === 0)) {
                multiples.push(i)
            }
        }

        const sum = multiples.reduce((a, b) => a + b, 0)

        return sum
    }
}