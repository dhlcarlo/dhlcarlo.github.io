webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <chat-page></chat-page>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_store__ = __webpack_require__("../../../../../src/app/app.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_chat_example_data__ = __webpack_require__("../../../../../src/app/data/chat-example-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__data_chat_example_data__["a" /* ChatExampleData */])(store);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_store__["b" /* AppStore */])),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_redux__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_redux__).Store) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_message_chat_message_component__ = __webpack_require__("../../../../../src/app/chat-message/chat-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_thread_chat_thread_component__ = __webpack_require__("../../../../../src/app/chat-thread/chat-thread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_nav_bar_chat_nav_bar_component__ = __webpack_require__("../../../../../src/app/chat-nav-bar/chat-nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_threads_chat_threads_component__ = __webpack_require__("../../../../../src/app/chat-threads/chat-threads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_window_chat_window_component__ = __webpack_require__("../../../../../src/app/chat-window/chat-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_page_chat_page_component__ = __webpack_require__("../../../../../src/app/chat-page/chat-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_from_now_pipe__ = __webpack_require__("../../../../../src/app/pipes/from-now.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_store__ = __webpack_require__("../../../../../src/app/app.store.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__chat_message_chat_message_component__["a" /* ChatMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__chat_thread_chat_thread_component__["a" /* ChatThreadComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_nav_bar_chat_nav_bar_component__["a" /* ChatNavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__chat_threads_chat_threads_component__["a" /* ChatThreadsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chat_window_chat_window_component__["a" /* ChatWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_11__chat_page_chat_page_component__["a" /* ChatPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_from_now_pipe__["a" /* FromNowPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__app_store__["a" /* appStoreProviders */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_users_reducer__ = __webpack_require__("../../../../../src/app/user/users.reducer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_users_reducer__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thread_threads_reducer__ = __webpack_require__("../../../../../src/app/thread/threads.reducer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__thread_threads_reducer__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__thread_threads_reducer__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__thread_threads_reducer__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__thread_threads_reducer__["e"]; });
/* tslint:disable:typedef */





var rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    users: __WEBPACK_IMPORTED_MODULE_1__user_users_reducer__["a" /* UsersReducer */],
    threads: __WEBPACK_IMPORTED_MODULE_2__thread_threads_reducer__["a" /* ThreadsReducer */]
});
/* harmony default export */ __webpack_exports__["a"] = (rootReducer);
//# sourceMappingURL=app.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/app.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppStore; });
/* unused harmony export createAppStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appStoreProviders; });



var AppStore = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* InjectionToken */]('App.store');
var devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : function (f) { return f; };
function createAppStore() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__app_reducer__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["compose"])(devtools));
}
var appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];
//# sourceMappingURL=app.store.js.map

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"msg-container\"\r\n     [ngClass]=\"{'base-sent': !incoming, 'base-receive': incoming}\"  @enterLeave>\r\n\r\n  <div class=\"avatar\"\r\n       *ngIf=\"!incoming\">\r\n    <img src=\"{{message.author.avatarSrc}}\">\r\n  </div>\r\n\r\n  <div class=\"messages\"\r\n    [ngClass]=\"{'msg-sent': !incoming, 'msg-receive': incoming}\">\r\n    <p>{{message.text}}</p>\r\n    <p class=\"time\">{{message.sender}} • {{message.sentAt | fromNow}}</p>\r\n  </div>\r\n\r\n  <div class=\"avatar\"\r\n       *ngIf=\"incoming\">\r\n    <img src=\"{{message.author.avatarSrc}}\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat-message/chat-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_model__ = __webpack_require__("../../../../../src/app/message/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__message_message_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageComponent = (function () {
    function ChatMessageComponent() {
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        this.incoming = !this.message.author.isClient;
    };
    return ChatMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__message_message_model__["Message"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_message_model__["Message"]) === "function" && _a || Object)
], ChatMessageComponent.prototype, "message", void 0);
ChatMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-message',
        template: __webpack_require__("../../../../../src/app/chat-message/chat-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-message/chat-message.component.css")],
        animations: [
            // DEFAULT STATES
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('enterLeave', [
                // :ENTER TRANSITION
                // Transition Styles
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => *', [
                    // 'From' styles
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 0.5,
                        transform: 'translateX(-100vw)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* animate */])('1000ms ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 1,
                        transform: 'scale(1.2)'
                    }))
                ]),
            ]),
        ]
    })
], ChatMessageComponent);

