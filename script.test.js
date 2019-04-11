const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'disney.com',
    'cheese.com',
    'yahoo.com'
];


describe('googleSearch', () => {
    it('test 001', ()=> {
        expect('hello').toBe('hello')
    })

    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
    })


    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
})


