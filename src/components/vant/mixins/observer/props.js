'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeProps = observeProps;
function observeProps(props) {
  if (!props) {
    return;
  }

  Object.keys(props).forEach(function (key) {
    var prop = props[key];

    if (prop === null || !('type' in prop)) {
      prop = {
        type: prop
      };
    }

    var _prop = prop,
        observer = _prop.observer;

    prop.observer = function () {
      if (observer) {
        if (typeof observer === 'string') {
          observer = this[observer];
        }

        observer.apply(this, arguments);
      }

      this.setData();
    };

    props[key] = prop;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BzLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVQcm9wcyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIl9wcm9wIiwib2JzZXJ2ZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCQSxZLEdBQUFBLFk7QUFBVCxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUNsQyxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBRURDLFNBQU9DLElBQVAsQ0FBWUYsS0FBWixFQUFtQkcsT0FBbkIsQ0FBMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3hDLFFBQUlDLE9BQU9MLE1BQU1JLEdBQU4sQ0FBWDs7QUFFQSxRQUFJQyxTQUFTLElBQVQsSUFBaUIsRUFBRSxVQUFVQSxJQUFaLENBQXJCLEVBQXdDO0FBQ3RDQSxhQUFPO0FBQ0xDLGNBQU1EO0FBREQsT0FBUDtBQUdEOztBQUVELFFBQUlFLFFBQVFGLElBQVo7QUFBQSxRQUNJRyxXQUFXRCxNQUFNQyxRQURyQjs7QUFHQUgsU0FBS0csUUFBTCxHQUFnQixZQUFZO0FBQzFCLFVBQUlBLFFBQUosRUFBYztBQUNaLFlBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0EscUJBQVcsS0FBS0EsUUFBTCxDQUFYO0FBQ0Q7O0FBRURBLGlCQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQkMsU0FBckI7QUFDRDs7QUFFRCxXQUFLQyxPQUFMO0FBQ0QsS0FWRDs7QUFZQVgsVUFBTUksR0FBTixJQUFhQyxJQUFiO0FBQ0QsR0F6QkQ7QUEwQkQiLCJmaWxlIjoicHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVByb3BzKHByb3BzKSB7XG4gIGlmICghcHJvcHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xuXG4gICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcbiAgICAgIHByb3AgPSB7XG4gICAgICAgIHR5cGU6IHByb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIF9wcm9wID0gcHJvcCxcbiAgICAgICAgb2JzZXJ2ZXIgPSBfcHJvcC5vYnNlcnZlcjtcblxuICAgIHByb3Aub2JzZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IHRoaXNbb2JzZXJ2ZXJdO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKCk7XG4gICAgfTtcblxuICAgIHByb3BzW2tleV0gPSBwcm9wO1xuICB9KTtcbn0iXX0=