var _a;
//# sourceMappingURL=chat-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-nav-bar/chat-nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default {\r\n    background-color: #FFFFFF;\r\n    border-color: #e7e7e7;\r\n}\r\n\r\n.navbar-brand img {\r\n    float: left;\r\n    top: -1px;\r\n    position: relative;\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-nav-bar/chat-nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"https://staging.verado.com/\">\r\n        <img src=\"assets/images/logos/logo.svg\"/>\r\n      </a>\r\n    </div>\r\n    <p class=\"navbar-text navbar-right\">\r\n      <button class=\"btn btn-primary\" type=\"button\">\r\n        Messages <span class=\"badge\">{{ unreadMessagesCount }}</span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat-nav-bar/chat-nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_store__ = __webpack_require__("../../../../../src/app/app.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatNavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ChatNavBarComponent = (function () {
    function ChatNavBarComponent(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function () { return _this.updateState(); });
        this.updateState();
    }
    ChatNavBarComponent.prototype.updateState = function () {
        this.unreadMessagesCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_reducer__["e" /* getUnreadMessagesCount */])(this.store.getState());
    };
    return ChatNavBarComponent;
}());
ChatNavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-nav-bar',
        template: __webpack_require__("../../../../../src/app/chat-nav-bar/chat-nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-nav-bar/chat-nav-bar.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__app_store__["b" /* AppStore */])),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2_redux__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_redux__).Store) === "function" && _a || Object])
], ChatNavBarComponent);

