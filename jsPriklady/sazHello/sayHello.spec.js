var hello = require('./sayHello.js');

//console.log(hello);

  it('vratin sayHello retezecn', function () {
    expect(hello()).toEqual('sayHello');
  });
