// TODO: import the url check function
import { checkUrl } from '../js/checkURL'

describe('Test check url functionality', () => {
    test('checkUrl function defined or not', () => {
        expect(checkUrl).toBeDefined()
    })

    test('Test invalid Url', () => {
        expect(checkUrl('https://www.google.com/')).toBeTruthy()
    })

    test('Test valid Url', () => {
        expect(checkUrl('hi')).toBeFalsy()
    })
})
