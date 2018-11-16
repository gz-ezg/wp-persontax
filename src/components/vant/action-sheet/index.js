'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    show: Boolean,
    title: String,
    cancelText: String,
    zIndex: {
      type: Number,
      value: 100
    },
    actions: {
      type: Array,
      value: []
    },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onSelect: function onSelect(event) {
      var index = event.currentTarget.dataset.index;
      var item = this.data.actions[index];

      if (item && !item.disabled && !item.loading) {
        this.$emit('select', item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    },
    onClose: function onClose() {
      this.$emit('close');
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsImNhbmNlbFRleHQiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJhY3Rpb25zIiwiQXJyYXkiLCJvdmVybGF5IiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsIm1ldGhvZHMiLCJvblNlbGVjdCIsImV2ZW50IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIml0ZW0iLCJkYXRhIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiJGVtaXQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxPQUREO0FBRUxDLFdBQU9DLE1BRkY7QUFHTEMsZ0JBQVlELE1BSFA7QUFJTEUsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUpIO0FBUUxDLGFBQVM7QUFDUEgsWUFBTUksS0FEQztBQUVQRixhQUFPO0FBRkEsS0FSSjtBQVlMRyxhQUFTO0FBQ1BMLFlBQU1MLE9BREM7QUFFUE8sYUFBTztBQUZBLEtBWko7QUFnQkxJLHlCQUFxQjtBQUNuQk4sWUFBTUwsT0FEYTtBQUVuQk8sYUFBTztBQUZZO0FBaEJoQixHQURLO0FBc0JaSyxXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsVUFBSUMsUUFBUUQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJGLEtBQXhDO0FBQ0EsVUFBSUcsT0FBTyxLQUFLQyxJQUFMLENBQVVYLE9BQVYsQ0FBa0JPLEtBQWxCLENBQVg7O0FBRUEsVUFBSUcsUUFBUSxDQUFDQSxLQUFLRSxRQUFkLElBQTBCLENBQUNGLEtBQUtHLE9BQXBDLEVBQTZDO0FBQzNDLGFBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSixJQUFyQjtBQUNEO0FBQ0YsS0FSTTtBQVNQSyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0QsS0FBTCxDQUFXLFFBQVg7QUFDRCxLQVhNO0FBWVBFLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLRixLQUFMLENBQVcsT0FBWDtBQUNEO0FBZE07QUF0QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcblZhbnRDb21wb25lbnQoe1xuICBwcm9wczoge1xuICAgIHNob3c6IEJvb2xlYW4sXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBjYW5jZWxUZXh0OiBTdHJpbmcsXG4gICAgekluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMTAwXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiB0cnVlXG4gICAgfSxcbiAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZXZlbnQpIHtcbiAgICAgIHZhciBpbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5kYXRhLmFjdGlvbnNbaW5kZXhdO1xuXG4gICAgICBpZiAoaXRlbSAmJiAhaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5sb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIGl0ZW0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25DYW5jZWw6IGZ1bmN0aW9uIG9uQ2FuY2VsKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XG4gICAgfSxcbiAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==