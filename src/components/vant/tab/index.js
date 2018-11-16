'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'tabs',
    type: 'ancestor'
  },
  props: {
    title: String,
    disabled: Boolean
  },
  data: {
    inited: false,
    active: false
  },
  watch: {
    disabled: function disabled() {
      var parent = this.getRelationNodes('../tabs/index')[0];

      if (parent) {
        parent.updateTabs();
      }
    },
    title: function title() {
      var parent = this.getRelationNodes('../tabs/index')[0];

      if (parent) {
        parent.setLine();
        parent.updateTabs();
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwiZGF0YSIsImluaXRlZCIsImFjdGl2ZSIsIndhdGNoIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsInVwZGF0ZVRhYnMiLCJzZXRMaW5lIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxNQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxjQUFVQztBQUZMLEdBTEs7QUFTWkMsUUFBTTtBQUNKQyxZQUFRLEtBREo7QUFFSkMsWUFBUTtBQUZKLEdBVE07QUFhWkMsU0FBTztBQUNMTCxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSU0sU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixFQUF1QyxDQUF2QyxDQUFiOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWQSxlQUFPRSxVQUFQO0FBQ0Q7QUFDRixLQVBJO0FBUUxWLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixVQUFJUSxTQUFTLEtBQUtDLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDLENBQXZDLENBQWI7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1ZBLGVBQU9HLE9BQVA7QUFDQUgsZUFBT0UsVUFBUDtBQUNEO0FBQ0Y7QUFmSTtBQWJLLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgcmVsYXRpb246IHtcbiAgICBuYW1lOiAndGFicycsXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xuICB9LFxuICBwcm9wczoge1xuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW5cbiAgfSxcbiAgZGF0YToge1xuICAgIGluaXRlZDogZmFsc2UsXG4gICAgYWN0aXZlOiBmYWxzZVxuICB9LFxuICB3YXRjaDoge1xuICAgIGRpc2FibGVkOiBmdW5jdGlvbiBkaXNhYmxlZCgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYnMvaW5kZXgnKVswXTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQudXBkYXRlVGFicygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGl0bGU6IGZ1bmN0aW9uIHRpdGxlKCkge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vdGFicy9pbmRleCcpWzBdO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5zZXRMaW5lKCk7XG4gICAgICAgIHBhcmVudC51cGRhdGVUYWJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=