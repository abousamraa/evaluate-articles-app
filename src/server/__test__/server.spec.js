import 'babel-polyfill'
import app from '../index'
const request = require('supertest')
describe('API Endpoints', () => {
    it('shoud read mockAPI', async () => {
        const res = await request(app).get('/test')
        expect(res.body).toHaveProperty('message')
    })
})
