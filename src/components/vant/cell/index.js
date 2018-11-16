'use strict';

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  classes: ['title-class', 'label-class', 'value-class'],
  mixins: [_link.link],
  props: {
    title: null,
    value: null,
    icon: String,
    label: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    border: {
      type: Boolean,
      value: true
    }
  },
  computed: {
    cellClass: function cellClass() {
      var data = this.data;
      return this.classNames('custom-class', 'van-cell', {
        'van-cell--center': data.center,
        'van-cell--required': data.required,
        'van-cell--borderless': !data.border,
        'van-cell--clickable': data.isLink || data.clickable
      });
    },
    titleStyle: function titleStyle() {
      var titleWidth = this.data.titleWidth;
      return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : '';
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event.detail);
      this.jumpLink();
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0aXRsZSIsInZhbHVlIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiY2VudGVyIiwiQm9vbGVhbiIsImlzTGluayIsInJlcXVpcmVkIiwiY2xpY2thYmxlIiwidGl0bGVXaWR0aCIsImN1c3RvbVN0eWxlIiwiYm9yZGVyIiwidHlwZSIsImNvbXB1dGVkIiwiY2VsbENsYXNzIiwiZGF0YSIsImNsYXNzTmFtZXMiLCJ0aXRsZVN0eWxlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwianVtcExpbmsiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsV0FBUyxDQUFDLGFBQUQsRUFBZ0IsYUFBaEIsRUFBK0IsYUFBL0IsQ0FERztBQUVaQyxVQUFRLENBQUNDLFVBQUQsQ0FGSTtBQUdaQyxTQUFPO0FBQ0xDLFdBQU8sSUFERjtBQUVMQyxXQUFPLElBRkY7QUFHTEMsVUFBTUMsTUFIRDtBQUlMQyxXQUFPRCxNQUpGO0FBS0xFLFlBQVFDLE9BTEg7QUFNTEMsWUFBUUQsT0FOSDtBQU9MRSxjQUFVRixPQVBMO0FBUUxHLGVBQVdILE9BUk47QUFTTEksZ0JBQVlQLE1BVFA7QUFVTFEsaUJBQWFSLE1BVlI7QUFXTFMsWUFBUTtBQUNOQyxZQUFNUCxPQURBO0FBRU5MLGFBQU87QUFGRDtBQVhILEdBSEs7QUFtQlphLFlBQVU7QUFDUkMsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFVBQUlDLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0MsVUFBaEMsRUFBNEM7QUFDakQsNEJBQW9CRCxLQUFLWCxNQUR3QjtBQUVqRCw4QkFBc0JXLEtBQUtSLFFBRnNCO0FBR2pELGdDQUF3QixDQUFDUSxLQUFLSixNQUhtQjtBQUlqRCwrQkFBdUJJLEtBQUtULE1BQUwsSUFBZVMsS0FBS1A7QUFKTSxPQUE1QyxDQUFQO0FBTUQsS0FUTztBQVVSUyxnQkFBWSxTQUFTQSxVQUFULEdBQXNCO0FBQ2hDLFVBQUlSLGFBQWEsS0FBS00sSUFBTCxDQUFVTixVQUEzQjtBQUNBLGFBQU9BLGFBQWEsZ0JBQWdCQSxVQUFoQixHQUE2QixjQUE3QixHQUE4Q0EsVUFBM0QsR0FBd0UsRUFBL0U7QUFDRDtBQWJPLEdBbkJFO0FBa0NaUyxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDL0IsV0FBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0EsV0FBS0MsUUFBTDtBQUNEO0FBSk07QUFsQ0csQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpbmsgfSBmcm9tICcuLi9taXhpbnMvbGluayc7XG5pbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgY2xhc3NlczogWyd0aXRsZS1jbGFzcycsICdsYWJlbC1jbGFzcycsICd2YWx1ZS1jbGFzcyddLFxuICBtaXhpbnM6IFtsaW5rXSxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZTogbnVsbCxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBjZW50ZXI6IEJvb2xlYW4sXG4gICAgaXNMaW5rOiBCb29sZWFuLFxuICAgIHJlcXVpcmVkOiBCb29sZWFuLFxuICAgIGNsaWNrYWJsZTogQm9vbGVhbixcbiAgICB0aXRsZVdpZHRoOiBTdHJpbmcsXG4gICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjZWxsQ2xhc3M6IGZ1bmN0aW9uIGNlbGxDbGFzcygpIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lcygnY3VzdG9tLWNsYXNzJywgJ3Zhbi1jZWxsJywge1xuICAgICAgICAndmFuLWNlbGwtLWNlbnRlcic6IGRhdGEuY2VudGVyLFxuICAgICAgICAndmFuLWNlbGwtLXJlcXVpcmVkJzogZGF0YS5yZXF1aXJlZCxcbiAgICAgICAgJ3Zhbi1jZWxsLS1ib3JkZXJsZXNzJzogIWRhdGEuYm9yZGVyLFxuICAgICAgICAndmFuLWNlbGwtLWNsaWNrYWJsZSc6IGRhdGEuaXNMaW5rIHx8IGRhdGEuY2xpY2thYmxlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRpdGxlU3R5bGU6IGZ1bmN0aW9uIHRpdGxlU3R5bGUoKSB7XG4gICAgICB2YXIgdGl0bGVXaWR0aCA9IHRoaXMuZGF0YS50aXRsZVdpZHRoO1xuICAgICAgcmV0dXJuIHRpdGxlV2lkdGggPyBcIm1heC13aWR0aDogXCIgKyB0aXRsZVdpZHRoICsgXCI7bWluLXdpZHRoOiBcIiArIHRpdGxlV2lkdGggOiAnJztcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LmRldGFpbCk7XG4gICAgICB0aGlzLmp1bXBMaW5rKCk7XG4gICAgfVxuICB9XG59KTsiXX0=