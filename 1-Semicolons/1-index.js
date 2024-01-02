// Semicolons
// A semicolon may be omitted in most cases when a line break exists.

// This would also work:

alert('Hello')
alert('World')
// Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.

// In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!

// There are cases when a newline does not mean a semicolon. For example:

alert(3 +
1
+ 2);
// The code outputs 6 because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus "+", then it is an “incomplete expression”, so a semicolon there would be incorrect. And in this case, that works as intended.

// But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.

// Errors which occur in such cases are quite hard to find and fix.

// An example of an error
// If you’re curious to see a concrete example of such an error, check this code out:

alert("Hello");

[1, 2].forEach(alert);
// No need to think about the meaning of the brackets [] and forEach yet. We’ll study them later. For now, just remember the result of running the code: it shows Hello, then 1, then 2.

// Now let’s remove the semicolon after the alert:

alert("Hello")

[1, 2].forEach(alert);
// The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.

// If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.

// That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

// Here’s how the engine sees it:

alert("Hello")[1, 2].forEach(alert);
// Looks weird, right? Such merging in this case is just wrong. We need to put a semicolon after alert for the code to work correctly.

// This can happen in other situations also.