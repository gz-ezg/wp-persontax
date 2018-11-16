'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    type: 'ancestor',
    name: 'badge-group'
  },
  props: {
    info: Number,
    title: String
  },
  methods: {
    onClick: function onClick() {
      var group = this.getRelationNodes('../badge-group/index')[0];

      if (group) {
        group.setActive(this);
      }
    },
    setActive: function setActive(active) {
      this.setData({
        active: active
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImluZm8iLCJOdW1iZXIiLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZ3JvdXAiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sVUFERTtBQUVSQyxVQUFNO0FBRkUsR0FERTtBQUtaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBT0M7QUFGRixHQUxLO0FBU1pDLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUlDLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0Isc0JBQXRCLEVBQThDLENBQTlDLENBQVo7O0FBRUEsVUFBSUQsS0FBSixFQUFXO0FBQ1RBLGNBQU1FLFNBQU4sQ0FBZ0IsSUFBaEI7QUFDRDtBQUNGLEtBUE07QUFRUEEsZUFBVyxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUNwQyxXQUFLQyxPQUFMLENBQWE7QUFDWEQsZ0JBQVFBO0FBREcsT0FBYjtBQUdEO0FBWk07QUFURyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIHJlbGF0aW9uOiB7XG4gICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICBuYW1lOiAnYmFkZ2UtZ3JvdXAnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgaW5mbzogTnVtYmVyLFxuICAgIHRpdGxlOiBTdHJpbmdcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICB2YXIgZ3JvdXAgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2JhZGdlLWdyb3VwL2luZGV4JylbMF07XG5cbiAgICAgIGlmIChncm91cCkge1xuICAgICAgICBncm91cC5zZXRBY3RpdmUodGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pOyJdfQ==