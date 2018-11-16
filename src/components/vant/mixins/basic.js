'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = undefined;

var _classNames = require('./../common/class-names.js');

var basic = exports.basic = Behavior({
  methods: {
    classNames: _classNames.classNames,
    $emit: function $emit() {
      this.triggerEvent.apply(this, arguments);
    },
    getRect: function getRect(selector, all) {
      var _this = this;

      return new Promise(function (resolve) {
        wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwiY2xhc3NOYW1lcyIsIiRlbWl0IiwidHJpZ2dlckV2ZW50IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXRSZWN0Iiwic2VsZWN0b3IiLCJhbGwiLCJfdGhpcyIsIlByb21pc2UiLCJyZXNvbHZlIiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwiaW4iLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLElBQUlBLHdCQUFRQyxTQUFTO0FBQzFCQyxXQUFTO0FBQ1BDLGdCQUFZQSxzQkFETDtBQUVQQyxXQUFPLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsV0FBS0MsWUFBTCxDQUFrQkMsS0FBbEIsQ0FBd0IsSUFBeEIsRUFBOEJDLFNBQTlCO0FBQ0QsS0FKTTtBQUtQQyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN2QyxVQUFJQyxRQUFRLElBQVo7O0FBRUEsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUNwQ0MsV0FBR0MsbUJBQUgsR0FBeUJDLEVBQXpCLENBQTRCTCxLQUE1QixFQUFtQ0QsTUFBTSxXQUFOLEdBQW9CLFFBQXZELEVBQWlFRCxRQUFqRSxFQUEyRVEsa0JBQTNFLENBQThGLFVBQVVDLElBQVYsRUFBZ0I7QUFDNUcsY0FBSVIsT0FBT1MsTUFBTUMsT0FBTixDQUFjRixJQUFkLENBQVAsSUFBOEJBLEtBQUtHLE1BQXZDLEVBQStDO0FBQzdDUixvQkFBUUssSUFBUjtBQUNEOztBQUVELGNBQUksQ0FBQ1IsR0FBRCxJQUFRUSxJQUFaLEVBQWtCO0FBQ2hCTCxvQkFBUUssSUFBUjtBQUNEO0FBQ0YsU0FSRCxFQVFHSSxJQVJIO0FBU0QsT0FWTSxDQUFQO0FBV0Q7QUFuQk07QUFEaUIsQ0FBVCxDQUFaIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJy4uL2NvbW1vbi9jbGFzcy1uYW1lcyc7XG5leHBvcnQgdmFyIGJhc2ljID0gQmVoYXZpb3Ioe1xuICBtZXRob2RzOiB7XG4gICAgY2xhc3NOYW1lczogY2xhc3NOYW1lcyxcbiAgICAkZW1pdDogZnVuY3Rpb24gJGVtaXQoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZ2V0UmVjdDogZnVuY3Rpb24gZ2V0UmVjdChzZWxlY3RvciwgYWxsKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKF90aGlzKVthbGwgPyAnc2VsZWN0QWxsJyA6ICdzZWxlY3QnXShzZWxlY3RvcikuYm91bmRpbmdDbGllbnRSZWN0KGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgICAgaWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghYWxsICYmIHJlY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5leGVjKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==