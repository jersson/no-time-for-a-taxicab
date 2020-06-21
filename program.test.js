const Navigator = require('./navigator');

describe('tests for no-time-for-a-taxicab', () => {

    test('should return to the original point turning 4 times to the right', () => {
        const path = 'R1, R1, R1, R1';
        const navigator = new Navigator();
        navigator.navigate(path);

        const distanceAway =  navigator.distanceAway();
        expect(distanceAway).toBe(0);
    })

    test('should return to the original point turning 4 times to the left', () => {
        const path = 'L1, L1, L1, L1';
        const navigator = new Navigator();
        navigator.navigate(path);

        const distanceAway =  navigator.distanceAway();
        expect(distanceAway).toBe(0);
    })

    test('should work using a complex roadmap', () => {
        const path = 'R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1';
        const navigator = new Navigator();
        navigator.navigate(path);

        const distanceAway =  navigator.distanceAway();
        expect(distanceAway).toBe(262);
    })
})