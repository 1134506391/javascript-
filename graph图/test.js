function test1(a, callback) {
    callback()
}

test1('bb', function(a) {
    console.log('aaaaaa')
})