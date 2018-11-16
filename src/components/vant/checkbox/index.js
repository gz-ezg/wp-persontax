'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'checkbox-group',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: String,
    shape: {
      type: String,
      value: 'round'
    },
    useIconSlot: Boolean
  },
  computed: {
    iconClass: function iconClass() {
      var _this$data = this.data,
          disabled = _this$data.disabled,
          value = _this$data.value,
          shape = _this$data.shape;
      return this.classNames('van-checkbox__icon', "van-checkbox__icon--" + shape, {
        'van-checkbox__icon--disabled': disabled,
        'van-checkbox__icon--checked': value
      });
    }
  },
  methods: {
    emitChange: function emitChange(value) {
      var parent = this.getRelationNodes('../checkbox-group/index')[0];

      if (parent) {
        var parentValue = parent.data.value.slice();
        var name = this.data.name;

        if (value) {
          if (parent.data.max && parentValue.length >= parent.data.max) {
            return;
          }
          /* istanbul ignore else */

          if (parentValue.indexOf(name) === -1) {
            parentValue.push(name);
            parent.$emit('input', parentValue);
            parent.$emit('change', parentValue);
          }
        } else {
          var index = parentValue.indexOf(name);
          /* istanbul ignore else */

          if (index !== -1) {
            parentValue.splice(index, 1);
            parent.$emit('input', parentValue);
            parent.$emit('change', parentValue);
          }
        }
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    toggle: function toggle() {
      if (!this.data.disabled) {
        this.emitChange(!this.data.value);
      }
    },
    onClickLabel: function onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(!this.data.value);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJzaGFwZSIsInVzZUljb25TbG90IiwiY29tcHV0ZWQiLCJpY29uQ2xhc3MiLCJfdGhpcyRkYXRhIiwiZGF0YSIsImNsYXNzTmFtZXMiLCJtZXRob2RzIiwiZW1pdENoYW5nZSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJwYXJlbnRWYWx1ZSIsInNsaWNlIiwibWF4IiwibGVuZ3RoIiwiaW5kZXhPZiIsInB1c2giLCIkZW1pdCIsImluZGV4Iiwic3BsaWNlIiwidG9nZ2xlIiwib25DbGlja0xhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sZ0JBREU7QUFFUkMsVUFBTTtBQUZFLEdBRkU7QUFNWkMsV0FBUyxDQUFDLFlBQUQsRUFBZSxhQUFmLENBTkc7QUFPWkMsU0FBTztBQUNMQyxXQUFPLElBREY7QUFFTEMsY0FBVUMsT0FGTDtBQUdMQyxtQkFBZUQsT0FIVjtBQUlMRSxtQkFBZUMsTUFKVjtBQUtMQyxXQUFPO0FBQ0xULFlBQU1RLE1BREQ7QUFFTEwsYUFBTztBQUZGLEtBTEY7QUFTTE8saUJBQWFMO0FBVFIsR0FQSztBQWtCWk0sWUFBVTtBQUNSQyxlQUFXLFNBQVNBLFNBQVQsR0FBcUI7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lWLFdBQVdTLFdBQVdULFFBRDFCO0FBQUEsVUFFSUQsUUFBUVUsV0FBV1YsS0FGdkI7QUFBQSxVQUdJTSxRQUFRSSxXQUFXSixLQUh2QjtBQUlBLGFBQU8sS0FBS00sVUFBTCxDQUFnQixvQkFBaEIsRUFBc0MseUJBQXlCTixLQUEvRCxFQUFzRTtBQUMzRSx3Q0FBZ0NMLFFBRDJDO0FBRTNFLHVDQUErQkQ7QUFGNEMsT0FBdEUsQ0FBUDtBQUlEO0FBVk8sR0FsQkU7QUE4QlphLFdBQVM7QUFDUEMsZ0JBQVksU0FBU0EsVUFBVCxDQUFvQmQsS0FBcEIsRUFBMkI7QUFDckMsVUFBSWUsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQix5QkFBdEIsRUFBaUQsQ0FBakQsQ0FBYjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixZQUFJRSxjQUFjRixPQUFPSixJQUFQLENBQVlYLEtBQVosQ0FBa0JrQixLQUFsQixFQUFsQjtBQUNBLFlBQUl0QixPQUFPLEtBQUtlLElBQUwsQ0FBVWYsSUFBckI7O0FBRUEsWUFBSUksS0FBSixFQUFXO0FBQ1QsY0FBSWUsT0FBT0osSUFBUCxDQUFZUSxHQUFaLElBQW1CRixZQUFZRyxNQUFaLElBQXNCTCxPQUFPSixJQUFQLENBQVlRLEdBQXpELEVBQThEO0FBQzVEO0FBQ0Q7QUFDRDs7QUFHQSxjQUFJRixZQUFZSSxPQUFaLENBQW9CekIsSUFBcEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQ3FCLHdCQUFZSyxJQUFaLENBQWlCMUIsSUFBakI7QUFDQW1CLG1CQUFPUSxLQUFQLENBQWEsT0FBYixFQUFzQk4sV0FBdEI7QUFDQUYsbUJBQU9RLEtBQVAsQ0FBYSxRQUFiLEVBQXVCTixXQUF2QjtBQUNEO0FBQ0YsU0FaRCxNQVlPO0FBQ0wsY0FBSU8sUUFBUVAsWUFBWUksT0FBWixDQUFvQnpCLElBQXBCLENBQVo7QUFDQTs7QUFFQSxjQUFJNEIsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEJQLHdCQUFZUSxNQUFaLENBQW1CRCxLQUFuQixFQUEwQixDQUExQjtBQUNBVCxtQkFBT1EsS0FBUCxDQUFhLE9BQWIsRUFBc0JOLFdBQXRCO0FBQ0FGLG1CQUFPUSxLQUFQLENBQWEsUUFBYixFQUF1Qk4sV0FBdkI7QUFDRDtBQUNGO0FBQ0YsT0ExQkQsTUEwQk87QUFDTCxhQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQnZCLEtBQXBCO0FBQ0EsYUFBS3VCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCdkIsS0FBckI7QUFDRDtBQUNGLEtBbENNO0FBbUNQMEIsWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFVBQUksQ0FBQyxLQUFLZixJQUFMLENBQVVWLFFBQWYsRUFBeUI7QUFDdkIsYUFBS2EsVUFBTCxDQUFnQixDQUFDLEtBQUtILElBQUwsQ0FBVVgsS0FBM0I7QUFDRDtBQUNGLEtBdkNNO0FBd0NQMkIsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJLENBQUMsS0FBS2hCLElBQUwsQ0FBVVYsUUFBWCxJQUF1QixDQUFDLEtBQUtVLElBQUwsQ0FBVVIsYUFBdEMsRUFBcUQ7QUFDbkQsYUFBS1csVUFBTCxDQUFnQixDQUFDLEtBQUtILElBQUwsQ0FBVVgsS0FBM0I7QUFDRDtBQUNGO0FBNUNNO0FBOUJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgZmllbGQ6IHRydWUsXG4gIHJlbGF0aW9uOiB7XG4gICAgbmFtZTogJ2NoZWNrYm94LWdyb3VwJyxcbiAgICB0eXBlOiAnYW5jZXN0b3InXG4gIH0sXG4gIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICdsYWJlbC1jbGFzcyddLFxuICBwcm9wczoge1xuICAgIHZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGxhYmVsRGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbGFiZWxQb3NpdGlvbjogU3RyaW5nLFxuICAgIHNoYXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ3JvdW5kJ1xuICAgIH0sXG4gICAgdXNlSWNvblNsb3Q6IEJvb2xlYW5cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpY29uQ2xhc3M6IGZ1bmN0aW9uIGljb25DbGFzcygpIHtcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZCxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJGRhdGEudmFsdWUsXG4gICAgICAgICAgc2hhcGUgPSBfdGhpcyRkYXRhLnNoYXBlO1xuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lcygndmFuLWNoZWNrYm94X19pY29uJywgXCJ2YW4tY2hlY2tib3hfX2ljb24tLVwiICsgc2hhcGUsIHtcbiAgICAgICAgJ3Zhbi1jaGVja2JveF9faWNvbi0tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ3Zhbi1jaGVja2JveF9faWNvbi0tY2hlY2tlZCc6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiBlbWl0Q2hhbmdlKHZhbHVlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC1ncm91cC9pbmRleCcpWzBdO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHZhciBwYXJlbnRWYWx1ZSA9IHBhcmVudC5kYXRhLnZhbHVlLnNsaWNlKCk7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5kYXRhLm5hbWU7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHBhcmVudC5kYXRhLm1heCAmJiBwYXJlbnRWYWx1ZS5sZW5ndGggPj0gcGFyZW50LmRhdGEubWF4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cblxuICAgICAgICAgIGlmIChwYXJlbnRWYWx1ZS5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgcGFyZW50VmFsdWUucHVzaChuYW1lKTtcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBwYXJlbnQuJGVtaXQoJ2NoYW5nZScsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gcGFyZW50VmFsdWUuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgcGFyZW50VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBwYXJlbnQuJGVtaXQoJ2NoYW5nZScsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSghdGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2tMYWJlbDogZnVuY3Rpb24gb25DbGlja0xhYmVsKCkge1xuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sYWJlbERpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZW1pdENoYW5nZSghdGhpcy5kYXRhLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==