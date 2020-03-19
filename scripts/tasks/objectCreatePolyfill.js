// Object.create = false // for test only

// /* Object Create Polyfill */
// if (!Object.create) {
//     Object.create = function(proto, props) {
//       function Func() {}
//       Func.prototype = proto;
//       var obj = new Func();
//       if (typeof(props) === "object") {
//         for (prop in props) {
//          if (props.hasOwnProperty((prop))) {
//           obj.defineProperty(prop, {value: props[prop]})
//          }
//         }
//        }
//       return obj;
//     };
//   }

// /* Test */
// const pointXpointY = { x: 1, y: 2 }
// const points = Object.create(pointXpointY, {z: 3, t: 4})
// console.log(points.x, points.y, points.z, points.t) // 1 2 3 4 