var _a;
//# sourceMappingURL=chat-nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <chat-nav-bar></chat-nav-bar>\r\n  <div class=\"container\" @veradoAnimation>\r\n    <chat-threads ></chat-threads>\r\n    <chat-window ></chat-window>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat-page/chat-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatPageComponent = (function () {
    function ChatPageComponent() {
    }
    ChatPageComponent.prototype.ngOnInit = function () { };
    return ChatPageComponent;
}());
ChatPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-page',
        template: __webpack_require__("../../../../../src/app/chat-page/chat-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-page/chat-page.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('veradoAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* animate */])('600ms ease', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* animate */])('200ms ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ChatPageComponent);

//# sourceMappingURL=chat-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-thread/chat-thread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-thread/chat-thread.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media conversation\">\r\n  <div class=\"pull-left\">\r\n    <img class=\"media-object avatar\"\r\n         src=\"{{thread.avatarSrc}}\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n    <h5 class=\"media-heading contact-name\">{{thread.name}}\r\n      <span *ngIf=\"selected\">&bull;</span>\r\n    </h5>\r\n    <small class=\"message-preview\">\r\n      {{thread.messages[thread.messages.length - 1].text}}\r\n    </small>\r\n  </div>\r\n  <a (click)=\"clicked($event)\" class=\"div-link\">Select</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat-thread/chat-thread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__ = __webpack_require__("../../../../../src/app/thread/thread.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_thread_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__thread_thread_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatThreadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatThreadComponent = (function () {
    function ChatThreadComponent() {
        this.onThreadSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ChatThreadComponent.prototype.ngOnInit = function () { };
    ChatThreadComponent.prototype.clicked = function (event) {
        this.onThreadSelected.emit(this.thread);
        event.preventDefault();
    };
    return ChatThreadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["Thread"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__thread_thread_model__["Thread"]) === "function" && _a || Object)
], ChatThreadComponent.prototype, "thread", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ChatThreadComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], ChatThreadComponent.prototype, "onThreadSelected", void 0);
ChatThreadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-thread',
        template: __webpack_require__("../../../../../src/app/chat-thread/chat-thread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-thread/chat-thread.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatThreadComponent);

var _a, _b;
//# sourceMappingURL=chat-thread.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-threads/chat-threads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-threads/chat-threads.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- conversations -->\r\n<div class=\"row\">\r\n  <div class=\"conversation-wrap\">\r\n    <chat-thread\r\n         *ngFor=\"let thread of threads\"\r\n         [thread]=\"thread\"\r\n         [selected]=\"thread.id === currentThreadId\"\r\n         (onThreadSelected)=\"handleThreadClicked($event)\">\r\n    </chat-thread>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat-threads/chat-threads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_store__ = __webpack_require__("../../../../../src/app/app.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__ = __webpack_require__("../../../../../src/app/thread/thread.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatThreadsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ChatThreadsComponent = (function () {
    function ChatThreadsComponent(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function () { return _this.updateState(); });
        this.updateState();
    }
    ChatThreadsComponent.prototype.updateState = function () {
        var state = this.store.getState();
        // Store the threads list
        this.threads = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_reducer__["d" /* getAllThreads */])(state);
        // We want to mark the current thread as selected,
        // so we store the currentThreadId as a value
        this.currentThreadId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_reducer__["b" /* getCurrentThread */])(state).id;
    };
    ChatThreadsComponent.prototype.handleThreadClicked = function (thread) {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["e" /* selectThread */](thread));
    };
    return ChatThreadsComponent;
}());
ChatThreadsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-threads',
        template: __webpack_require__("../../../../../src/app/chat-threads/chat-threads.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-threads/chat-threads.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__app_store__["b" /* AppStore */])),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2_redux__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_redux__).Store) === "function" && _a || Object])
], ChatThreadsComponent);

var _a;
//# sourceMappingURL=chat-threads.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window-container\" @triggerName>\r\n  <div class=\"chat-window\">\r\n    <div class=\"panel-container\">\r\n      <div class=\"panel panel-default\">\r\n\r\n        <div class=\"panel-heading top-bar\">\r\n          <div class=\"panel-title-container\">\r\n            <h3 class=\"panel-title\">\r\n              <span class=\"glyphicon glyphicon-comment\"></span>\r\n              Chat - {{currentThread.name}}\r\n            </h3>\r\n          </div>\r\n          <div class=\"panel-buttons-container\"  >\r\n            <!-- you could put minimize or close buttons here -->\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel-body msg-container-base\">\r\n          <chat-message\r\n               *ngFor=\"let message of currentThread.messages\"\r\n               [message]=\"message\">\r\n          </chat-message>\r\n        </div>\r\n\r\n        <div class=\"panel-footer\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\"\r\n                   class=\"chat-input\"\r\n                   placeholder=\"Write your message here...\"\r\n                   (keydown.enter)=\"onEnter($event)\"\r\n                   [(ngModel)]=\"draftMessage.text\" />\r\n            <span class=\"input-group-btn\">\r\n              <button class=\"btn-chat\"\r\n                 (click)=\"onEnter($event)\"\r\n                 >Send</button>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_store__ = __webpack_require__("../../../../../src/app/app.store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thread_thread_actions__ = __webpack_require__("../../../../../src/app/thread/thread.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ChatWindowComponent = (function () {
    function ChatWindowComponent(store, el) {
        var _this = this;
        this.store = store;
        this.el = el;
        store.subscribe(function () { return _this.updateState(); });
        this.updateState();
        this.draftMessage = { text: '' };
    }
    ChatWindowComponent.prototype.updateState = function () {
        var state = this.store.getState();
        this.currentThread = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__app_reducer__["b" /* getCurrentThread */])(state);
        this.currentUser = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__app_reducer__["c" /* getCurrentUser */])(state);
        this.scrollToBottom();
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        var scrollPane = this.el
            .nativeElement.querySelector('.msg-container-base');
        if (scrollPane) {
            setTimeout(function () { return scrollPane.scrollTop = scrollPane.scrollHeight; });
        }
    };
    ChatWindowComponent.prototype.sendMessage = function () {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_4__thread_thread_actions__["d" /* addMessage */](this.currentThread, {
            author: this.currentUser,
            isRead: true,
            text: this.draftMessage.text
        }));
        this.draftMessage = { text: '' };
    };
    ChatWindowComponent.prototype.onEnter = function (event) {
        this.sendMessage();
        event.preventDefault();
    };
    return ChatWindowComponent;
}());
ChatWindowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'chat-window',
        template: __webpack_require__("../../../../../src/app/chat-window/chat-window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-window/chat-window.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('triggerName', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('initialState => finalState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('6500ms ease-in')
                ])
            ])
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_store__["b" /* AppStore */])),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_redux__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_redux__).Store) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object])
], ChatWindowComponent);

