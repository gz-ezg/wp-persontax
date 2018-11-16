'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  props: {
    title: String,
    border: Boolean,
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      value: '26px'
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
    onChange: function onChange(event) {
      this.$emit('change', event.detail);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsImJvcmRlciIsIkJvb2xlYW4iLCJjaGVja2VkIiwibG9hZGluZyIsImRpc2FibGVkIiwic2l6ZSIsInR5cGUiLCJ2YWx1ZSIsIndhdGNoIiwic2V0RGF0YSIsImNyZWF0ZWQiLCJkYXRhIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsU0FBTztBQUNMQyxXQUFPQyxNQURGO0FBRUxDLFlBQVFDLE9BRkg7QUFHTEMsYUFBU0QsT0FISjtBQUlMRSxhQUFTRixPQUpKO0FBS0xHLGNBQVVILE9BTEw7QUFNTEksVUFBTTtBQUNKQyxZQUFNUCxNQURGO0FBRUpRLGFBQU87QUFGSDtBQU5ELEdBRks7QUFhWkMsU0FBTztBQUNMTixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJLLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtFLE9BQUwsQ0FBYTtBQUNYRixlQUFPQTtBQURJLE9BQWI7QUFHRDtBQUxJLEdBYks7QUFvQlpHLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRCxPQUFMLENBQWE7QUFDWEYsYUFBTyxLQUFLSSxJQUFMLENBQVVUO0FBRE4sS0FBYjtBQUdELEdBeEJXO0FBeUJaVSxXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0Q7QUFITTtBQXpCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgYm9yZGVyOiBCb29sZWFuLFxuICAgIGNoZWNrZWQ6IEJvb2xlYW4sXG4gICAgbG9hZGluZzogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJzI2cHgnXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGNoZWNrZWQ6IGZ1bmN0aW9uIGNoZWNrZWQodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB2YWx1ZTogdGhpcy5kYXRhLmNoZWNrZWRcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZXZlbnQuZGV0YWlsKTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==