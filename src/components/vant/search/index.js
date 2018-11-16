'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['cancel-class'],
  props: {
    focus: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    placeholderStyle: String,
    background: {
      type: String,
      value: '#f2f2f2'
    },
    maxlength: {
      type: Number,
      value: -1
    }
  },
  methods: {
    onChange: function onChange(event) {
      this.setData({
        value: event.detail
      });
      this.$emit('change', event.detail);
    },
    onCancel: function onCancel() {
      this.setData({
        value: ''
      });
      this.$emit('cancel');
      this.$emit('change', '');
    },
    onSearch: function onSearch() {
      this.$emit('search', this.data.value);
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiZm9jdXMiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsInNob3dBY3Rpb24iLCJ1c2VBY3Rpb25TbG90IiwicGxhY2Vob2xkZXIiLCJTdHJpbmciLCJwbGFjZWhvbGRlclN0eWxlIiwiYmFja2dyb3VuZCIsInR5cGUiLCJ2YWx1ZSIsIm1heGxlbmd0aCIsIk51bWJlciIsIm1ldGhvZHMiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0RGF0YSIsImRldGFpbCIsIiRlbWl0Iiwib25DYW5jZWwiLCJvblNlYXJjaCIsImRhdGEiLCJvbkZvY3VzIiwib25CbHVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsY0FBRCxDQUZHO0FBR1pDLFNBQU87QUFDTEMsV0FBT0MsT0FERjtBQUVMQyxjQUFVRCxPQUZMO0FBR0xFLGNBQVVGLE9BSEw7QUFJTEcsZ0JBQVlILE9BSlA7QUFLTEksbUJBQWVKLE9BTFY7QUFNTEssaUJBQWFDLE1BTlI7QUFPTEMsc0JBQWtCRCxNQVBiO0FBUUxFLGdCQUFZO0FBQ1ZDLFlBQU1ILE1BREk7QUFFVkksYUFBTztBQUZHLEtBUlA7QUFZTEMsZUFBVztBQUNURixZQUFNRyxNQURHO0FBRVRGLGFBQU8sQ0FBQztBQUZDO0FBWk4sR0FISztBQW9CWkcsV0FBUztBQUNQQyxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ2pDLFdBQUtDLE9BQUwsQ0FBYTtBQUNYTixlQUFPSyxNQUFNRTtBQURGLE9BQWI7QUFHQSxXQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkgsTUFBTUUsTUFBM0I7QUFDRCxLQU5NO0FBT1BFLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixXQUFLSCxPQUFMLENBQWE7QUFDWE4sZUFBTztBQURJLE9BQWI7QUFHQSxXQUFLUSxLQUFMLENBQVcsUUFBWDtBQUNBLFdBQUtBLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEVBQXJCO0FBQ0QsS0FiTTtBQWNQRSxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0YsS0FBTCxDQUFXLFFBQVgsRUFBcUIsS0FBS0csSUFBTCxDQUFVWCxLQUEvQjtBQUNELEtBaEJNO0FBaUJQWSxhQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsV0FBS0osS0FBTCxDQUFXLE9BQVg7QUFDRCxLQW5CTTtBQW9CUEssWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFdBQUtMLEtBQUwsQ0FBVyxNQUFYO0FBQ0Q7QUF0Qk07QUFwQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBmaWVsZDogdHJ1ZSxcbiAgY2xhc3NlczogWydjYW5jZWwtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICBmb2N1czogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBzaG93QWN0aW9uOiBCb29sZWFuLFxuICAgIHVzZUFjdGlvblNsb3Q6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBwbGFjZWhvbGRlclN0eWxlOiBTdHJpbmcsXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcjZjJmMmYyJ1xuICAgIH0sXG4gICAgbWF4bGVuZ3RoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogLTFcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHZhbHVlOiBldmVudC5kZXRhaWxcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZXZlbnQuZGV0YWlsKTtcbiAgICB9LFxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLiRlbWl0KCdjYW5jZWwnKTtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsICcnKTtcbiAgICB9LFxuICAgIG9uU2VhcmNoOiBmdW5jdGlvbiBvblNlYXJjaCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMuZGF0YS52YWx1ZSk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnKTtcbiAgICB9LFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgdGhpcy4kZW1pdCgnYmx1cicpO1xuICAgIH1cbiAgfVxufSk7Il19