var _a, _b;
//# sourceMappingURL=chat-window.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/chat-example-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_uuid__ = __webpack_require__("../../../../../src/app/util/uuid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__ = __webpack_require__("../../../../../src/app/thread/thread.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_actions__ = __webpack_require__("../../../../../src/app/user/user.actions.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = ChatExampleData;





// the person using the app is pedro
var me = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_uuid__["a" /* uuid */])(),
    isClient: true,
    name: 'Juliet',
    avatarSrc: 'assets/images/avatars/female-avatar-1.png'
};
var ladycap = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_uuid__["a" /* uuid */])(),
    name: 'Laura Barcelo',
    avatarSrc: 'assets/images/avatars/female-avatar-2.png'
};
var echo = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_uuid__["a" /* uuid */])(),
    name: 'Salesman',
    avatarSrc: 'assets/images/avatars/male-avatar-1.png'
};
var rev = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_uuid__["a" /* uuid */])(),
    name: 'Allan',
    avatarSrc: 'assets/images/avatars/female-avatar-4.png'
};
var wait = {
    id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_uuid__["a" /* uuid */])(),
    name: 'Pedro',
    avatarSrc: 'assets/images/avatars/male-avatar-2.png'
};
var tLadycap = {
    id: 'tLadycap',
    name: ladycap.name,
    avatarSrc: ladycap.avatarSrc,
    messages: []
};
var tEcho = {
    id: 'tEcho',
    name: echo.name,
    avatarSrc: echo.avatarSrc,
    messages: []
};
var tRev = {
    id: 'tRev',
    name: rev.name,
    avatarSrc: rev.avatarSrc,
    messages: []
};
var tWait = {
    id: 'tWait',
    name: wait.name,
    avatarSrc: wait.avatarSrc,
    messages: []
};
function ChatExampleData(store) {
    // set the current User
    store.dispatch(__WEBPACK_IMPORTED_MODULE_4__user_user_actions__["b" /* setCurrentUser */](me));
    // create a new thread and add messages
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["f" /* addThread */](tLadycap));
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tLadycap, {
        author: me,
        sentAt: __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(45, 'minutes').toDate(),
        text: 'Hi, can u help me?.'
    }));
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tLadycap, {
        author: ladycap,
        sentAt: __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(20, 'minutes').toDate(),
        text: 'Online shopping for Watch Deals & Special Offers from a great selection at Watches Store..'
    }));
    // create a few more threads
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["f" /* addThread */](tEcho));
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tEcho, {
        author: echo,
        sentAt: __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(1, 'minutes').toDate(),
        text: 'I\'ll buy some watches'
    }));
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["f" /* addThread */](tRev));
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tRev, {
        author: rev,
        sentAt: __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(3, 'minutes').toDate(),
        text: 'I\'ll buy 2 rolex... how much is it?'
    }));
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["f" /* addThread */](tWait));
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tWait, {
        author: wait,
        sentAt: __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(4, 'minutes').toDate(),
        text: "Snapdeal offers more than 10,000 watches for men to select from various brands at different prices.." +
            " Try sending '3'"
    }));
    // select the first thread
    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["e" /* selectThread */](tLadycap));
    var handledMessages = {};
    store.subscribe(function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app_reducer__["f" /* getAllMessages */])(store.getState())
            .filter(function (message) { return message.author.id === me.id; })
            .map(function (message) {
            if (handledMessages.hasOwnProperty(message.id)) {
                return;
            }
            handledMessages[message.id] = true;
            switch (message.thread.id) {
                case tEcho.id:
                    // echo back the same message to the user
                    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tEcho, {
                        author: echo,
                        text: message.text
                    }));
                    break;
                case tRev.id:
                    // echo back the message reveresed to the user
                    store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tRev, {
                        author: rev,
                        text: message.text.split('').reverse().join('')
                    }));
                    break;
                case tWait.id:
                    var waitTime = parseInt(message.text, 10);
                    var reply_1;
                    if (isNaN(waitTime)) {
                        waitTime = 0;
                        reply_1 = "I didn't understand " + message + ". Try sending me a number";
                    }
                    else {
                        reply_1 = "I waited " + waitTime + " seconds to send you this.";
                    }
                    setTimeout(function () {
                        store.dispatch(__WEBPACK_IMPORTED_MODULE_3__thread_thread_actions__["d" /* addMessage */](tWait, {
                            author: wait,
                            text: reply_1
                        }));
                    }, waitTime * 1000);
                    break;
                default:
                    break;
            }
        });
    });
}
//# sourceMappingURL=chat-example-data.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/from-now.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromNowPipe; });
/* unused harmony export fromNowPipeInjectables */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    return FromNowPipe;
}());
FromNowPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'fromNow'
    })
], FromNowPipe);

