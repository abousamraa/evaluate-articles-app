import 'babel-polyfill'
import { handleSubmit } from '../js/formHandler'

describe('submit test', () => {
    test(' handleSubmit is defined', () => {
        expect(handleSubmit).toBeDefined()
    })
})
