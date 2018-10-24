const app = require('./koaserver')
const server = app.listen()
const request = require('supertest').agent(server)

describe ('hello', function () {
    after(function () {
        server.close()
    })

    it('Should be 你好', function (done) {
        request
        .get('/hello')
        .expect(200)
        .expect('你好',done)
    })
    it('Should be 姓名:陳佳駿', function (done) {
        request
        .get('/name')
        .expect(200)
        .expect('姓名:陳佳駿',done)
    })
    it('Should be 學號:110510530', function (done) {
        request
        .get('/id')
        .expect(200)
        .expect('學號:110510530',done)
    })
    it('/xxx/yyy should status = 404', function(done) {
      request
      .get('/xxx/yyy')
      .expect(404, done)
    });
})
