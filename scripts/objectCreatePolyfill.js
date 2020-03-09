if (!Object.create) {
    Object.create = function(arg, props) {
      function Func() {}
      Func.prototype = arg;
      if (typeof(props) === "object") {
        for (prop in props) {
         if (props.hasOwnProperty((prop))) {
          Func[prop] = props[prop];
         }
        }
       }
      return new Func();
    };
  }