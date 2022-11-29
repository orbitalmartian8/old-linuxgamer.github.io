/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/cards";
exports.ids = ["pages/cards"];
exports.modules = {

/***/ "./pages/cards.js":
/*!************************!*\
  !*** ./pages/cards.js ***!
  \************************/
/***/ (() => {

eval("var zindex = 10;\n\"div.card\".click(function(e) {\n    e.preventDefault();\n    var isShowing = false;\n    if (this.hasClass(\"show\")) {\n        isShowing = true;\n    }\n    if (\"div.cards\".hasClass(\"showing\")) {\n        // a card is already in view\n        \"div.card.show\".removeClass(\"show\");\n        if (isShowing) {\n            // this card was showing - reset the grid\n            \"div.cards\".removeClass(\"showing\");\n        } else {\n            // this card isn't showing - get in with it\n            this.css({\n                zIndex: zindex\n            }).addClass(\"show\");\n        }\n        zindex++;\n    } else {\n        // no cards in view\n        \"div.cards\".addClass(\"showing\");\n        this.css({\n            zIndex: zindex\n        }).addClass(\"show\");\n        zindex++;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJkcy5qcz80NzhjIl0sInNvdXJjZXNDb250ZW50IjpbIiAgICB2YXIgemluZGV4ID0gMTA7XG4gICAgXG4gICAgKFwiZGl2LmNhcmRcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgICAgdmFyIGlzU2hvd2luZyA9IGZhbHNlO1xuICBcbiAgICAgIGlmICgodGhpcykuaGFzQ2xhc3MoXCJzaG93XCIpKSB7XG4gICAgICAgIGlzU2hvd2luZyA9IHRydWVcbiAgICAgIH1cbiAgXG4gICAgICBpZiAoKFwiZGl2LmNhcmRzXCIpLmhhc0NsYXNzKFwic2hvd2luZ1wiKSkge1xuICAgICAgICAvLyBhIGNhcmQgaXMgYWxyZWFkeSBpbiB2aWV3XG4gICAgICAgIChcImRpdi5jYXJkLnNob3dcIilcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJzaG93XCIpO1xuICBcbiAgICAgICAgaWYgKGlzU2hvd2luZykge1xuICAgICAgICAgIC8vIHRoaXMgY2FyZCB3YXMgc2hvd2luZyAtIHJlc2V0IHRoZSBncmlkXG4gICAgICAgICAgKFwiZGl2LmNhcmRzXCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJzaG93aW5nXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgY2FyZCBpc24ndCBzaG93aW5nIC0gZ2V0IGluIHdpdGggaXRcbiAgICAgICAgICAodGhpcylcbiAgICAgICAgICAgIC5jc3Moe3pJbmRleDogemluZGV4fSlcbiAgICAgICAgICAgIC5hZGRDbGFzcyhcInNob3dcIik7XG4gIFxuICAgICAgICB9XG4gIFxuICAgICAgICB6aW5kZXgrKztcbiAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBjYXJkcyBpbiB2aWV3XG4gICAgICAgIChcImRpdi5jYXJkc1wiKVxuICAgICAgICAgIC5hZGRDbGFzcyhcInNob3dpbmdcIik7XG4gICAgICAgICh0aGlzKVxuICAgICAgICAgIC5jc3Moe3pJbmRleDp6aW5kZXh9KVxuICAgICAgICAgIC5hZGRDbGFzcyhcInNob3dcIik7XG4gIFxuICAgICAgICB6aW5kZXgrKztcbiAgICAgIH1cbiAgICAgIFxuICAgIH0pOyJdLCJuYW1lcyI6WyJ6aW5kZXgiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzU2hvd2luZyIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjc3MiLCJ6SW5kZXgiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUksSUFBSUEsU0FBUztBQUVaLFdBQVlDLEtBQUssQ0FBQyxTQUFTQyxDQUFDLEVBQUM7SUFDNUJBLEVBQUVDLGNBQWM7SUFFaEIsSUFBSUMsWUFBWSxLQUFLO0lBRXJCLElBQUksQUFBQyxJQUFJLENBQUVDLFFBQVEsQ0FBQyxTQUFTO1FBQzNCRCxZQUFZLElBQUk7SUFDbEIsQ0FBQztJQUVELElBQUksQUFBQyxZQUFhQyxRQUFRLENBQUMsWUFBWTtRQUNyQyw0QkFBNEI7UUFDM0IsZ0JBQ0VDLFdBQVcsQ0FBQztRQUVmLElBQUlGLFdBQVc7WUFDYix5Q0FBeUM7WUFDeEMsWUFDRUUsV0FBVyxDQUFDO1FBQ2pCLE9BQU87WUFDTCwyQ0FBMkM7WUFDMUMsSUFBSSxDQUNGQyxHQUFHLENBQUM7Z0JBQUNDLFFBQVFSO1lBQU0sR0FDbkJTLFFBQVEsQ0FBQztRQUVkLENBQUM7UUFFRFQ7SUFFRixPQUFPO1FBQ0wsbUJBQW1CO1FBQ2xCLFlBQ0VTLFFBQVEsQ0FBQztRQUNaLEFBQUMsSUFBSSxDQUNGRixHQUFHLENBQUM7WUFBQ0MsUUFBT1I7UUFBTSxHQUNsQlMsUUFBUSxDQUFDO1FBRVpUO0lBQ0YsQ0FBQztBQUVIIiwiZmlsZSI6Ii4vcGFnZXMvY2FyZHMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cards.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/cards.js"));
module.exports = __webpack_exports__;

})();