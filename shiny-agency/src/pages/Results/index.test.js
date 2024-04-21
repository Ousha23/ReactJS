import { formatJobList, formatFetchParams } from './'

 
describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
 
    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

it('should return url string', () => {
    const answers = {1 : false, 2 : false, 3 : false }
    const expectedState ='a1=0&a2=0&a3=0';
    expect(formatFetchParams(answers)).toEqual(expectedState)
})