var fromNowPipeInjectables = [
    FromNowPipe
];
//# sourceMappingURL=from-now.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/thread/thread.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__("../../../../../src/app/util/uuid.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_THREAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return addThread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SELECT_THREAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selectThread; });

var ADD_THREAD = '[Thread] Add';
var addThread = function (thread) { return ({
    type: ADD_THREAD,
    thread: thread
}); };
var ADD_MESSAGE = '[Thread] Add Message';
var addMessage = function (thread, messageArgs) {
    var defaults = {
        id: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])(),
        sentAt: new Date(),
        isRead: false,
        thread: thread
    };
    var message = Object.assign({}, defaults, messageArgs);
    return {
        type: ADD_MESSAGE,
        thread: thread,
        message: message
    };
};
var SELECT_THREAD = '[Thread] Select';
var selectThread = function (thread) { return ({
    type: SELECT_THREAD,
    thread: thread
}); };
//# sourceMappingURL=thread.actions.js.map

/***/ }),

/***/ "../../../../../src/app/thread/thread.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=thread.model.js.map

/***/ }),

/***/ "../../../../../src/app/thread/threads.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thread_actions__ = __webpack_require__("../../../../../src/app/thread/thread.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadsReducer; });
/* unused harmony export getThreadsState */
/* unused harmony export getThreadsEntities */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllThreads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUnreadMessagesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentThread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllMessages; });


