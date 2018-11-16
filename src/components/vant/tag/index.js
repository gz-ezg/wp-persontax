'use strict';

var _component = require('./../common/component.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_COLOR = '#999';
var COLOR_MAP = {
  danger: '#f44',
  primary: '#38f',
  success: '#06bf04'
};
(0, _component.VantComponent)({
  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean
  },
  computed: {
    classes: function classes() {
      var _classNames;

      var data = this.data;
      return this.classNames('van-tag', 'custom-class', (_classNames = {
        'van-tag--mark': data.mark,
        'van-tag--plain': data.plain,
        'van-tag--round': data.round
      }, _defineProperty(_classNames, "van-tag--" + data.size, data.size), _defineProperty(_classNames, 'van-hairline--surround', data.plain), _classNames));
    },
    style: function style() {
      var color = this.data.color || COLOR_MAP[this.data.type] || DEFAULT_COLOR;
      var key = this.data.plain ? 'color' : 'background-color';
      return key + ": " + color;
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfQ09MT1IiLCJDT0xPUl9NQVAiLCJkYW5nZXIiLCJwcmltYXJ5Iiwic3VjY2VzcyIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsInR5cGUiLCJtYXJrIiwiQm9vbGVhbiIsImNvbG9yIiwicGxhaW4iLCJyb3VuZCIsImNvbXB1dGVkIiwiY2xhc3NlcyIsImRhdGEiLCJjbGFzc05hbWVzIiwic3R5bGUiLCJrZXkiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQSxJQUFJQSxnQkFBZ0IsTUFBcEI7QUFDQSxJQUFJQyxZQUFZO0FBQ2RDLFVBQVEsTUFETTtBQUVkQyxXQUFTLE1BRks7QUFHZEMsV0FBUztBQUhLLENBQWhCO0FBS0EsOEJBQWM7QUFDWkMsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLFVBQU1ELE1BRkQ7QUFHTEUsVUFBTUMsT0FIRDtBQUlMQyxXQUFPSixNQUpGO0FBS0xLLFdBQU9GLE9BTEY7QUFNTEcsV0FBT0g7QUFORixHQURLO0FBU1pJLFlBQVU7QUFDUkMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQzFCLFVBQUlDLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkIsY0FBM0I7QUFDTCx5QkFBaUJELEtBQUtQLElBRGpCO0FBRUwsMEJBQWtCTyxLQUFLSixLQUZsQjtBQUdMLDBCQUFrQkksS0FBS0g7QUFIbEIsc0NBSUosY0FBY0csS0FBS1YsSUFKZixFQUlzQlUsS0FBS1YsSUFKM0IsZ0NBS0wsd0JBTEssRUFLcUJVLEtBQUtKLEtBTDFCLGdCQUFQO0FBT0QsS0FWTztBQVdSTSxXQUFPLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsVUFBSVAsUUFBUSxLQUFLSyxJQUFMLENBQVVMLEtBQVYsSUFBbUJWLFVBQVUsS0FBS2UsSUFBTCxDQUFVUixJQUFwQixDQUFuQixJQUFnRFIsYUFBNUQ7QUFDQSxVQUFJbUIsTUFBTSxLQUFLSCxJQUFMLENBQVVKLEtBQVYsR0FBa0IsT0FBbEIsR0FBNEIsa0JBQXRDO0FBQ0EsYUFBT08sTUFBTSxJQUFOLEdBQWFSLEtBQXBCO0FBQ0Q7QUFmTztBQVRFLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG52YXIgREVGQVVMVF9DT0xPUiA9ICcjOTk5JztcbnZhciBDT0xPUl9NQVAgPSB7XG4gIGRhbmdlcjogJyNmNDQnLFxuICBwcmltYXJ5OiAnIzM4ZicsXG4gIHN1Y2Nlc3M6ICcjMDZiZjA0J1xufTtcblZhbnRDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIHNpemU6IFN0cmluZyxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgbWFyazogQm9vbGVhbixcbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHBsYWluOiBCb29sZWFuLFxuICAgIHJvdW5kOiBCb29sZWFuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlczogZnVuY3Rpb24gY2xhc3NlcygpIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lcygndmFuLXRhZycsICdjdXN0b20tY2xhc3MnLCB7XG4gICAgICAgICd2YW4tdGFnLS1tYXJrJzogZGF0YS5tYXJrLFxuICAgICAgICAndmFuLXRhZy0tcGxhaW4nOiBkYXRhLnBsYWluLFxuICAgICAgICAndmFuLXRhZy0tcm91bmQnOiBkYXRhLnJvdW5kLFxuICAgICAgICBbXCJ2YW4tdGFnLS1cIiArIGRhdGEuc2l6ZV06IGRhdGEuc2l6ZSxcbiAgICAgICAgJ3Zhbi1oYWlybGluZS0tc3Vycm91bmQnOiBkYXRhLnBsYWluXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZSgpIHtcbiAgICAgIHZhciBjb2xvciA9IHRoaXMuZGF0YS5jb2xvciB8fCBDT0xPUl9NQVBbdGhpcy5kYXRhLnR5cGVdIHx8IERFRkFVTFRfQ09MT1I7XG4gICAgICB2YXIga2V5ID0gdGhpcy5kYXRhLnBsYWluID8gJ2NvbG9yJyA6ICdiYWNrZ3JvdW5kLWNvbG9yJztcbiAgICAgIHJldHVybiBrZXkgKyBcIjogXCIgKyBjb2xvcjtcbiAgICB9XG4gIH1cbn0pOyJdfQ==