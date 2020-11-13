1) Write a function that takes as input (sentence: String, n: Number) 
and returns a list of size `n` where each element contains a word and and the frequency of that word in `sentence`
This list should be sorted by decreasing frequency and alphabetical order in case of tie.

Example: 
Input: ("baz bar foo foo zblah zblah zblah baz toto bar", 3)
Output: 
[
   ("zblah", 3),
   ("bar", 2),
   ("baz", 2),
]

2) Write tests for the function you just wrote

--

I decided to make a tiny node project for that exercise, so you can run ``` npm install ``` to install needed packages.

You can run ``` npm run test ``` in order to run the tests. If nothing goes into console, it means all assertions succeeded.

I used ``` chai ``` for assertions.
