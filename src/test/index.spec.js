import { benchmark } from './benchmark.js';
import { forEachOf } from "../index.js";
import { forEachOf as recursiveForEachOf } from '../legacy.js';

// Define test arrays
const testArray = [
    1,
    2,
    3,
    [
        3.1,
        3.2,
        3.3,
        [
            3.31,
            3.32,
            [
                3.321,
                3.322,
                [
                    3.3221,
                    3.3222,
                    3.3223
                ]
            ]
        ]
    ],
    4,
    5,
    [
        5.1,
        5.2
    ],
    6
];

// forEachOf(nestedNumbersArray, function (item) { console.log(item) });
// forEachOf(nestedNumbersArray, function (item) { console.log(item) }, 3);
// forEachOf(nestedNumbersArray, function (item) { console.log(item) }, 4);
// forEachOf(nestedNumbersArray, function (item) { console.log(item) }, 6);

// Define a function that invokes the optimized version of the forEachOf function
function optimizedForEachOfTest() {
    // console.time('optimizedForEachOfFunction');
    forEachOf(testArray, item => {
        console.log(item);
    });
    // console.timeEnd('optimizedForEachOfFunction');
}

// Define a function that invokes the non-optimized version of the forEachOf function
function nonoptimizedForEachOfTest() {
    // console.time('nonoptimizedForEachOfFunction');
    recursiveForEachOf(testArray, item => {
        console.log(item);
    });
    // console.timeEnd('nonoptimizedForEachOfFunction');
}

// Measure the performance of the optimized version of your forEachOf function by calling
// the benchmark function with the optimizedForEachOfTest function and a certain number of iterations.
const iterations = 1000;

// Warm-up call
benchmark(optimizedForEachOfTest, iterations);

const averageTime1 = benchmark(optimizedForEachOfTest, iterations);

// Warm-up call
benchmark(nonoptimizedForEachOfTest, iterations);

const averageTime2 = benchmark(nonoptimizedForEachOfTest, iterations);

console.log(`Average time per iteration: ${averageTime1.toFixed(2)} ms`);
console.log(`Average time per iteration: ${averageTime2.toFixed(2)} ms`);