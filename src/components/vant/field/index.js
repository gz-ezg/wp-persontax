'use strict';

var _component = require('./../common/component.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
  field: true,
  classes: ['input-class'],
  props: {
    icon: String,
    label: String,
    error: Boolean,
    focus: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    disabled: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    required: Boolean,
    iconClass: String,
    clearable: Boolean,
    inputAlign: String,
    customClass: String,
    confirmType: String,
    errorMessage: String,
    placeholder: String,
    customStyle: String,
    useIconSlot: Boolean,
    useButtonSlot: Boolean,
    placeholderStyle: String,
    cursorSpacing: {
      type: Number,
      value: 50
    },
    maxlength: {
      type: Number,
      value: -1
    },
    type: {
      type: String,
      value: 'text'
    },
    border: {
      type: Boolean,
      value: true
    },
    titleWidth: {
      type: String,
      value: '90px'
    }
  },
  data: {
    showClear: false
  },
  computed: {
    inputClass: function inputClass() {
      var data = this.data;
      return this.classNames('input-class', 'van-field__input', _defineProperty({
        'van-field--error': data.error,
        'van-field__textarea': data.type === 'textarea',
        'van-field__input--disabled': data.disabled
      }, "van-field__input--" + data.inputAlign, data.inputAlign));
    }
  },
  beforeCreate: function beforeCreate() {
    this.focused = false;
  },
  methods: {
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? '' : _ref$value;

      this.$emit('input', value);
      this.$emit('change', value);
      this.setData({
        value: value,
        showClear: this.getShowClear(value)
      });
    },
    onFocus: function onFocus() {
      this.$emit('focus');
      this.focused = true;
      this.setData({
        showClear: this.getShowClear()
      });
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.$emit('blur');
      this.setData({
        showClear: this.getShowClear()
      });
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
    },
    getShowClear: function getShowClear(value) {
      value = value === undefined ? this.data.value : value;
      return this.data.clearable && this.focused && value && !this.data.readonly;
    },
    onClear: function onClear() {
      this.setData({
        value: '',
        showClear: this.getShowClear('')
      });
      this.$emit('input', '');
      this.$emit('change', '');
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.data.value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiZXJyb3IiLCJCb29sZWFuIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiaW5wdXRBbGlnbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybVR5cGUiLCJlcnJvck1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsImN1c3RvbVN0eWxlIiwidXNlSWNvblNsb3QiLCJ1c2VCdXR0b25TbG90IiwicGxhY2Vob2xkZXJTdHlsZSIsImN1cnNvclNwYWNpbmciLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtYXhsZW5ndGgiLCJib3JkZXIiLCJ0aXRsZVdpZHRoIiwiZGF0YSIsInNob3dDbGVhciIsImNvbXB1dGVkIiwiaW5wdXRDbGFzcyIsImNsYXNzTmFtZXMiLCJiZWZvcmVDcmVhdGUiLCJmb2N1c2VkIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJldmVudCIsIl9yZWYiLCJkZXRhaWwiLCJfcmVmJHZhbHVlIiwiJGVtaXQiLCJzZXREYXRhIiwiZ2V0U2hvd0NsZWFyIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xpY2tJY29uIiwidW5kZWZpbmVkIiwib25DbGVhciIsIm9uQ29uZmlybSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsYUFBRCxDQUZHO0FBR1pDLFNBQU87QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxXQUFPRCxNQUZGO0FBR0xFLFdBQU9DLE9BSEY7QUFJTEMsV0FBT0QsT0FKRjtBQUtMRSxZQUFRRixPQUxIO0FBTUxHLFlBQVFILE9BTkg7QUFPTEksY0FBVVAsTUFQTDtBQVFMUSxjQUFVTCxPQVJMO0FBU0xNLGNBQVVOLE9B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QUF1Q1YsS0FBdkMsSUFBZ0QsQ0FBQyxLQUFLSSxJQUFMLENBQVVwQixRQUFsRTtBQUNELEtBakNNO0FBa0NQd0MsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFdBQUtOLE9BQUwsQ0FBYTtBQUNYbEIsZUFBTyxFQURJO0FBRVhLLG1CQUFXLEtBQUtjLFlBQUwsQ0FBa0IsRUFBbEI7QUFGQSxPQUFiO0FBSUEsV0FBS0YsS0FBTCxDQUFXLE9BQVgsRUFBb0IsRUFBcEI7QUFDQSxXQUFLQSxLQUFMLENBQVcsUUFBWCxFQUFxQixFQUFyQjtBQUNELEtBekNNO0FBMENQUSxlQUFXLFNBQVNBLFNBQVQsR0FBcUI7QUFDOUIsV0FBS1IsS0FBTCxDQUFXLFNBQVgsRUFBc0IsS0FBS2IsSUFBTCxDQUFVSixLQUFoQztBQUNEO0FBNUNNO0FBaEVHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgZmllbGQ6IHRydWUsXG4gIGNsYXNzZXM6IFsnaW5wdXQtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBlcnJvcjogQm9vbGVhbixcbiAgICBmb2N1czogQm9vbGVhbixcbiAgICBjZW50ZXI6IEJvb2xlYW4sXG4gICAgaXNMaW5rOiBCb29sZWFuLFxuICAgIGxlZnRJY29uOiBTdHJpbmcsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgYXV0b3NpemU6IEJvb2xlYW4sXG4gICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgcmVxdWlyZWQ6IEJvb2xlYW4sXG4gICAgaWNvbkNsYXNzOiBTdHJpbmcsXG4gICAgY2xlYXJhYmxlOiBCb29sZWFuLFxuICAgIGlucHV0QWxpZ246IFN0cmluZyxcbiAgICBjdXN0b21DbGFzczogU3RyaW5nLFxuICAgIGNvbmZpcm1UeXBlOiBTdHJpbmcsXG4gICAgZXJyb3JNZXNzYWdlOiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgIHVzZUljb25TbG90OiBCb29sZWFuLFxuICAgIHVzZUJ1dHRvblNsb3Q6IEJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxuICAgIGN1cnNvclNwYWNpbmc6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiA1MFxuICAgIH0sXG4gICAgbWF4bGVuZ3RoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogLTFcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAndGV4dCdcbiAgICB9LFxuICAgIGJvcmRlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICB0aXRsZVdpZHRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJzkwcHgnXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgc2hvd0NsZWFyOiBmYWxzZVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlucHV0Q2xhc3M6IGZ1bmN0aW9uIGlucHV0Q2xhc3MoKSB7XG4gICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ2lucHV0LWNsYXNzJywgJ3Zhbi1maWVsZF9faW5wdXQnLCB7XG4gICAgICAgICd2YW4tZmllbGQtLWVycm9yJzogZGF0YS5lcnJvcixcbiAgICAgICAgJ3Zhbi1maWVsZF9fdGV4dGFyZWEnOiBkYXRhLnR5cGUgPT09ICd0ZXh0YXJlYScsXG4gICAgICAgICd2YW4tZmllbGRfX2lucHV0LS1kaXNhYmxlZCc6IGRhdGEuZGlzYWJsZWQsXG4gICAgICAgIFtcInZhbi1maWVsZF9faW5wdXQtLVwiICsgZGF0YS5pbnB1dEFsaWduXTogZGF0YS5pbnB1dEFsaWduXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JbnB1dDogZnVuY3Rpb24gb25JbnB1dChldmVudCkge1xuICAgICAgdmFyIF9yZWYgPSBldmVudC5kZXRhaWwgfHwge30sXG4gICAgICAgICAgX3JlZiR2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgICAgdmFsdWUgPSBfcmVmJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdmFsdWU7XG5cbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnKTtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKClcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoKVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkNsaWNrSWNvbjogZnVuY3Rpb24gb25DbGlja0ljb24oKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljay1pY29uJyk7XG4gICAgfSxcbiAgICBnZXRTaG93Q2xlYXI6IGZ1bmN0aW9uIGdldFNob3dDbGVhcih2YWx1ZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5kYXRhLnZhbHVlIDogdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmNsZWFyYWJsZSAmJiB0aGlzLmZvY3VzZWQgJiYgdmFsdWUgJiYgIXRoaXMuZGF0YS5yZWFkb25seTtcbiAgICB9LFxuICAgIG9uQ2xlYXI6IGZ1bmN0aW9uIG9uQ2xlYXIoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoJycpXG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgJycpO1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgJycpO1xuICAgIH0sXG4gICAgb25Db25maXJtOiBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjb25maXJtJywgdGhpcy5kYXRhLnZhbHVlKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==