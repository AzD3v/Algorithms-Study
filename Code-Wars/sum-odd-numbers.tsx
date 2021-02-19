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
        const sumArr: Array<number> = []
        let lineOddsQnt: number = 0
  
        for (let i = n; i >= 1; i--) {
            lineOddsQnt += i
        }

        for (let i = 1; sumArr.length < lineOddsQnt; i++) {
            if (i % 2 !== 0) {
                sumArr.push(i)
            }
        }
  
        return sumArr.slice(sumArr.length - n)
            .reduce((a, b) => a + b)
        }
}