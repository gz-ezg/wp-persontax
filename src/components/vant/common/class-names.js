'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.classNames = classNames;
var hasOwn = {}.hasOwnProperty;
function classNames() {
  var classes = [];

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (!arg) continue;
    var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);

      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLW5hbWVzLmpzIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5Iiwia2V5IiwiY2FsbCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQ2dCQSxVLEdBQUFBLFU7QUFEaEIsSUFBSUMsU0FBUyxHQUFHQyxjQUFoQjtBQUNPLFNBQVNGLFVBQVQsR0FBc0I7QUFDM0IsTUFBSUcsVUFBVSxFQUFkOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDekMsUUFBSUcsTUFBTUYsVUFBVUQsQ0FBVixDQUFWO0FBQ0EsUUFBSSxDQUFDRyxHQUFMLEVBQVU7QUFDVixRQUFJQyxpQkFBaUJELEdBQWpCLHlDQUFpQkEsR0FBakIsQ0FBSjs7QUFFQSxRQUFJQyxZQUFZLFFBQVosSUFBd0JBLFlBQVksUUFBeEMsRUFBa0Q7QUFDaERMLGNBQVFNLElBQVIsQ0FBYUYsR0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJRyxNQUFNQyxPQUFOLENBQWNKLEdBQWQsS0FBc0JBLElBQUlELE1BQTlCLEVBQXNDO0FBQzNDLFVBQUlNLFFBQVFaLFdBQVdhLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJOLEdBQXZCLENBQVo7O0FBRUEsVUFBSUssS0FBSixFQUFXO0FBQ1RULGdCQUFRTSxJQUFSLENBQWFHLEtBQWI7QUFDRDtBQUNGLEtBTk0sTUFNQSxJQUFJSixZQUFZLFFBQWhCLEVBQTBCO0FBQy9CLFdBQUssSUFBSU0sR0FBVCxJQUFnQlAsR0FBaEIsRUFBcUI7QUFDbkIsWUFBSU4sT0FBT2MsSUFBUCxDQUFZUixHQUFaLEVBQWlCTyxHQUFqQixLQUF5QlAsSUFBSU8sR0FBSixDQUE3QixFQUF1QztBQUNyQ1gsa0JBQVFNLElBQVIsQ0FBYUssR0FBYjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELFNBQU9YLFFBQVFhLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRDtBQUNEIiwiZmlsZSI6ImNsYXNzLW5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG4gIHZhciBjbGFzc2VzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgIGlmICghYXJnKSBjb250aW51ZTtcbiAgICB2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cbiAgICBpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNsYXNzZXMucHVzaChhcmcpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcbiAgICAgIHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblxuICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChpbm5lcik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIga2V5IGluIGFyZykge1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59XG47Il19