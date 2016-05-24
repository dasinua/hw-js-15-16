'use strict';
$(function () {

  var cx = '000049086616001690147:yc4tt9tzlxy',
    gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByClassName('googleSearch')[0];
  s.parentNode.insertBefore(gcse, s);


  function Human() {
    this.name = '';
    this.age = '';
    this.gender = '';
    this.growth = '';
    this.weight = '';
  }

  function Worker() {
    this.company = '';
    this.wage = '';
  }
  Worker.prototype = new Human();
  Worker.prototype.work = function () {
    console.log("I'm working");
  };

  function Student() {
    this.education = '';
    this.stipend = '';
  }
  Student.prototype = new Human();
  Student.prototype.watchTV = function () {
    console.log("I'm watching TV");
  };

  var newStudent = new Student(),
      newWorker = new Worker();

  console.log(newWorker);
  console.log(newStudent);
});


