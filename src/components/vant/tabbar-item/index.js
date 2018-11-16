'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    info: null,
    icon: String,
    dot: Boolean
  },
  relation: {
    name: 'tabbar',
    type: 'ancestor'
  },
  data: {
    active: false
  },
  methods: {
    onClick: function onClick() {
      var parent = this.getRelationNodes('../tabbar/index')[0];

      if (parent) {
        parent.onChange(this);
      }

      this.$emit('click');
    },
    setActive: function setActive(active) {
      if (this.data.active !== active) {
        this.setData({
          active: active
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImRhdGEiLCJhY3RpdmUiLCJtZXRob2RzIiwib25DbGljayIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJvbkNoYW5nZSIsIiRlbWl0Iiwic2V0QWN0aXZlIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU0sSUFERDtBQUVMQyxVQUFNQyxNQUZEO0FBR0xDLFNBQUtDO0FBSEEsR0FESztBQU1aQyxZQUFVO0FBQ1JDLFVBQU0sUUFERTtBQUVSQyxVQUFNO0FBRkUsR0FORTtBQVVaQyxRQUFNO0FBQ0pDLFlBQVE7QUFESixHQVZNO0FBYVpDLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUlDLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0IsaUJBQXRCLEVBQXlDLENBQXpDLENBQWI7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1ZBLGVBQU9FLFFBQVAsQ0FBZ0IsSUFBaEI7QUFDRDs7QUFFRCxXQUFLQyxLQUFMLENBQVcsT0FBWDtBQUNELEtBVE07QUFVUEMsZUFBVyxTQUFTQSxTQUFULENBQW1CUCxNQUFuQixFQUEyQjtBQUNwQyxVQUFJLEtBQUtELElBQUwsQ0FBVUMsTUFBVixLQUFxQkEsTUFBekIsRUFBaUM7QUFDL0IsYUFBS1EsT0FBTCxDQUFhO0FBQ1hSLGtCQUFRQTtBQURHLFNBQWI7QUFHRDtBQUNGO0FBaEJNO0FBYkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIGluZm86IG51bGwsXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGRvdDogQm9vbGVhblxuICB9LFxuICByZWxhdGlvbjoge1xuICAgIG5hbWU6ICd0YWJiYXInLFxuICAgIHR5cGU6ICdhbmNlc3RvcidcbiAgfSxcbiAgZGF0YToge1xuICAgIGFjdGl2ZTogZmFsc2VcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWJiYXIvaW5kZXgnKVswXTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQub25DaGFuZ2UodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgfSxcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuYWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==