function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}

console.log(foo(5, 10)); // Output: 15

try {
  console.log(foo(null, 5)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
}

try {
  console.log(foo(10, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Null values are not allowed.
} 