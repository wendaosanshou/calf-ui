import sayHello from '../src/index'

/**
 *  describe第一个参数命名规范：“#” + 目录名
 */
describe('#hello-world', () => {
    it('返回值为true', () => {
        expect(sayHello('远远')).to.be.equal(true)
    })
})
