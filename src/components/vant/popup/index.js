'use strict';

var _component = require('./../common/component.js');

var _transition = require('./../mixins/transition.js');

(0, _component.VantComponent)({
  mixins: [(0, _transition.transition)(false)],
  props: {
    transition: String,
    customStyle: String,
    overlayStyle: String,
    zIndex: {
      type: Number,
      value: 100
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    }
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.$emit('click-overlay');

      if (this.data.closeOnClickOverlay) {
        this.$emit('close');
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInByb3BzIiwidHJhbnNpdGlvbiIsIlN0cmluZyIsImN1c3RvbVN0eWxlIiwib3ZlcmxheVN0eWxlIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwib3ZlcmxheSIsIkJvb2xlYW4iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwicG9zaXRpb24iLCJtZXRob2RzIiwib25DbGlja092ZXJsYXkiLCIkZW1pdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDLDRCQUFXLEtBQVgsQ0FBRCxDQURJO0FBRVpDLFNBQU87QUFDTEMsZ0JBQVlDLE1BRFA7QUFFTEMsaUJBQWFELE1BRlI7QUFHTEUsa0JBQWNGLE1BSFQ7QUFJTEcsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUpIO0FBUUxDLGFBQVM7QUFDUEgsWUFBTUksT0FEQztBQUVQRixhQUFPO0FBRkEsS0FSSjtBQVlMRyx5QkFBcUI7QUFDbkJMLFlBQU1JLE9BRGE7QUFFbkJGLGFBQU87QUFGWSxLQVpoQjtBQWdCTEksY0FBVTtBQUNSTixZQUFNSixNQURFO0FBRVJNLGFBQU87QUFGQztBQWhCTCxHQUZLO0FBdUJaSyxXQUFTO0FBQ1BDLG9CQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFdBQUtDLEtBQUwsQ0FBVyxlQUFYOztBQUVBLFVBQUksS0FBS0MsSUFBTCxDQUFVTCxtQkFBZCxFQUFtQztBQUNqQyxhQUFLSSxLQUFMLENBQVcsT0FBWDtBQUNEO0FBQ0Y7QUFQTTtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJhbnNpdGlvbiB9IGZyb20gJy4uL21peGlucy90cmFuc2l0aW9uJztcblZhbnRDb21wb25lbnQoe1xuICBtaXhpbnM6IFt0cmFuc2l0aW9uKGZhbHNlKV0sXG4gIHByb3BzOiB7XG4gICAgdHJhbnNpdGlvbjogU3RyaW5nLFxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgb3ZlcmxheVN0eWxlOiBTdHJpbmcsXG4gICAgekluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMTAwXG4gICAgfSxcbiAgICBvdmVybGF5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9LFxuICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnY2VudGVyJ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2tPdmVybGF5OiBmdW5jdGlvbiBvbkNsaWNrT3ZlcmxheSgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLW92ZXJsYXknKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jbG9zZU9uQ2xpY2tPdmVybGF5KSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=