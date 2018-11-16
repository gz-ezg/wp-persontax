'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'radio-group',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: String
  },
  computed: {
    iconClass: function iconClass() {
      var _this$data = this.data,
          disabled = _this$data.disabled,
          name = _this$data.name,
          value = _this$data.value;
      return this.classNames('van-radio__icon', {
        'van-radio__icon--disabled': disabled,
        'van-radio__icon--checked': !disabled && name === value,
        'van-radio__icon--check': !disabled && name !== value
      });
    }
  },
  methods: {
    emitChange: function emitChange(value) {
      var instance = this.getRelationNodes('../radio-group/index')[0] || this;
      instance.$emit('input', value);
      instance.$emit('change', value);
    },
    onChange: function onChange(event) {
      this.emitChange(event.detail.value);
    },
    onClickLabel: function onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(this.data.name);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJjb21wdXRlZCIsImljb25DbGFzcyIsIl90aGlzJGRhdGEiLCJkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJlbWl0Q2hhbmdlIiwiaW5zdGFuY2UiLCJnZXRSZWxhdGlvbk5vZGVzIiwiJGVtaXQiLCJvbkNoYW5nZSIsImV2ZW50IiwiZGV0YWlsIiwib25DbGlja0xhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sYUFERTtBQUVSQyxVQUFNO0FBRkUsR0FGRTtBQU1aQyxXQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FORztBQU9aQyxTQUFPO0FBQ0xILFVBQU0sSUFERDtBQUVMSSxXQUFPLElBRkY7QUFHTEMsY0FBVUMsT0FITDtBQUlMQyxtQkFBZUQsT0FKVjtBQUtMRSxtQkFBZUM7QUFMVixHQVBLO0FBY1pDLFlBQVU7QUFDUkMsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFVBQUlDLGFBQWEsS0FBS0MsSUFBdEI7QUFBQSxVQUNJUixXQUFXTyxXQUFXUCxRQUQxQjtBQUFBLFVBRUlMLE9BQU9ZLFdBQVdaLElBRnRCO0FBQUEsVUFHSUksUUFBUVEsV0FBV1IsS0FIdkI7QUFJQSxhQUFPLEtBQUtVLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DO0FBQ3hDLHFDQUE2QlQsUUFEVztBQUV4QyxvQ0FBNEIsQ0FBQ0EsUUFBRCxJQUFhTCxTQUFTSSxLQUZWO0FBR3hDLGtDQUEwQixDQUFDQyxRQUFELElBQWFMLFNBQVNJO0FBSFIsT0FBbkMsQ0FBUDtBQUtEO0FBWE8sR0FkRTtBQTJCWlcsV0FBUztBQUNQQyxnQkFBWSxTQUFTQSxVQUFULENBQW9CWixLQUFwQixFQUEyQjtBQUNyQyxVQUFJYSxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixFQUE4QyxDQUE5QyxLQUFvRCxJQUFuRTtBQUNBRCxlQUFTRSxLQUFULENBQWUsT0FBZixFQUF3QmYsS0FBeEI7QUFDQWEsZUFBU0UsS0FBVCxDQUFlLFFBQWYsRUFBeUJmLEtBQXpCO0FBQ0QsS0FMTTtBQU1QZ0IsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLTCxVQUFMLENBQWdCSyxNQUFNQyxNQUFOLENBQWFsQixLQUE3QjtBQUNELEtBUk07QUFTUG1CLGtCQUFjLFNBQVNBLFlBQVQsR0FBd0I7QUFDcEMsVUFBSSxDQUFDLEtBQUtWLElBQUwsQ0FBVVIsUUFBWCxJQUF1QixDQUFDLEtBQUtRLElBQUwsQ0FBVU4sYUFBdEMsRUFBcUQ7QUFDbkQsYUFBS1MsVUFBTCxDQUFnQixLQUFLSCxJQUFMLENBQVViLElBQTFCO0FBQ0Q7QUFDRjtBQWJNO0FBM0JHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgZmllbGQ6IHRydWUsXG4gIHJlbGF0aW9uOiB7XG4gICAgbmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICB0eXBlOiAnYW5jZXN0b3InXG4gIH0sXG4gIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICdsYWJlbC1jbGFzcyddLFxuICBwcm9wczoge1xuICAgIG5hbWU6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcbiAgICBsYWJlbFBvc2l0aW9uOiBTdHJpbmdcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpY29uQ2xhc3M6IGZ1bmN0aW9uIGljb25DbGFzcygpIHtcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZCxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkZGF0YS5uYW1lLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkZGF0YS52YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ3Zhbi1yYWRpb19faWNvbicsIHtcbiAgICAgICAgJ3Zhbi1yYWRpb19faWNvbi0tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ3Zhbi1yYWRpb19faWNvbi0tY2hlY2tlZCc6ICFkaXNhYmxlZCAmJiBuYW1lID09PSB2YWx1ZSxcbiAgICAgICAgJ3Zhbi1yYWRpb19faWNvbi0tY2hlY2snOiAhZGlzYWJsZWQgJiYgbmFtZSAhPT0gdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uIGVtaXRDaGFuZ2UodmFsdWUpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vcmFkaW8tZ3JvdXAvaW5kZXgnKVswXSB8fCB0aGlzO1xuICAgICAgaW5zdGFuY2UuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgaW5zdGFuY2UuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5lbWl0Q2hhbmdlKGV2ZW50LmRldGFpbC52YWx1ZSk7XG4gICAgfSxcbiAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uIG9uQ2xpY2tMYWJlbCgpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubGFiZWxEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodGhpcy5kYXRhLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19