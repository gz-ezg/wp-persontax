'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    text: String,
    color: {
      type: String,
      value: '#fff'
    },
    backgroundColor: {
      type: String,
      value: '#e64340'
    },
    duration: {
      type: Number,
      value: 3000
    }
  },
  methods: {
    show: function show() {
      var _this = this;

      var duration = this.data.duration;
      clearTimeout(this.timer);
      this.setData({
        show: true
      });

      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(function () {
          _this.hide();
        }, duration);
      }
    },
    hide: function hide() {
      clearTimeout(this.timer);
      this.setData({
        show: false
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwidGV4dCIsIlN0cmluZyIsImNvbG9yIiwidHlwZSIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJtZXRob2RzIiwic2hvdyIsIl90aGlzIiwiZGF0YSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0RGF0YSIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLFdBQU87QUFDTEMsWUFBTUYsTUFERDtBQUVMRyxhQUFPO0FBRkYsS0FGRjtBQU1MQyxxQkFBaUI7QUFDZkYsWUFBTUYsTUFEUztBQUVmRyxhQUFPO0FBRlEsS0FOWjtBQVVMRSxjQUFVO0FBQ1JILFlBQU1JLE1BREU7QUFFUkgsYUFBTztBQUZDO0FBVkwsR0FESztBQWdCWkksV0FBUztBQUNQQyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFVBQUlKLFdBQVcsS0FBS0ssSUFBTCxDQUFVTCxRQUF6QjtBQUNBTSxtQkFBYSxLQUFLQyxLQUFsQjtBQUNBLFdBQUtDLE9BQUwsQ0FBYTtBQUNYTCxjQUFNO0FBREssT0FBYjs7QUFJQSxVQUFJSCxXQUFXLENBQVgsSUFBZ0JBLGFBQWFTLFFBQWpDLEVBQTJDO0FBQ3pDLGFBQUtGLEtBQUwsR0FBYUcsV0FBVyxZQUFZO0FBQ2xDTixnQkFBTU8sSUFBTjtBQUNELFNBRlksRUFFVlgsUUFGVSxDQUFiO0FBR0Q7QUFDRixLQWZNO0FBZ0JQVyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEJMLG1CQUFhLEtBQUtDLEtBQWxCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhO0FBQ1hMLGNBQU07QUFESyxPQUFiO0FBR0Q7QUFyQk07QUFoQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIHRleHQ6IFN0cmluZyxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjZmZmJ1xuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNlNjQzNDAnXG4gICAgfSxcbiAgICBkdXJhdGlvbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDMwMDBcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5kYXRhLmR1cmF0aW9uO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5oaWRlKCk7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTsiXX0=