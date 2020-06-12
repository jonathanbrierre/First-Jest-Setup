require("../example")
const example = window.example

//3 A's of Testing - arrange, act, assert
// arrange - setting up environment 

    // this function is called before all the tests
    beforeAll(()=>{
        console.log('before all called')
    })

    //this function is called after all the tests
    afterAll(()=>{
        console.log('after all called')
    })

    //this function is run before each test
    //Handy in resetting variables that tests depend on
    beforeEach(()=>{
        console.log('before each called')
    })

    // function is run after each test
    afterEach(()=>{
        console.log('after each called')
    })

// describe gives a description of what the test does
describe('our example module', () => {
    test('should be defined', ()=>{
        const name = 'Mark'
        const expected = example.hello(name)
        expect(expected).toEqual('Hello Mark')
    })
    test('should be an object', ()=>{
        expect(typeof example).toEqual('object')
    })
})

// use test.only to skip other tests besides that single test
// use test.skip to skip that particular test

