'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'checkbox',
    type: 'descendant',
    linked: function linked(target) {
      var _this$data = this.data,
          value = _this$data.value,
          disabled = _this$data.disabled;
      target.setData({
        value: value.indexOf(target.data.name) !== -1,
        disabled: disabled || target.data.disabled
      });
    }
  },
  props: {
    value: Array,
    disabled: Boolean,
    max: Number
  },
  watch: {
    value: function value(_value) {
      var children = this.getRelationNodes('../checkbox/index');
      children.forEach(function (child) {
        child.setData({
          value: _value.indexOf(child.data.name) !== -1
        });
      });
    },
    disabled: function disabled(_disabled) {
      var children = this.getRelationNodes('../checkbox/index');
      children.forEach(function (child) {
        child.setData({
          disabled: _disabled || child.data.disabled
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl90aGlzJGRhdGEiLCJkYXRhIiwidmFsdWUiLCJkaXNhYmxlZCIsInNldERhdGEiLCJpbmRleE9mIiwicHJvcHMiLCJBcnJheSIsIkJvb2xlYW4iLCJtYXgiLCJOdW1iZXIiLCJ3YXRjaCIsIl92YWx1ZSIsImNoaWxkcmVuIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJjaGlsZCIsIl9kaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsWUFBVTtBQUNSQyxVQUFNLFVBREU7QUFFUkMsVUFBTSxZQUZFO0FBR1JDLFlBQVEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lDLFFBQVFGLFdBQVdFLEtBRHZCO0FBQUEsVUFFSUMsV0FBV0gsV0FBV0csUUFGMUI7QUFHQUosYUFBT0ssT0FBUCxDQUFlO0FBQ2JGLGVBQU9BLE1BQU1HLE9BQU4sQ0FBY04sT0FBT0UsSUFBUCxDQUFZTCxJQUExQixNQUFvQyxDQUFDLENBRC9CO0FBRWJPLGtCQUFVQSxZQUFZSixPQUFPRSxJQUFQLENBQVlFO0FBRnJCLE9BQWY7QUFJRDtBQVhPLEdBRkU7QUFlWkcsU0FBTztBQUNMSixXQUFPSyxLQURGO0FBRUxKLGNBQVVLLE9BRkw7QUFHTEMsU0FBS0M7QUFIQSxHQWZLO0FBb0JaQyxTQUFPO0FBQ0xULFdBQU8sU0FBU0EsS0FBVCxDQUFlVSxNQUFmLEVBQXVCO0FBQzVCLFVBQUlDLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsbUJBQXRCLENBQWY7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2hDQSxjQUFNWixPQUFOLENBQWM7QUFDWkYsaUJBQU9VLE9BQU9QLE9BQVAsQ0FBZVcsTUFBTWYsSUFBTixDQUFXTCxJQUExQixNQUFvQyxDQUFDO0FBRGhDLFNBQWQ7QUFHRCxPQUpEO0FBS0QsS0FSSTtBQVNMTyxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JjLFNBQWxCLEVBQTZCO0FBQ3JDLFVBQUlKLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsbUJBQXRCLENBQWY7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2hDQSxjQUFNWixPQUFOLENBQWM7QUFDWkQsb0JBQVVjLGFBQWFELE1BQU1mLElBQU4sQ0FBV0U7QUFEdEIsU0FBZDtBQUdELE9BSkQ7QUFLRDtBQWhCSTtBQXBCSyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICByZWxhdGlvbjoge1xuICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgIGxpbmtlZDogZnVuY3Rpb24gbGlua2VkKHRhcmdldCkge1xuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRkYXRhLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZDtcbiAgICAgIHRhcmdldC5zZXREYXRhKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLmluZGV4T2YodGFyZ2V0LmRhdGEubmFtZSkgIT09IC0xLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgdGFyZ2V0LmRhdGEuZGlzYWJsZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogQXJyYXksXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbWF4OiBOdW1iZXJcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2NoZWNrYm94L2luZGV4Jyk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zZXREYXRhKHtcbiAgICAgICAgICB2YWx1ZTogX3ZhbHVlLmluZGV4T2YoY2hpbGQuZGF0YS5uYW1lKSAhPT0gLTFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRpc2FibGVkOiBmdW5jdGlvbiBkaXNhYmxlZChfZGlzYWJsZWQpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY2hlY2tib3gvaW5kZXgnKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnNldERhdGEoe1xuICAgICAgICAgIGRpc2FibGVkOiBfZGlzYWJsZWQgfHwgY2hpbGQuZGF0YS5kaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7Il19