'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = observe;

var _behavior = require('./behavior.js');

var _props = require('./props.js');

function observe(vantOptions, options) {
  var watch = vantOptions.watch,
      computed = vantOptions.computed;

  if (watch) {
    var props = options.properties || {};
    Object.keys(watch).forEach(function (key) {
      if (key in props) {
        var prop = props[key];

        if (prop === null || !('type' in prop)) {
          prop = {
            type: prop
          };
        }

        prop.observer = watch[key];
        props[key] = prop;
      }
    });
    options.properties = props;
  }

  if (computed) {
    options.behaviors.push(_behavior.behavior);
    options.methods = options.methods || {};

    options.methods.$options = function () {
      return vantOptions;
    };

    if (options.properties) {
      (0, _props.observeProps)(options.properties);
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmUiLCJ2YW50T3B0aW9ucyIsIm9wdGlvbnMiLCJ3YXRjaCIsImNvbXB1dGVkIiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIm9ic2VydmVyIiwiYmVoYXZpb3JzIiwicHVzaCIsImJlaGF2aW9yIiwibWV0aG9kcyIsIiRvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsTyxHQUFBQSxPOztBQUZoQjs7QUFDQTs7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxXQUFqQixFQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsTUFBSUMsUUFBUUYsWUFBWUUsS0FBeEI7QUFBQSxNQUNJQyxXQUFXSCxZQUFZRyxRQUQzQjs7QUFHQSxNQUFJRCxLQUFKLEVBQVc7QUFDVCxRQUFJRSxRQUFRSCxRQUFRSSxVQUFSLElBQXNCLEVBQWxDO0FBQ0FDLFdBQU9DLElBQVAsQ0FBWUwsS0FBWixFQUFtQk0sT0FBbkIsQ0FBMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3hDLFVBQUlBLE9BQU9MLEtBQVgsRUFBa0I7QUFDaEIsWUFBSU0sT0FBT04sTUFBTUssR0FBTixDQUFYOztBQUVBLFlBQUlDLFNBQVMsSUFBVCxJQUFpQixFQUFFLFVBQVVBLElBQVosQ0FBckIsRUFBd0M7QUFDdENBLGlCQUFPO0FBQ0xDLGtCQUFNRDtBQURELFdBQVA7QUFHRDs7QUFFREEsYUFBS0UsUUFBTCxHQUFnQlYsTUFBTU8sR0FBTixDQUFoQjtBQUNBTCxjQUFNSyxHQUFOLElBQWFDLElBQWI7QUFDRDtBQUNGLEtBYkQ7QUFjQVQsWUFBUUksVUFBUixHQUFxQkQsS0FBckI7QUFDRDs7QUFFRCxNQUFJRCxRQUFKLEVBQWM7QUFDWkYsWUFBUVksU0FBUixDQUFrQkMsSUFBbEIsQ0FBdUJDLGtCQUF2QjtBQUNBZCxZQUFRZSxPQUFSLEdBQWtCZixRQUFRZSxPQUFSLElBQW1CLEVBQXJDOztBQUVBZixZQUFRZSxPQUFSLENBQWdCQyxRQUFoQixHQUEyQixZQUFZO0FBQ3JDLGFBQU9qQixXQUFQO0FBQ0QsS0FGRDs7QUFJQSxRQUFJQyxRQUFRSSxVQUFaLEVBQXdCO0FBQ3RCLCtCQUFhSixRQUFRSSxVQUFyQjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlaGF2aW9yIH0gZnJvbSAnLi9iZWhhdmlvcic7XG5pbXBvcnQgeyBvYnNlcnZlUHJvcHMgfSBmcm9tICcuL3Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlKHZhbnRPcHRpb25zLCBvcHRpb25zKSB7XG4gIHZhciB3YXRjaCA9IHZhbnRPcHRpb25zLndhdGNoLFxuICAgICAgY29tcHV0ZWQgPSB2YW50T3B0aW9ucy5jb21wdXRlZDtcblxuICBpZiAod2F0Y2gpIHtcbiAgICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BlcnRpZXMgfHwge307XG4gICAgT2JqZWN0LmtleXMod2F0Y2gpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKGtleSBpbiBwcm9wcykge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2tleV07XG5cbiAgICAgICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcbiAgICAgICAgICBwcm9wID0ge1xuICAgICAgICAgICAgdHlwZTogcHJvcFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wLm9ic2VydmVyID0gd2F0Y2hba2V5XTtcbiAgICAgICAgcHJvcHNba2V5XSA9IHByb3A7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb3B0aW9ucy5wcm9wZXJ0aWVzID0gcHJvcHM7XG4gIH1cblxuICBpZiAoY29tcHV0ZWQpIHtcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yKTtcbiAgICBvcHRpb25zLm1ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge307XG5cbiAgICBvcHRpb25zLm1ldGhvZHMuJG9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmFudE9wdGlvbnM7XG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLnByb3BlcnRpZXMpIHtcbiAgICAgIG9ic2VydmVQcm9wcyhvcHRpb25zLnByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxufSJdfQ==