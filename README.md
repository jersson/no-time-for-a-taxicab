# Advent of code 2016 - Day 1: No time for a Taxicab (Part 1)
You can see the original problem [here](https://adventofcode.com/2016/day/1#part1) or read the spanish translation [here](https://gist.github.com/lupomontero/7ee35fec297cc752e501ca2cb512ed71).

## summary
- [what's the project structure?](#whats-the-project-structure)
- [what's the code do?](#whats-the-code-do)
- [how to run the code?](#how-to-run-the-code)
- [how to test the code?](#how-to-test-the-code)

## what's the project structure?
```
.
├── LICENSE
├── README.md
├── navigator.js
├── navigator.test.js
├── package-lock.json
├── package.json
└── program.js
```

## what's the code do?
You'll find the most important part of the code in the [`navigator.js`](./navigator.js) file. The `Navigator` class has this structure:
```javascript
  class Navigator {
      constructor(){...}
      navigate(instructions){...}
      move(whereToTurn, path, blocks) {...}
      distanceAway(){...}
  };
```

The methods `navigate` and `move` has the part you have to read to understand how to solve this problem :computer:

## how to run the code?
The console program is using the input proposed by [@lupomontero](https://gist.github.com/lupomontero) in the [spanish translation](https://gist.github.com/lupomontero/7ee35fec297cc752e501ca2cb512ed71) of the problem.

That's why the console output is in spanish :blush:

```
$ npm start
> node .

instrucciones: R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1

Menor distancia: 262
```

## how to test the code?
I'm using [Jest](https://jestjs.io/) for the test cases and you can see the results if you run this command:
```
$ npm test
> jest navigator.test.js

PASS  ./navigator.test.js
  tests for no-time-for-a-taxicab
    ✓ should return to the original point turning 4 times to the right (2 ms)
    ✓ should return to the original point turning 4 times to the left
    ✓ should work using example#1
    ✓ should work using example#2 (1 ms)
    ✓ should work using example#3
    ✓ should work using a complex roadmap

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.331 s
```
