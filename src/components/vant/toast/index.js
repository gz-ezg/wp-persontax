'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      value: 1000
    },
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },
  methods: {
    clear: function clear() {
      this.setData({
        show: false
      });
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibG9hZGluZ1R5cGUiLCJwb3NpdGlvbiIsIm1ldGhvZHMiLCJjbGVhciIsInNldERhdGEiLCJub29wIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU87QUFDTEMsVUFBTUMsT0FERDtBQUVMQyxVQUFNRCxPQUZEO0FBR0xFLGFBQVNDLE1BSEo7QUFJTEMsaUJBQWFKLE9BSlI7QUFLTEssWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUxIO0FBU0xGLFVBQU07QUFDSkEsWUFBTUgsTUFERjtBQUVKSyxhQUFPO0FBRkgsS0FURDtBQWFMQyxpQkFBYTtBQUNYSCxZQUFNSCxNQURLO0FBRVhLLGFBQU87QUFGSSxLQWJSO0FBaUJMRSxjQUFVO0FBQ1JKLFlBQU1ILE1BREU7QUFFUkssYUFBTztBQUZDO0FBakJMLEdBREs7QUF1QlpHLFdBQVM7QUFDUEMsV0FBTyxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCLFdBQUtDLE9BQUwsQ0FBYTtBQUNYZCxjQUFNO0FBREssT0FBYjtBQUdELEtBTE07QUFNUDtBQUNBZSxVQUFNLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTtBQVBqQjtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIHByb3BzOiB7XG4gICAgc2hvdzogQm9vbGVhbixcbiAgICBtYXNrOiBCb29sZWFuLFxuICAgIG1lc3NhZ2U6IFN0cmluZyxcbiAgICBmb3JiaWRDbGljazogQm9vbGVhbixcbiAgICB6SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAxMDAwXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ3RleHQnXG4gICAgfSxcbiAgICBsb2FkaW5nVHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdjaXJjdWxhcidcbiAgICB9LFxuICAgIHBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ21pZGRsZSdcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBmb3IgcHJldmVudCB0b3VjaG1vdmVcbiAgICBub29wOiBmdW5jdGlvbiBub29wKCkge31cbiAgfVxufSk7Il19