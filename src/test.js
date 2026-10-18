//data types :
// Function to be optimized
function add(a, b) {
    return a + b;
}

// 1. Warm-up phase: Call the function thousands of times with the SAME types (numbers)
// This triggers V8's profiler to flag 'add' as a candidate for JIT optimization.
for (let i = 0; i < 100000; i++) {
    add(i, i + 1);
}

// 2. The function is now compiled to optimized native machine code ("Hot Code")
console.log("Execution finished:", add(10, 20));

