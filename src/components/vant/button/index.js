'use strict';

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
  classes: ['loading-class'],
  mixins: [_button.button, _openType.openType],
  props: {
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'normal'
    }
  },
  computed: {
    classes: function classes() {
      var _this$data = this.data,
          type = _this$data.type,
          size = _this$data.size,
          block = _this$data.block,
          plain = _this$data.plain,
          round = _this$data.round,
          square = _this$data.square,
          loading = _this$data.loading,
          disabled = _this$data.disabled;
      return this.classNames("van-button--" + type, "van-button--" + size, {
        'van-button--block': block,
        'van-button--round': round,
        'van-button--plain': plain,
        'van-button--square': square,
        'van-button--loading': loading,
        'van-button--disabled': disabled,
        'van-button--unclickable': disabled || loading
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (!this.data.disabled && !this.data.loading) {
        this.$emit('click');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwicGxhaW4iLCJCb29sZWFuIiwiYmxvY2siLCJyb3VuZCIsInNxdWFyZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsInNpemUiLCJjb21wdXRlZCIsIl90aGlzJGRhdGEiLCJkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsV0FBUyxDQUFDLGVBQUQsQ0FERztBQUVaQyxVQUFRLENBQUNDLGNBQUQsRUFBU0Msa0JBQVQsQ0FGSTtBQUdaQyxTQUFPO0FBQ0xDLFdBQU9DLE9BREY7QUFFTEMsV0FBT0QsT0FGRjtBQUdMRSxXQUFPRixPQUhGO0FBSUxHLFlBQVFILE9BSkg7QUFLTEksYUFBU0osT0FMSjtBQU1MSyxjQUFVTCxPQU5MO0FBT0xNLFVBQU07QUFDSkEsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkgsS0FQRDtBQVdMQyxVQUFNO0FBQ0pILFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZIO0FBWEQsR0FISztBQW1CWkUsWUFBVTtBQUNSaEIsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUlpQixhQUFhLEtBQUtDLElBQXRCO0FBQUEsVUFDSU4sT0FBT0ssV0FBV0wsSUFEdEI7QUFBQSxVQUVJRyxPQUFPRSxXQUFXRixJQUZ0QjtBQUFBLFVBR0lSLFFBQVFVLFdBQVdWLEtBSHZCO0FBQUEsVUFJSUYsUUFBUVksV0FBV1osS0FKdkI7QUFBQSxVQUtJRyxRQUFRUyxXQUFXVCxLQUx2QjtBQUFBLFVBTUlDLFNBQVNRLFdBQVdSLE1BTnhCO0FBQUEsVUFPSUMsVUFBVU8sV0FBV1AsT0FQekI7QUFBQSxVQVFJQyxXQUFXTSxXQUFXTixRQVIxQjtBQVNBLGFBQU8sS0FBS1EsVUFBTCxDQUFnQixpQkFBaUJQLElBQWpDLEVBQXVDLGlCQUFpQkcsSUFBeEQsRUFBOEQ7QUFDbkUsNkJBQXFCUixLQUQ4QztBQUVuRSw2QkFBcUJDLEtBRjhDO0FBR25FLDZCQUFxQkgsS0FIOEM7QUFJbkUsOEJBQXNCSSxNQUo2QztBQUtuRSwrQkFBdUJDLE9BTDRDO0FBTW5FLGdDQUF3QkMsUUFOMkM7QUFPbkUsbUNBQTJCQSxZQUFZRDtBQVA0QixPQUE5RCxDQUFQO0FBU0Q7QUFwQk8sR0FuQkU7QUF5Q1pVLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUksQ0FBQyxLQUFLSCxJQUFMLENBQVVQLFFBQVgsSUFBdUIsQ0FBQyxLQUFLTyxJQUFMLENBQVVSLE9BQXRDLEVBQStDO0FBQzdDLGFBQUtZLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFDRjtBQUxNO0FBekNHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuLi9taXhpbnMvYnV0dG9uJztcbmltcG9ydCB7IG9wZW5UeXBlIH0gZnJvbSAnLi4vbWl4aW5zL29wZW4tdHlwZSc7XG5WYW50Q29tcG9uZW50KHtcbiAgY2xhc3NlczogWydsb2FkaW5nLWNsYXNzJ10sXG4gIG1peGluczogW2J1dHRvbiwgb3BlblR5cGVdLFxuICBwcm9wczoge1xuICAgIHBsYWluOiBCb29sZWFuLFxuICAgIGJsb2NrOiBCb29sZWFuLFxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnZGVmYXVsdCdcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnbm9ybWFsJ1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzOiBmdW5jdGlvbiBjbGFzc2VzKCkge1xuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJGRhdGEudHlwZSxcbiAgICAgICAgICBzaXplID0gX3RoaXMkZGF0YS5zaXplLFxuICAgICAgICAgIGJsb2NrID0gX3RoaXMkZGF0YS5ibG9jayxcbiAgICAgICAgICBwbGFpbiA9IF90aGlzJGRhdGEucGxhaW4sXG4gICAgICAgICAgcm91bmQgPSBfdGhpcyRkYXRhLnJvdW5kLFxuICAgICAgICAgIHNxdWFyZSA9IF90aGlzJGRhdGEuc3F1YXJlLFxuICAgICAgICAgIGxvYWRpbmcgPSBfdGhpcyRkYXRhLmxvYWRpbmcsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRkYXRhLmRpc2FibGVkO1xuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lcyhcInZhbi1idXR0b24tLVwiICsgdHlwZSwgXCJ2YW4tYnV0dG9uLS1cIiArIHNpemUsIHtcbiAgICAgICAgJ3Zhbi1idXR0b24tLWJsb2NrJzogYmxvY2ssXG4gICAgICAgICd2YW4tYnV0dG9uLS1yb3VuZCc6IHJvdW5kLFxuICAgICAgICAndmFuLWJ1dHRvbi0tcGxhaW4nOiBwbGFpbixcbiAgICAgICAgJ3Zhbi1idXR0b24tLXNxdWFyZSc6IHNxdWFyZSxcbiAgICAgICAgJ3Zhbi1idXR0b24tLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICAgICAndmFuLWJ1dHRvbi0tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ3Zhbi1idXR0b24tLXVuY2xpY2thYmxlJzogZGlzYWJsZWQgfHwgbG9hZGluZ1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19