'use strict';

var _component = require('./../common/component.js');

var _openType = require('./../mixins/open-type.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
  mixins: [_openType.openType],
  props: {
    show: Boolean,
    title: String,
    message: String,
    useSlot: Boolean,
    asyncClose: Boolean,
    showCancelButton: Boolean,
    closeOnClickOverlay: Boolean,
    confirmButtonOpenType: String,
    zIndex: {
      type: Number,
      value: 100
    },
    confirmButtonText: {
      type: String,
      value: '确认'
    },
    cancelButtonText: {
      type: String,
      value: '取消'
    },
    showConfirmButton: {
      type: Boolean,
      value: true
    },
    overlay: {
      type: Boolean,
      value: true
    }
  },
  data: {
    loading: {
      confirm: false,
      cancel: false
    }
  },
  watch: {
    show: function show(_show) {
      !_show && this.stopLoading();
    }
  },
  methods: {
    onConfirm: function onConfirm() {
      this.handleAction('confirm');
    },
    onCancel: function onCancel() {
      this.handleAction('cancel');
    },
    onClickOverlay: function onClickOverlay() {
      this.onClose('overlay');
    },
    handleAction: function handleAction(action) {
      if (this.data.asyncClose) {
        this.setData(_defineProperty({}, "loading." + action, true));
      }

      this.onClose(action);
    },
    close: function close() {
      this.setData({
        show: false
      });
    },
    stopLoading: function stopLoading() {
      this.setData({
        loading: {
          confirm: false,
          cancel: false
        }
      });
    },
    onClose: function onClose(action) {
      if (!this.data.asyncClose) {
        this.close();
      }

      this.$emit('close', action);
      this.$emit(action);
      var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];

      if (callback) {
        callback(this);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsIm9wZW5UeXBlIiwicHJvcHMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwibWVzc2FnZSIsInVzZVNsb3QiLCJhc3luY0Nsb3NlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJzaG93Q29uZmlybUJ1dHRvbiIsIm92ZXJsYXkiLCJkYXRhIiwibG9hZGluZyIsImNvbmZpcm0iLCJjYW5jZWwiLCJ3YXRjaCIsIl9zaG93Iiwic3RvcExvYWRpbmciLCJtZXRob2RzIiwib25Db25maXJtIiwiaGFuZGxlQWN0aW9uIiwib25DYW5jZWwiLCJvbkNsaWNrT3ZlcmxheSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJzZXREYXRhIiwiY2xvc2UiLCIkZW1pdCIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDQyxrQkFBRCxDQURJO0FBRVpDLFNBQU87QUFDTEMsVUFBTUMsT0FERDtBQUVMQyxXQUFPQyxNQUZGO0FBR0xDLGFBQVNELE1BSEo7QUFJTEUsYUFBU0osT0FKSjtBQUtMSyxnQkFBWUwsT0FMUDtBQU1MTSxzQkFBa0JOLE9BTmI7QUFPTE8seUJBQXFCUCxPQVBoQjtBQVFMUSwyQkFBdUJOLE1BUmxCO0FBU0xPLFlBQVE7QUFDTkMsWUFBTUMsTUFEQTtBQUVOQyxhQUFPO0FBRkQsS0FUSDtBQWFMQyx1QkFBbUI7QUFDakJILFlBQU1SLE1BRFc7QUFFakJVLGFBQU87QUFGVSxLQWJkO0FBaUJMRSxzQkFBa0I7QUFDaEJKLFlBQU1SLE1BRFU7QUFFaEJVLGFBQU87QUFGUyxLQWpCYjtBQXFCTEcsdUJBQW1CO0FBQ2pCTCxZQUFNVixPQURXO0FBRWpCWSxhQUFPO0FBRlUsS0FyQmQ7QUF5QkxJLGFBQVM7QUFDUE4sWUFBTVYsT0FEQztBQUVQWSxhQUFPO0FBRkE7QUF6QkosR0FGSztBQWdDWkssUUFBTTtBQUNKQyxhQUFTO0FBQ1BDLGVBQVMsS0FERjtBQUVQQyxjQUFRO0FBRkQ7QUFETCxHQWhDTTtBQXNDWkMsU0FBTztBQUNMdEIsVUFBTSxTQUFTQSxJQUFULENBQWN1QixLQUFkLEVBQXFCO0FBQ3pCLE9BQUNBLEtBQUQsSUFBVSxLQUFLQyxXQUFMLEVBQVY7QUFDRDtBQUhJLEdBdENLO0FBMkNaQyxXQUFTO0FBQ1BDLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixXQUFLQyxZQUFMLENBQWtCLFNBQWxCO0FBQ0QsS0FITTtBQUlQQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0QsWUFBTCxDQUFrQixRQUFsQjtBQUNELEtBTk07QUFPUEUsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsV0FBS0MsT0FBTCxDQUFhLFNBQWI7QUFDRCxLQVRNO0FBVVBILGtCQUFjLFNBQVNBLFlBQVQsQ0FBc0JJLE1BQXRCLEVBQThCO0FBQzFDLFVBQUksS0FBS2IsSUFBTCxDQUFVWixVQUFkLEVBQTBCO0FBQ3hCLGFBQUswQixPQUFMLHFCQUNHLGFBQWFELE1BRGhCLEVBQ3lCLElBRHpCO0FBR0Q7O0FBRUQsV0FBS0QsT0FBTCxDQUFhQyxNQUFiO0FBQ0QsS0FsQk07QUFtQlBFLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLRCxPQUFMLENBQWE7QUFDWGhDLGNBQU07QUFESyxPQUFiO0FBR0QsS0F2Qk07QUF3QlB3QixpQkFBYSxTQUFTQSxXQUFULEdBQXVCO0FBQ2xDLFdBQUtRLE9BQUwsQ0FBYTtBQUNYYixpQkFBUztBQUNQQyxtQkFBUyxLQURGO0FBRVBDLGtCQUFRO0FBRkQ7QUFERSxPQUFiO0FBTUQsS0EvQk07QUFnQ1BTLGFBQVMsU0FBU0EsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDaEMsVUFBSSxDQUFDLEtBQUtiLElBQUwsQ0FBVVosVUFBZixFQUEyQjtBQUN6QixhQUFLMkIsS0FBTDtBQUNEOztBQUVELFdBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CSCxNQUFwQjtBQUNBLFdBQUtHLEtBQUwsQ0FBV0gsTUFBWDtBQUNBLFVBQUlJLFdBQVcsS0FBS2pCLElBQUwsQ0FBVWEsV0FBVyxTQUFYLEdBQXVCLFdBQXZCLEdBQXFDLFVBQS9DLENBQWY7O0FBRUEsVUFBSUksUUFBSixFQUFjO0FBQ1pBLGlCQUFTLElBQVQ7QUFDRDtBQUNGO0FBNUNNO0FBM0NHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xuVmFudENvbXBvbmVudCh7XG4gIG1peGluczogW29wZW5UeXBlXSxcbiAgcHJvcHM6IHtcbiAgICBzaG93OiBCb29sZWFuLFxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgbWVzc2FnZTogU3RyaW5nLFxuICAgIHVzZVNsb3Q6IEJvb2xlYW4sXG4gICAgYXN5bmNDbG9zZTogQm9vbGVhbixcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBCb29sZWFuLFxuICAgIGNsb3NlT25DbGlja092ZXJsYXk6IEJvb2xlYW4sXG4gICAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiBTdHJpbmcsXG4gICAgekluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMTAwXG4gICAgfSxcbiAgICBjb25maXJtQnV0dG9uVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICfnoa7orqQnXG4gICAgfSxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ+WPlua2iCdcbiAgICB9LFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YToge1xuICAgIGxvYWRpbmc6IHtcbiAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgY2FuY2VsOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KF9zaG93KSB7XG4gICAgICAhX3Nob3cgJiYgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ29uZmlybTogZnVuY3Rpb24gb25Db25maXJtKCkge1xuICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oJ2NvbmZpcm0nKTtcbiAgICB9LFxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjYW5jZWwnKTtcbiAgICB9LFxuICAgIG9uQ2xpY2tPdmVybGF5OiBmdW5jdGlvbiBvbkNsaWNrT3ZlcmxheSgpIHtcbiAgICAgIHRoaXMub25DbG9zZSgnb3ZlcmxheScpO1xuICAgIH0sXG4gICAgaGFuZGxlQWN0aW9uOiBmdW5jdGlvbiBoYW5kbGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBbXCJsb2FkaW5nLlwiICsgYWN0aW9uXTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkNsb3NlKGFjdGlvbik7XG4gICAgfSxcbiAgICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzdG9wTG9hZGluZzogZnVuY3Rpb24gc3RvcExvYWRpbmcoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgY29uZmlybTogZmFsc2UsXG4gICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoYWN0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCBhY3Rpb24pO1xuICAgICAgdGhpcy4kZW1pdChhY3Rpb24pO1xuICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5kYXRhW2FjdGlvbiA9PT0gJ2NvbmZpcm0nID8gJ29uQ29uZmlybScgOiAnb25DYW5jZWwnXTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7Il19