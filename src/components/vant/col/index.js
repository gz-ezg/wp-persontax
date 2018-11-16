'use strict';

var _component = require('./../common/component.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _component.VantComponent)({
  relation: {
    name: 'row',
    type: 'ancestor'
  },
  props: {
    span: Number,
    offset: Number
  },
  data: {
    style: ''
  },
  computed: {
    classes: function classes() {
      var _classNames;

      var _this$data = this.data,
          span = _this$data.span,
          offset = _this$data.offset;
      return this.classNames('custom-class', 'van-col', (_classNames = {}, _defineProperty(_classNames, "van-col--" + span, span), _defineProperty(_classNames, "van-col--offset-" + offset, offset), _classNames));
    }
  },
  methods: {
    setGutter: function setGutter(gutter) {
      var padding = gutter / 2 + "px";
      var style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';

      if (style !== this.data.style) {
        this.setData({
          style: style
        });
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJjb21wdXRlZCIsImNsYXNzZXMiLCJfdGhpcyRkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJzZXRHdXR0ZXIiLCJndXR0ZXIiLCJwYWRkaW5nIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxLQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxZQUFRRDtBQUZILEdBTEs7QUFTWkUsUUFBTTtBQUNKQyxXQUFPO0FBREgsR0FUTTtBQVlaQyxZQUFVO0FBQ1JDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUMxQixVQUFJQyxhQUFhLEtBQUtKLElBQXRCO0FBQUEsVUFDSUgsT0FBT08sV0FBV1AsSUFEdEI7QUFBQSxVQUVJRSxTQUFTSyxXQUFXTCxNQUZ4QjtBQUdBLGFBQU8sS0FBS00sVUFBTCxDQUFnQixjQUFoQixFQUFnQyxTQUFoQyxrREFDSixjQUFjUixJQURWLEVBQ2lCQSxJQURqQixnQ0FFSixxQkFBcUJFLE1BRmpCLEVBRTBCQSxNQUYxQixnQkFBUDtBQUlEO0FBVE8sR0FaRTtBQXVCWk8sV0FBUztBQUNQQyxlQUFXLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3BDLFVBQUlDLFVBQVVELFNBQVMsQ0FBVCxHQUFhLElBQTNCO0FBQ0EsVUFBSVAsUUFBUU8sU0FBUyxtQkFBbUJDLE9BQW5CLEdBQTZCLG1CQUE3QixHQUFtREEsT0FBbkQsR0FBNkQsR0FBdEUsR0FBNEUsRUFBeEY7O0FBRUEsVUFBSVIsVUFBVSxLQUFLRCxJQUFMLENBQVVDLEtBQXhCLEVBQStCO0FBQzdCLGFBQUtTLE9BQUwsQ0FBYTtBQUNYVCxpQkFBT0E7QUFESSxTQUFiO0FBR0Q7QUFDRjtBQVZNO0FBdkJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XG5WYW50Q29tcG9uZW50KHtcbiAgcmVsYXRpb246IHtcbiAgICBuYW1lOiAncm93JyxcbiAgICB0eXBlOiAnYW5jZXN0b3InXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgc3BhbjogTnVtYmVyLFxuICAgIG9mZnNldDogTnVtYmVyXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBzdHlsZTogJydcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzOiBmdW5jdGlvbiBjbGFzc2VzKCkge1xuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgc3BhbiA9IF90aGlzJGRhdGEuc3BhbixcbiAgICAgICAgICBvZmZzZXQgPSBfdGhpcyRkYXRhLm9mZnNldDtcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ2N1c3RvbS1jbGFzcycsICd2YW4tY29sJywge1xuICAgICAgICBbXCJ2YW4tY29sLS1cIiArIHNwYW5dOiBzcGFuLFxuICAgICAgICBbXCJ2YW4tY29sLS1vZmZzZXQtXCIgKyBvZmZzZXRdOiBvZmZzZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNldEd1dHRlcjogZnVuY3Rpb24gc2V0R3V0dGVyKGd1dHRlcikge1xuICAgICAgdmFyIHBhZGRpbmcgPSBndXR0ZXIgLyAyICsgXCJweFwiO1xuICAgICAgdmFyIHN0eWxlID0gZ3V0dGVyID8gXCJwYWRkaW5nLWxlZnQ6IFwiICsgcGFkZGluZyArIFwiOyBwYWRkaW5nLXJpZ2h0OiBcIiArIHBhZGRpbmcgKyBcIjtcIiA6ICcnO1xuXG4gICAgICBpZiAoc3R5bGUgIT09IHRoaXMuZGF0YS5zdHlsZSkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==