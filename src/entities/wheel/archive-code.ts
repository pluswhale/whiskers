export default {};

// probabilities
// const inverseValuesSum = sectorsData?.reduce((total, elem) => total + 1 / elem.value, 0);
// function assignProbabilities(coeff = 360) {
//     if (sectorsData?.[0]?.probability) return;

//     //probabilities sum will might be equal to 1, so the remainder part will be added to the smallest value
//     let wholeProbabilityRemainder = coeff;
//     let minValueSectorIndex = 0;
//     for (let i = 0; i < sectorsData.length; i++) {
//         //count probability of elem according to whole value and round it
//         //@ts-ignore
//         sectorsData[i].probability = Math.floor(coeff / sectorsData[i].value / inverseValuesSum); // 1/x_i/sigma(1/x_i)
//         // reduce probability remainder
//         //@ts-ignore
//         wholeProbabilityRemainder -= sectorsData[i].probability;
//         // find min elem
//         if (sectorsData[i].value < sectorsData[minValueSectorIndex].value) minValueSectorIndex = i;
//     }
//     // add probability remainder to the smallest value
//     //@ts-ignore
//     sectorsData[minValueSectorIndex].probability += wholeProbabilityRemainder;
// }

// custom animation
// //@ts-ignore
// function makeEaseOut(timing) {
//     //@ts-ignore
//     return function (timeFraction) {
//         return 1 - timing(1 - timeFraction);
//     };
// }
// //@ts-ignore
// function bounce(timeFraction) {
//     for (let a = 0, b = 1; 1; a += b, b /= 2) {
//         if (timeFraction >= (7 - 4 * a) / 11) {
//             return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
//         }
//     }
// }

// const bounceEaseOut = makeEaseOut(bounce);

