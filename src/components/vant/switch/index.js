'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['node-class'],
  props: {
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      value: '30px'
    }
  },
  watch: {
    checked: function checked(value) {
      this.setData({
        value: value
      });
    }
  },
  created: function created() {
    this.setData({
      value: this.data.checked
    });
  },
  methods: {
    onClick: function onClick() {
      if (!this.data.disabled && !this.data.loading) {
        var checked = !this.data.checked;
        this.$emit('input', checked);
        this.$emit('change', checked);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJzaXplIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwid2F0Y2giLCJzZXREYXRhIiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwib25DbGljayIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsWUFBRCxDQUZHO0FBR1pDLFNBQU87QUFDTEMsYUFBU0MsT0FESjtBQUVMQyxhQUFTRCxPQUZKO0FBR0xFLGNBQVVGLE9BSEw7QUFJTEcsVUFBTTtBQUNKQyxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSDtBQUpELEdBSEs7QUFZWkMsU0FBTztBQUNMUixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJPLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtFLE9BQUwsQ0FBYTtBQUNYRixlQUFPQTtBQURJLE9BQWI7QUFHRDtBQUxJLEdBWks7QUFtQlpHLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRCxPQUFMLENBQWE7QUFDWEYsYUFBTyxLQUFLSSxJQUFMLENBQVVYO0FBRE4sS0FBYjtBQUdELEdBdkJXO0FBd0JaWSxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixVQUFJLENBQUMsS0FBS0YsSUFBTCxDQUFVUixRQUFYLElBQXVCLENBQUMsS0FBS1EsSUFBTCxDQUFVVCxPQUF0QyxFQUErQztBQUM3QyxZQUFJRixVQUFVLENBQUMsS0FBS1csSUFBTCxDQUFVWCxPQUF6QjtBQUNBLGFBQUtjLEtBQUwsQ0FBVyxPQUFYLEVBQW9CZCxPQUFwQjtBQUNBLGFBQUtjLEtBQUwsQ0FBVyxRQUFYLEVBQXFCZCxPQUFyQjtBQUNEO0FBQ0Y7QUFQTTtBQXhCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICBjbGFzc2VzOiBbJ25vZGUtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICBjaGVja2VkOiBCb29sZWFuLFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICczMHB4J1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjaGVja2VkOiBmdW5jdGlvbiBjaGVja2VkKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdmFsdWU6IHRoaXMuZGF0YS5jaGVja2VkXG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XG4gICAgICAgIHZhciBjaGVja2VkID0gIXRoaXMuZGF0YS5jaGVja2VkO1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGNoZWNrZWQpO1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjaGVja2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==