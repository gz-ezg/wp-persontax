'use strict';

var _component = require('./../common/component.js');

var _link = require('./../mixins/link.js');

var _button = require('./../mixins/button.js');

var _openType = require('./../mixins/open-type.js');

(0, _component.VantComponent)({
  mixins: [_link.link, _button.button, _openType.openType],
  props: {
    text: String,
    info: String,
    icon: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsImxpbmsiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwidGV4dCIsIlN0cmluZyIsImluZm8iLCJpY29uIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwianVtcExpbmsiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDQyxVQUFELEVBQU9DLGNBQVAsRUFBZUMsa0JBQWYsQ0FESTtBQUVaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsVUFBTUQsTUFGRDtBQUdMRSxVQUFNRjtBQUhELEdBRks7QUFPWkcsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNBLFdBQUtDLFFBQUw7QUFDRDtBQUpNO0FBUEcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IGxpbmsgfSBmcm9tICcuLi9taXhpbnMvbGluayc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuLi9taXhpbnMvYnV0dG9uJztcbmltcG9ydCB7IG9wZW5UeXBlIH0gZnJvbSAnLi4vbWl4aW5zL29wZW4tdHlwZSc7XG5WYW50Q29tcG9uZW50KHtcbiAgbWl4aW5zOiBbbGluaywgYnV0dG9uLCBvcGVuVHlwZV0sXG4gIHByb3BzOiB7XG4gICAgdGV4dDogU3RyaW5nLFxuICAgIGluZm86IFN0cmluZyxcbiAgICBpY29uOiBTdHJpbmdcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgIHRoaXMuanVtcExpbmsoKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==