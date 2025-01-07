# JavaScript Null Handling Bug

This repository demonstrates a common, yet subtle, error in JavaScript related to null handling in functions. The `foo` function adds two numbers; however, it simply returns `null` if either input is `null`.  This approach masks potential issues.  A better solution is presented to handle null inputs more effectively.

## Bug Description
The `bug.js` file contains the faulty function.  The issue arises when the function encounters a null value.  Instead of throwing an error, it silently returns null, which might lead to unexpected behavior in a larger program. 

## Solution
The `bugSolution.js` file presents a revised version of the function. The improved version explicitly throws an error when a null value is detected, making it clearer when a problem has occurred. This helps with debugging and prevents unexpected behavior.