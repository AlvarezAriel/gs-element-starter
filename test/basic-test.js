'use strict';

suite('<gs-element-starter>', function () {

  var myEl;

  setup(function () {
    myEl = fixture('gs-element-starter-fixture');
  });

  test('defines the "author" property', function () {
    assert.equal(myEl.author.name, 'Dimitri Glazkov');
    assert.equal(myEl.author.image, 'http://addyosmani.com/blog/wp-content/uploads/2013/04/unicorn.jpg');
  });

  test('says hello', function () {
    assert.equal(myEl.sayHello(), 'gs-element-starter says, Hello World!');

    var greetings = myEl.sayHello('greetings Earthlings');
    assert.equal(greetings, 'gs-element-starter says, greetings Earthlings');
  });

  test('fires lasers', function (done) {
    myEl.addEventListener('gs-element-starter-lasers', function (event) {
      assert.equal(event.detail.sound, 'Pew pew!');
      done();
    });
    myEl.fireLasers();
  });

  test('distributed children', function () {
    var els = myEl.getContentChildren();
    assert.equal(els.length, 1, 'one distributed node');
    assert.equal(els[0], myEl.querySelector('h2'), 'content distributed correctly');
  });
});