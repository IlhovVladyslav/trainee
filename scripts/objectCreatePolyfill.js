if (!Object.create) {
    Object.create = function(arg) {
      function Func() {}
      Func.prototype = arg;
      return new Func();
    };
  }