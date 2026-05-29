import{ test, describe, it, expect } from 'vitest'
import{ formatDate, formatDateBritishStandard } from '../../utils/date-formatter.helper.ts'


describe('formatDate', () => {
    test('01/01/2026 returns 01 Jan 2026', () => {
        //Arrange
        const date = new Date('2026-01-01');

        //Act
        const result = formatDate(date);

        //Assert
        expect(result).toBe('01 Jan 2026');
    });
});

describe('formatDateBritishStandard', () => {
    test('1st of July 2026 return 01/07/2026', () => {
        //arrange
        const date = new Date('2026-07-1');
        //act
        const result = formatDateBritishStandard(date);
        //assert
        expect(result).toBe('01/07/2026');
    })
})