;
var initialState = {
    ids: [],
    currentThreadId: null,
    entities: {}
};
var ThreadsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        // Adds a new Thread to the list of entities
        case __WEBPACK_IMPORTED_MODULE_1__thread_actions__["a" /* ADD_THREAD */]: {
            var thread = action.thread;
            if (state.ids.includes(thread.id)) {
                return state;
            }
            return {
                ids: state.ids.concat([thread.id]),
                currentThreadId: state.currentThreadId,
                entities: Object.assign({}, state.entities, (_a = {},
                    _a[thread.id] = thread,
                    _a))
            };
        }
        // Adds a new Message to a particular Thread
        case __WEBPACK_IMPORTED_MODULE_1__thread_actions__["b" /* ADD_MESSAGE */]: {
            var thread = action.thread;
            var message = action.message;
            // special case: if the message being added is in the current thread, then
            // mark it as read
            var isRead = message.thread.id === state.currentThreadId ?
                true : message.isRead;
            var newMessage = Object.assign({}, message, { isRead: isRead });
            // grab the old thraed from entities
            var oldThread = state.entities[thread.id];
            // create a new thread which has our newMessage
            var newThread = Object.assign({}, oldThread, {
                messages: oldThread.messages.concat([newMessage])
            });
            return {
                ids: state.ids,
                currentThreadId: state.currentThreadId,
                entities: Object.assign({}, state.entities, (_b = {},
                    _b[thread.id] = newThread,
                    _b))
            };
        }
        // Select a particular thread in the UI
        case __WEBPACK_IMPORTED_MODULE_1__thread_actions__["c" /* SELECT_THREAD */]: {
            var thread = action.thread;
            var oldThread = state.entities[thread.id];
            // mark the messages as read
            var newMessages = oldThread.messages.map(function (message) { return Object.assign({}, message, { isRead: true }); });
            // give them to this new thread
            var newThread = Object.assign({}, oldThread, {
                messages: newMessages
            });
            return {
                ids: state.ids,
                currentThreadId: thread.id,
                entities: Object.assign({}, state.entities, (_c = {},
                    _c[thread.id] = newThread,
                    _c))
            };
        }
        default:
            return state;
    }
    var _a, _b, _c;
};
var getThreadsState = function (state) { return state.threads; };
var getThreadsEntities = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getThreadsState, function (state) { return state.entities; });
var getAllThreads = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getThreadsEntities, function (entities) { return Object.keys(entities)
    .map(function (threadId) { return entities[threadId]; }); });
var getUnreadMessagesCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAllThreads, function (threads) { return threads.reduce(function (unreadCount, thread) {
    thread.messages.forEach(function (message) {
        if (!message.isRead) {
            ++unreadCount;
        }
    });
    return unreadCount;
}, 0); });
// This selector emits the current thread
var getCurrentThread = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getThreadsEntities, getThreadsState, function (entities, state) {
    return entities[state.currentThreadId];
});
var getAllMessages = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAllThreads, function (threads) {
    return threads.reduce(// gather all messages
    function (messages, thread) { return messages.concat(thread.messages); }, []).sort(function (m1, m2) { return m1.sentAt - m2.sentAt; });
}); // sort them by time
//# sourceMappingURL=threads.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCurrentUser; });
/**
 * UserActions specifies action creators concerning Users
 */
var SET_CURRENT_USER = '[User] Set Current';
var setCurrentUser = function (user) { return ({
    type: SET_CURRENT_USER,
    user: user
}); };
//# sourceMappingURL=user.actions.js.map

/***/ }),

/***/ "../../../../../src/app/user/users.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_actions__ = __webpack_require__("../../../../../src/app/user/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reselect__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersReducer; });
/* unused harmony export getUsersState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentUser; });


;
var initialState = {
    currentUser: null
};
var UsersReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["a" /* SET_CURRENT_USER */]:
            var user = action.user;
            return {
                currentUser: user
            };
        default:
            return state;
    }
};
var getUsersState = function (state) { return state.users; };
var getCurrentUser = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reselect__["createSelector"])(getUsersState, function (state) { return state.currentUser; });
//# sourceMappingURL=users.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/util/uuid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uuid;
function uuid() {
    var i, random;
    var result = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }
    return result;
}
;
//# sourceMappingURL=uuid.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map