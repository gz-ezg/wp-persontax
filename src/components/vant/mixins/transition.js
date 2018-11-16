'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var transition = exports.transition = function transition(showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      show: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      },
      duration: {
        type: Number,
        value: 300
      }
    },
    data: {
      type: '',
      inited: false,
      display: false
    },
    attached: function attached() {
      if (this.data.show) {
        this.show();
      }
    },
    methods: {
      observeShow: function observeShow(value) {
        if (value) {
          this.show();
        } else {
          this.setData({
            type: 'leave'
          });
        }
      },
      show: function show() {
        this.setData({
          inited: true,
          display: true,
          type: 'enter'
        });
      },
      onAnimationEnd: function onAnimationEnd() {
        if (!this.data.show) {
          this.setData({
            display: false
          });
        }
      }
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsInNob3dEZWZhdWx0VmFsdWUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwib2JzZXJ2ZXIiLCJkdXJhdGlvbiIsIk51bWJlciIsImRhdGEiLCJpbml0ZWQiLCJkaXNwbGF5IiwiYXR0YWNoZWQiLCJtZXRob2RzIiwib2JzZXJ2ZVNob3ciLCJzZXREYXRhIiwib25BbmltYXRpb25FbmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsa0NBQWEsU0FBU0EsVUFBVCxDQUFvQkMsZ0JBQXBCLEVBQXNDO0FBQzVELFNBQU9DLFNBQVM7QUFDZEMsZ0JBQVk7QUFDVkMsbUJBQWFDLE1BREg7QUFFVkMsWUFBTTtBQUNKQyxjQUFNQyxPQURGO0FBRUpDLGVBQU9SLGdCQUZIO0FBR0pTLGtCQUFVO0FBSE4sT0FGSTtBQU9WQyxnQkFBVTtBQUNSSixjQUFNSyxNQURFO0FBRVJILGVBQU87QUFGQztBQVBBLEtBREU7QUFhZEksVUFBTTtBQUNKTixZQUFNLEVBREY7QUFFSk8sY0FBUSxLQUZKO0FBR0pDLGVBQVM7QUFITCxLQWJRO0FBa0JkQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSSxLQUFLSCxJQUFMLENBQVVQLElBQWQsRUFBb0I7QUFDbEIsYUFBS0EsSUFBTDtBQUNEO0FBQ0YsS0F0QmE7QUF1QmRXLGFBQVM7QUFDUEMsbUJBQWEsU0FBU0EsV0FBVCxDQUFxQlQsS0FBckIsRUFBNEI7QUFDdkMsWUFBSUEsS0FBSixFQUFXO0FBQ1QsZUFBS0gsSUFBTDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUthLE9BQUwsQ0FBYTtBQUNYWixrQkFBTTtBQURLLFdBQWI7QUFHRDtBQUNGLE9BVE07QUFVUEQsWUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLGFBQUthLE9BQUwsQ0FBYTtBQUNYTCxrQkFBUSxJQURHO0FBRVhDLG1CQUFTLElBRkU7QUFHWFIsZ0JBQU07QUFISyxTQUFiO0FBS0QsT0FoQk07QUFpQlBhLHNCQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFlBQUksQ0FBQyxLQUFLUCxJQUFMLENBQVVQLElBQWYsRUFBcUI7QUFDbkIsZUFBS2EsT0FBTCxDQUFhO0FBQ1hKLHFCQUFTO0FBREUsV0FBYjtBQUdEO0FBQ0Y7QUF2Qk07QUF2QkssR0FBVCxDQUFQO0FBaURELENBbERNIiwiZmlsZSI6InRyYW5zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIHRyYW5zaXRpb24gPSBmdW5jdGlvbiB0cmFuc2l0aW9uKHNob3dEZWZhdWx0VmFsdWUpIHtcbiAgcmV0dXJuIEJlaGF2aW9yKHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgc2hvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogc2hvd0RlZmF1bHRWYWx1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlU2hvdydcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAzMDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgaW5pdGVkOiBmYWxzZSxcbiAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgfSxcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gYXR0YWNoZWQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLnNob3cpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBvYnNlcnZlU2hvdzogZnVuY3Rpb24gb2JzZXJ2ZVNob3codmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHR5cGU6ICdsZWF2ZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgdHlwZTogJ2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkFuaW1hdGlvbkVuZDogZnVuY3Rpb24gb25BbmltYXRpb25FbmQoKSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhLnNob3cpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59OyJdfQ==