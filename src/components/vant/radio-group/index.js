'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'radio',
    type: 'descendant',
    linked: function linked(target) {
      var _this$data = this.data,
          value = _this$data.value,
          disabled = _this$data.disabled;
      target.setData({
        value: value,
        disabled: disabled || target.data.disabled
      });
    }
  },
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      var children = this.getRelationNodes('../radio/index');
      children.forEach(function (child) {
        child.setData({
          value: _value
        });
      });
    },
    disabled: function disabled(_disabled) {
      var children = this.getRelationNodes('../radio/index');
      children.forEach(function (child) {
        child.setData({
          disabled: _disabled || child.data.disabled
        });
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl90aGlzJGRhdGEiLCJkYXRhIiwidmFsdWUiLCJkaXNhYmxlZCIsInNldERhdGEiLCJwcm9wcyIsIkJvb2xlYW4iLCJ3YXRjaCIsIl92YWx1ZSIsImNoaWxkcmVuIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJjaGlsZCIsIl9kaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsWUFBVTtBQUNSQyxVQUFNLE9BREU7QUFFUkMsVUFBTSxZQUZFO0FBR1JDLFlBQVEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lDLFFBQVFGLFdBQVdFLEtBRHZCO0FBQUEsVUFFSUMsV0FBV0gsV0FBV0csUUFGMUI7QUFHQUosYUFBT0ssT0FBUCxDQUFlO0FBQ2JGLGVBQU9BLEtBRE07QUFFYkMsa0JBQVVBLFlBQVlKLE9BQU9FLElBQVAsQ0FBWUU7QUFGckIsT0FBZjtBQUlEO0FBWE8sR0FGRTtBQWVaRSxTQUFPO0FBQ0xILFdBQU8sSUFERjtBQUVMQyxjQUFVRztBQUZMLEdBZks7QUFtQlpDLFNBQU87QUFDTEwsV0FBTyxTQUFTQSxLQUFULENBQWVNLE1BQWYsRUFBdUI7QUFDNUIsVUFBSUMsV0FBVyxLQUFLQyxnQkFBTCxDQUFzQixnQkFBdEIsQ0FBZjtBQUNBRCxlQUFTRSxPQUFULENBQWlCLFVBQVVDLEtBQVYsRUFBaUI7QUFDaENBLGNBQU1SLE9BQU4sQ0FBYztBQUNaRixpQkFBT007QUFESyxTQUFkO0FBR0QsT0FKRDtBQUtELEtBUkk7QUFTTEwsY0FBVSxTQUFTQSxRQUFULENBQWtCVSxTQUFsQixFQUE2QjtBQUNyQyxVQUFJSixXQUFXLEtBQUtDLGdCQUFMLENBQXNCLGdCQUF0QixDQUFmO0FBQ0FELGVBQVNFLE9BQVQsQ0FBaUIsVUFBVUMsS0FBVixFQUFpQjtBQUNoQ0EsY0FBTVIsT0FBTixDQUFjO0FBQ1pELG9CQUFVVSxhQUFhRCxNQUFNWCxJQUFOLENBQVdFO0FBRHRCLFNBQWQ7QUFHRCxPQUpEO0FBS0Q7QUFoQkk7QUFuQkssQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBmaWVsZDogdHJ1ZSxcbiAgcmVsYXRpb246IHtcbiAgICBuYW1lOiAncmFkaW8nLFxuICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICBsaW5rZWQ6IGZ1bmN0aW9uIGxpbmtlZCh0YXJnZXQpIHtcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkZGF0YS52YWx1ZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJGRhdGEuZGlzYWJsZWQ7XG4gICAgICB0YXJnZXQuc2V0RGF0YSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IHRhcmdldC5kYXRhLmRpc2FibGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW5cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3JhZGlvL2luZGV4Jyk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zZXREYXRhKHtcbiAgICAgICAgICB2YWx1ZTogX3ZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkaXNhYmxlZDogZnVuY3Rpb24gZGlzYWJsZWQoX2Rpc2FibGVkKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3JhZGlvL2luZGV4Jyk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5zZXREYXRhKHtcbiAgICAgICAgICBkaXNhYmxlZDogX2Rpc2FibGVkIHx8IGNoaWxkLmRhdGEuZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==