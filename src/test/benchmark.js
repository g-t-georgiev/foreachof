/**
 * A simple benchmark test function that measures the time it takes to execute a function
 * a certain number of times.
 * @param {function} func - The function to benchmark.
 * @param {number} iterations - The number of times to execute the function.
 * @returns {number} - The average time it took to execute the function, in milliseconds.
 */
export function benchmark(func, iterations) {
    // Start the timer
    const start = Date.now();
  
    // Execute the function `iterations` number of times
    for (let i = 0; i < iterations; i++) {
      func();
    }
  
    // Stop the timer and calculate the elapsed time in milliseconds
    const end = Date.now();
    const elapsed = end - start;
  
    // Calculate the average time per iteration
    const averageTime = elapsed / iterations;
  
    // Return the average time in milliseconds
    return averageTime;
  }