webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


xtag.register('x-praise', {
  content: '<div id="wrap">' + '<div id="PraiseButton"></div>' + '<div id="Thumb"></div>' + '<span class="hide" id="animation">+1</span>' + '</div>',

  methods: {
    praise: function praise() {
      var _this = this;
      f.clickAction();
      var animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function () {
        animation.className = "hide";
      }, 800);
    }
  },
  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == "Thumb" || e.target.id == "PraiseButton") {
        var t = "";
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function () {
          _this.praise();
        }, 500);
      }
    }
  }
});

/***/ })
],[2]);