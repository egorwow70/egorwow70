(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./src/app/guards/user-list/can-leave-user-profile.guard.ts":
/*!******************************************************************!*\
  !*** ./src/app/guards/user-list/can-leave-user-profile.guard.ts ***!
  \******************************************************************/
/*! exports provided: CanLeaveUserProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveUserProfileGuard", function() { return CanLeaveUserProfileGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanLeaveUserProfileGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanLeaveUserProfileGuard.ɵfac = function CanLeaveUserProfileGuard_Factory(t) { return new (t || CanLeaveUserProfileGuard)(); };
CanLeaveUserProfileGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanLeaveUserProfileGuard, factory: CanLeaveUserProfileGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanLeaveUserProfileGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts":
/*!***********************************************************************!*\
  !*** ./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts ***!
  \***********************************************************************/
/*! exports provided: CanProceedToUserProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanProceedToUserProfileGuard", function() { return CanProceedToUserProfileGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/user-list/user-list.selectors */ "./src/app/store/user-list/user-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CanProceedToUserProfileGuard {
    constructor(_store$, _router) {
        this._store$ = _store$;
        this._router = _router;
    }
    canActivate() {
        let currentUser;
        this._store$.select(_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUser"])
            .subscribe((user) => {
            currentUser = user;
        }).unsubscribe();
        if (currentUser) {
            return true;
        }
        else {
            this._router.navigate(['/registration', 'mode', 'login-mode']);
            return false;
        }
    }
}
CanProceedToUserProfileGuard.ɵfac = function CanProceedToUserProfileGuard_Factory(t) { return new (t || CanProceedToUserProfileGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CanProceedToUserProfileGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanProceedToUserProfileGuard, factory: CanProceedToUserProfileGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanProceedToUserProfileGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-profile-donation/user-profile-donation.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/user-profile-donation/user-profile-donation.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserProfileDonationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDonationComponent", function() { return UserProfileDonationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class UserProfileDonationComponent {
    // tslint:disable-next-line: no-empty
    constructor() { }
}
UserProfileDonationComponent.ɵfac = function UserProfileDonationComponent_Factory(t) { return new (t || UserProfileDonationComponent)(); };
UserProfileDonationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileDonationComponent, selectors: [["app-user-profile-donation"]], inputs: { donation: "donation" }, decls: 27, vars: 7, consts: [[1, "-app-user-profile-donation"], [1, "-app-user-profile-donation__item"], [1, "-app-user-profile-donation__item-title"], [1, "-app-user-profile-donation__item-info"]], template: function UserProfileDonationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " tree name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " tree type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " tree number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " cost: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.tree.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.tree.type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.amount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.donation.treeDonation.amount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 5, ctx.donation.date), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n\n.-app-user-profile-donation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 20px 0px;\n  box-sizing: border-box;\n}\n\n.-app-user-profile-donation__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0px 40px;\n  box-sizing: border-box;\n  text-align: center;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n}\n\n.-app-user-profile-donation__item-title[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.-app-user-profile-donation__item-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlLWRvbmF0aW9uL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFx1c2VyLXByb2ZpbGUtZG9uYXRpb25cXHVzZXItcHJvZmlsZS1kb25hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1wcm9maWxlLWRvbmF0aW9uL3VzZXItcHJvZmlsZS1kb25hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUVBLHNCQUFBO0FDRko7O0FESUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFFQSxXQUFBO0VBRUEsaUJBQUE7RUFFQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ05SOztBRE9RO0VBQ0ksZ0JBQUE7QUNMWjs7QURPUTtFQUNJLGlCQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUtZG9uYXRpb24vdXNlci1wcm9maWxlLWRvbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcblxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDBweCA0MHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaW5mbyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb25fX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGUtZG9uYXRpb25fX2l0ZW0tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLi1hcHAtdXNlci1wcm9maWxlLWRvbmF0aW9uX19pdGVtLWluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileDonationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile-donation',
                templateUrl: './user-profile-donation.component.html',
                styleUrls: ['./user-profile-donation.component.scss']
            }]
    }], function () { return []; }, { donation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/user-profile/user-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/user-list/can-proceed-to-user-profile.guard */ "./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts");
/* harmony import */ var _guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guards/user-list/can-leave-user-profile.guard */ "./src/app/guards/user-list/can-leave-user-profile.guard.ts");







const routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
        canActivate: [_guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_3__["CanProceedToUserProfileGuard"]],
        canDeactivate: [_guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_4__["CanLeaveUserProfileGuard"]]
    }
];
class UserProfileRoutingModule {
}
UserProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserProfileRoutingModule });
UserProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UserProfileRoutingModule_Factory(t) { return new (t || UserProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/user-list/user-list.selectors */ "./src/app/store/user-list/user-list.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/donation-list/donation-list.selectors */ "./src/app/store/donation-list/donation-list.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/user-list/user-list.facade */ "./src/app/store/user-list/user-list.facade.ts");
/* harmony import */ var _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/donation-list/donation-list.facade */ "./src/app/store/donation-list/donation-list.facade.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-profile-donation/user-profile-donation.component */ "./src/app/user-profile-donation/user-profile-donation.component.ts");














function UserProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} }
function UserProfileComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function UserProfileComponent_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.user.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " no image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_1_div_10_app_user_profile_donation_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-profile-donation", 40);
} if (rf & 2) {
    const donation_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("donation", donation_r11);
} }
function UserProfileComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_div_1_div_10_app_user_profile_donation_1_Template, 1, 1, "app-user-profile-donation", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.userDonationList);
} }
function UserProfileComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " you have not donated ever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " start your donation history by clicking on the button below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_div_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.startDonation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__start-donation_image-mode", ctx_r8.imageMode);
} }
function UserProfileComponent_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Country: ", ctx_r9.user.country.name, " ");
} }
function UserProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleImageMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfileComponent_div_1_div_2_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserProfileComponent_div_1_ng_template_3_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProfileComponent_div_1_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " donations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserProfileComponent_div_1_div_10_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserProfileComponent_div_1_div_11_Template, 7, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserProfileComponent_div_1_div_25_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleFillMedicalForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_1_Template_form_ngSubmit_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.applyInsurance(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.toggleFillMedicalForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "medical insurance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " points number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "get");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Enter the url of any picture, which you want to see in your profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_div_1_Template_form_ngSubmit_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.changeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Change ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_div_1_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.toggleImageMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.user.profileImage ? _r3 : _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__donation-list_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isInitedUserDonationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isInitedUserDonationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list_medical-mode", ctx_r1.medicalFormMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.surName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Age: ", ctx_r1.user.age, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Join our project: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 43, ctx_r1.user.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.user.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Medical Points: ", ctx_r1.user.medicalPoints, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.user.medicalPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form_medical-mode", ctx_r1.medicalFormMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.myFormApplyInsurance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form-item-label_invisible", ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form-warning_item-invalid", ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].touched && ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__info-list-form-warning_message-invalid", ctx_r1.myFormApplyInsurance.controls["userMessage"].touched && ctx_r1.myFormApplyInsurance.controls["userMessage"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.myFormApplyInsurance.controls["userMedicalPoints"].invalid || ctx_r1.myFormApplyInsurance.controls["userMessage"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-title_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-image_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.myFormNewImage.controls["userNewImage"].value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-form_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.myFormNewImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-input_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-input-line_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-switch-button_image-mode", ctx_r1.imageMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("-app-user-profile__change-return-button_image-mode", ctx_r1.imageMode);
} }
class UserProfileComponent {
    constructor(_store$, _router, _facadeUserListService, _facadeDonationListService) {
        this._store$ = _store$;
        this._router = _router;
        this._facadeUserListService = _facadeUserListService;
        this._facadeDonationListService = _facadeDonationListService;
        this._destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.initImageForm();
        this.initApplyInsuranceForm();
    }
    initImageForm() {
        this.myFormNewImage = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userNewImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    initApplyInsuranceForm() {
        this.myFormApplyInsurance = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            userMedicalPoints: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.medicalPointsValidator]),
            userMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    medicalPointsValidator(control) {
        const medicalPointsInputControlName = 'userMedicalPoints';
        if (!isNaN(control.value) && control.value > 0 && Number(control.value) <= UserProfileComponent.currentUserMedicalPoints) {
            return null;
        }
        else {
            return { medicalPointsInputControlName: true };
        }
    }
    isAnyValuesEnteredInMedicalInsuranceForm() {
        if (Boolean(this.myFormApplyInsurance.controls.userMedicalPoints.value)
            || Boolean(this.myFormApplyInsurance.controls.userMessage.value)) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this._store$.select(_store_user_list_user_list_selectors__WEBPACK_IMPORTED_MODULE_1__["selectUser"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((user) => {
            if (Boolean(user)) {
                UserProfileComponent.currentUserMedicalPoints = user.clone().medicalPoints;
                this.user = user;
                this._facadeDonationListService.initUserDonationList(this.user.id);
            }
        });
        this._store$.select(_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_5__["selectUserDonationList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((userDonationList) => {
            this.userDonationList = userDonationList;
            this._facadeDonationListService.initUserDonationListSuccess();
        });
        this._store$.select(_store_donation_list_donation_list_selectors__WEBPACK_IMPORTED_MODULE_5__["selectIsInitedUserDonationList"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroySubject$)).subscribe((isInitedUserDonationList) => {
            this.isInitedUserDonationList = isInitedUserDonationList;
        });
    }
    ngOnDestroy() {
        this._destroySubject$.next(true);
        this._destroySubject$.complete();
    }
    toggleImageMode() {
        this.imageMode = !this.imageMode;
    }
    changeImage() {
        const newImage = this.myFormNewImage.controls.userNewImage.value;
        this._facadeUserListService.changeCurrentUserImage(newImage);
        this.toggleImageMode();
    }
    startDonation() {
        this._router.navigate(['/donation']);
    }
    toggleFillMedicalForm() {
        this.medicalFormMode = !this.medicalFormMode;
    }
    applyInsurance() {
        this._isGettedMedicalInsurance = true;
        if (this.myFormApplyInsurance.invalid) {
            this.myFormApplyInsurance.controls.userMedicalPoints.markAsTouched();
            this.myFormApplyInsurance.controls.userMessage.markAsTouched();
            return;
        }
        const numberOfGetMedicalPoints = Number(this.myFormApplyInsurance.controls.userMedicalPoints.value);
        this._facadeUserListService.pickUpPointsFromUser(this.user.id, numberOfGetMedicalPoints);
        if (this.medicalFormMode) {
            this.toggleFillMedicalForm();
        }
        this.initApplyInsuranceForm();
    }
    canDeactivate() {
        const deactivateQuestion = 'You filled in the form fields but did not get insurance. Are you sure that you want to go from this page?';
        return (!this._isGettedMedicalInsurance && this.isAnyValuesEnteredInMedicalInsuranceForm())
            ? confirm(deactivateQuestion)
            : true;
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceDonationList"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 2, vars: 2, consts: [["class", "-app-user-profile", 4, "ngIf"], [1, "-app-user-profile"], [1, "-app-user-profile__image-container", 3, "click"], [4, "ngTemplateOutlet"], ["profileImage", ""], ["defaultProfileImage", ""], [1, "-app-user-profile__donation-list"], [1, "-app-user-profile__donation-list-title"], ["class", "-app-user-profile__donation-list-wrapper", 4, "ngIf"], ["class", "-app-user-profile__start-donation", 3, "-app-user-profile__start-donation_image-mode", 4, "ngIf"], [1, "-app-user-profile__info-list-wrapper"], [1, "-app-user-profile__info-list"], [1, "-app-user-profile__info-item"], ["class", "-app-user-profile__info-item", 4, "ngIf"], ["title", "1 medical point = 1 donation $", 1, "-app-user-profile__info-item"], ["title", "get medical insurance", 1, "-app-user-profile__info-list-button", 3, "disabled", "click"], [1, "-app-user-profile__info-list-form", "-app-user-profile__info-list-form_medical", 3, "formGroup", "ngSubmit"], [1, "-app-user-profile__info-list-form-back", 3, "click"], [1, "-app-user-profile__info-list-form-title"], [1, "-app-user-profile__info-list-form-item"], ["name", "medicalPoints", "type", "text", "formControlName", "userMedicalPoints", "autocomplete", "off", 1, "-app-user-profile__info-list-form-item-input", "-app-user-profile__info-list-form-item-input_name"], [1, "-app-user-profile__info-list-form-item-line"], [1, "-app-user-profile__info-list-form-item-label"], ["title", "Enter only values \u200B\u200Bwithin your medical points", 1, "-app-user-profile__info-list-form-warning", "-app-user-profile__info-list-form-warning_item"], [1, "-app-user-profile__info-list-form-message"], ["placeholder", "Write your message", "formControlName", "userMessage", "title", "Enter only values \u200B\u200Bwithin your medical points", 1, "-app-user-profile__info-list-form-message-textarea"], ["title", "Enter some message to us", 1, "-app-user-profile__info-list-form-warning", "-app-user-profile__info-list-form-warning_message"], ["type", "submit", 1, "-app-user-profile__info-list-form-button", 3, "disabled"], [1, "-app-user-profile__change"], [1, "-app-user-profile__change-title"], [1, "-app-user-profile__change-image", 3, "src"], [1, "-app-user-profile__change-form", 3, "formGroup", "ngSubmit"], ["type", "text", "name", "imageUrl", "placeholder", "Enter url of the picture", "formControlName", "userNewImage", "autocomplete", "off", 1, "-app-user-profile__change-input"], [1, "-app-user-profile__change-input-line"], ["type", "submit", 1, "-app-user-profile__change-switch-button"], [1, "-app-user-profile__change-return-button", 3, "click"], [1, "-app-user-profile__image", 3, "src"], [1, "-app-user-profile__image", "-app-user-profile__image_default"], [1, "-app-user-profile__donation-list-wrapper"], ["class", "-app-user-profile__current-donation", 3, "donation", 4, "ngFor", "ngForOf"], [1, "-app-user-profile__current-donation", 3, "donation"], [1, "-app-user-profile__start-donation"], [1, "-app-user-profile__start-donation-title"], [1, "-app-user-profile__start-donation-sub-title"], [1, "-app-user-profile__start-donation-button", 3, "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_div_1_Template, 54, 45, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileDonationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n  background-image: url('user-profile-bg.jpg');\n  background-size: cover;\n}\n.-app-user-profile[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 60%;\n  height: 75%;\n  border: 2px solid #d2ffd0;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #d2ffd0;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  left: 25%;\n  top: 0%;\n  transform: translate(-50%, -50%);\n  width: 200px;\n  height: 200px;\n  cursor: pointer;\n  overflow: hidden;\n  border: 2px solid #d2ffd0;\n  border-radius: 50%;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  transition: 0.2s;\n  width: 0%;\n  height: 0%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n  height: 100%;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.-app-user-profile__image-container[_ngcontent-%COMP%]::after {\n  content: \"\uF067\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.4s;\n  transition-delay: 0.1s;\n  opacity: 0;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-weight: 900;\n  font-size: 30px;\n}\n.-app-user-profile__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.-app-user-profile__image_default[_ngcontent-%COMP%] {\n  background-image: url('default-user-profile-image.jpg');\n  background-size: cover;\n}\n.-app-user-profile__info-list-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n.-app-user-profile__info-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-user-profile__info-list_medical-mode.-app-user-profile__info-list[_ngcontent-%COMP%] {\n  left: 0%;\n  transform: translate(-100%, -50%);\n}\n.-app-user-profile__info-list-form[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 100%;\n  transform: translate(0%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n}\n.-app-user-profile__info-list-form_medical-mode.-app-user-profile__info-list-form[_ngcontent-%COMP%] {\n  left: 0%;\n  transform: translate(0%, -50%);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-form-warning_item-invalid[_ngcontent-%COMP%], .-app-user-profile__info-list-form-warning_message-invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-user-profile__info-list-form-warning_item[_ngcontent-%COMP%] {\n  top: 50%;\n  right: 10%;\n  transform: translate(0%, -50%);\n}\n.-app-user-profile__info-list-form-warning_message[_ngcontent-%COMP%] {\n  top: 2.5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-form-warning[_ngcontent-%COMP%]::before {\n  content: \"\uF12A\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #f8b2a6;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-title[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  width: 100%;\n  text-align: center;\n  padding: 20px 30px;\n  font-size: 28px;\n}\n.-app-user-profile__info-list-form-button[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 15px 50px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  background: transparent;\n  color: #d2ffd0;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-size: 20px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: default;\n}\n.-app-user-profile__info-list-form-button[disabled][_ngcontent-%COMP%]:hover {\n  background: transparent;\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-button[_ngcontent-%COMP%]:hover {\n  background-color: #d2ffd0;\n  color: black;\n}\n.-app-user-profile__info-list-form-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 60px;\n}\n.-app-user-profile__info-list-form-item-input[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  padding: 0px 100px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n}\n.-app-user-profile__info-list-form-item-input[_ngcontent-%COMP%]:focus    + .-app-user-profile__info-list-form-item-line[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.-app-user-profile__info-list-form-item-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  text-align: center;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-form-item-label_invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-user-profile__info-list-form-item-line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  width: 80%;\n  height: 2px;\n  transition: 0.3s;\n  background-color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  margin: 30px 0px;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n  resize: vertical;\n  padding: 20px 60px;\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid #d2ffd0;\n  background-color: transparent;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-message-textarea[_ngcontent-%COMP%]::placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 9000;\n  top: 5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-form-back[_ngcontent-%COMP%]::before {\n  content: \"\uF00D\";\n  position: absolute;\n  z-index: 9001;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #d2ffd0;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  right: 5%;\n  transform: translate(0%, 0%);\n  width: 50px;\n  height: 50px;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background: none;\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n}\n.-app-user-profile__info-list-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.-app-user-profile__info-list-button[_ngcontent-%COMP%]::before {\n  content: \"\uF469\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #d2ffd0;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 0px 30px;\n  padding-left: 60px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  text-align: left;\n  font-size: 24px;\n  font-weight: 600;\n}\n.-app-user-profile__donation-list[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  border-right: 2px solid #d2ffd0;\n}\n.-app-user-profile__donation-list_image-mode[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -1;\n}\n.-app-user-profile__donation-list-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  padding: 20px 30px;\n  padding-top: 120px;\n  box-sizing: border-box;\n  border-bottom: 2px solid #d2ffd0;\n  color: #d2ffd0;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n  font-weight: 600;\n  font-size: 20px;\n}\n.-app-user-profile__donation-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  overflow: auto;\n}\n.-app-user-profile__change[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  left: 25%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 50%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 0;\n  box-sizing: border-box;\n  border-right: 2px solid #d2ffd0;\n  background-color: transparent;\n}\n.-app-user-profile__change_image-mode[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.-app-user-profile__change-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: 5px;\n  padding-top: 120px;\n  text-align: center;\n}\n.-app-user-profile__change-image[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  margin: 20px 0px;\n  border: 2px solid #d2ffd0;\n}\n.-app-user-profile__change-title[_ngcontent-%COMP%], .-app-user-profile__change-image[_ngcontent-%COMP%], .-app-user-profile__change-switch-button[_ngcontent-%COMP%], .-app-user-profile__change-return-button[_ngcontent-%COMP%], .-app-user-profile__change-input[_ngcontent-%COMP%], .-app-user-profile__change-form[_ngcontent-%COMP%], .-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: 0.2s;\n  opacity: 0;\n}\n.-app-user-profile__change-title_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-image_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-switch-button_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-return-button_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-input_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-form_image-mode[_ngcontent-%COMP%], .-app-user-profile__change-input-line_image-mode[_ngcontent-%COMP%] {\n  transition-delay: 0.5s;\n  opacity: 1;\n}\n.-app-user-profile__change-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70%;\n  height: 40px;\n  margin: 10px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  color: white;\n  font-size: 16px;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]::placeholder {\n  color: #d2ffd0;\n}\n.-app-user-profile__change-input[_ngcontent-%COMP%]:focus    + .-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  width: 85%;\n}\n.-app-user-profile__change-input-line[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 2px;\n  transition: 0.2s;\n  background-color: #d2ffd0;\n}\n.-app-user-profile__change-switch-button[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  margin-top: 30px;\n  padding: 15px 40px;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  border-radius: 30px;\n  background-color: transparent;\n  color: #d2ffd0;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.-app-user-profile__change-return-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.-app-user-profile__change-return-button[_ngcontent-%COMP%]::before {\n  content: \"\uF2EA\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-family: \"Font Awesome 5 free\", \"Font Awesome 5 brands\";\n  font-size: 20px;\n  font-weight: 900;\n}\n.-app-user-profile__current-donation[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 2px solid #d2ffd0;\n}\n.-app-user-profile__start-donation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: 0.3s;\n  opacity: 1;\n  color: #d2ffd0;\n  text-align: center;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.-app-user-profile__start-donation_image-mode[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.-app-user-profile__start-donation-title[_ngcontent-%COMP%], .-app-user-profile__start-donation-sub-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  box-sizing: border-box;\n}\n.-app-user-profile__start-donation-title[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  font-size: 22px;\n}\n.-app-user-profile__start-donation-sub-title[_ngcontent-%COMP%] {\n  padding: 20px 20px;\n  font-size: 16px;\n}\n.-app-user-profile__start-donation-button[_ngcontent-%COMP%] {\n  margin: 20px;\n  padding: 20px 65px;\n  transition: 0.2s;\n  cursor: pointer;\n  outline: none;\n  border: 2px solid #d2ffd0;\n  border-radius: 35px;\n  background: transparent;\n  color: #d2ffd0;\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: 2px;\n}\n.-app-user-profile__start-donation-button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(1.3);\n          filter: brightness(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1wcm9maWxlL0Q6XFxFUEFNIHRyYWluaW5nXFxzYXZlLW91ci1wbGFuZXRcXHNhdmUtb3VyLXBsYW5ldC1wcm9qZWN0L3NyY1xcYXBwXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBRUEsNENBQUE7RUFDQSxzQkFBQTtBREFKO0FDR0E7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsb0NBQUE7RUFDQSxjQUFBO0FESko7QUNLSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUROUjtBQ09RO0VBQ0ksV0FBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUVBLGdCQUFBO0VBRUEsU0FBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUVBLG9DQUFBO0FEVlo7QUNhWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEWGhCO0FDYVk7RUFDSSxVQUFBO0FEWGhCO0FDY1E7RUFDSSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFFQSwyREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGZaO0FDa0JJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURoQlI7QUNp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QSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUQ3SVo7QUM4SVk7RUFDSSwrQkFBQTtVQUFBLHVCQUFBO0FENUloQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy91c2VyLWxpc3QvdXNlci1wcm9maWxlLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLi1hcHAtdXNlci1wcm9maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNzUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDkwMDA7XG4gIGxlZnQ6IDI1JTtcbiAgdG9wOiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2ltYWdlLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW1hZ2UtY29udGFpbmVyOmhvdmVyOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbWFnZS1jb250YWluZXI6aG92ZXI6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW1hZ2UtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74GnXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2ltYWdlX2RlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItbGlzdC9kZWZhdWx0LXVzZXItcHJvZmlsZS1pbWFnZS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3RfbWVkaWNhbC1tb2RlLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3Qge1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtX21lZGljYWwtbW9kZS4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0ge1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5MDAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0td2FybmluZ19pdGVtLWludmFsaWQsIC4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0td2FybmluZ19tZXNzYWdlLWludmFsaWQge1xuICBvcGFjaXR5OiAxO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nX2l0ZW0ge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nX21lc3NhZ2Uge1xuICB0b3A6IDIuNSU7XG4gIHJpZ2h0OiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0td2FybmluZzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS13YXJuaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+EqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2Y4YjJhNjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLXRpdGxlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWJ1dHRvbltkaXNhYmxlZF06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkMmZmZDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmZmZDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0taXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogNjBweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0taXRlbS1pbnB1dCB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAxMDBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjZDJmZmQwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0taW5wdXQ6Zm9jdXMgKyAuLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWl0ZW0tbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1pdGVtLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0taXRlbS1sYWJlbF9pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybS1pdGVtLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDJweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tbWVzc2FnZS10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIHBhZGRpbmc6IDIwcHggNjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZmZkMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDJmZmQwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLW1lc3NhZ2UtdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNkMmZmZDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDkwMDA7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1mb3JtLWJhY2s6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0tYmFjazo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgI1cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5MDAxO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUlO1xuICByaWdodDogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8tbGlzdC1idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+RqVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2QyZmZkMDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2luZm8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2RvbmF0aW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvcGFjaXR5OiAxO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fZG9uYXRpb24tbGlzdF9pbWFnZS1tb2RlIHtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2RvbmF0aW9uLWxpc3QtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZmZkMDtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2RvbmF0aW9uLWxpc3Qtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG9wYWNpdHk6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkMmZmZDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2VfaW1hZ2UtbW9kZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbWFnZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXRpdGxlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbWFnZSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2Utc3dpdGNoLWJ1dHRvbiwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtcmV0dXJuLWJ1dHRvbiwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWZvcm0sIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0LWxpbmUge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgb3BhY2l0eTogMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXRpdGxlX2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWltYWdlX2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXN3aXRjaC1idXR0b25faW1hZ2UtbW9kZSwgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtcmV0dXJuLWJ1dHRvbl9pbWFnZS1tb2RlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbnB1dF9pbWFnZS1tb2RlLCAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1mb3JtX2ltYWdlLW1vZGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0LWxpbmVfaW1hZ2UtbW9kZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XG4gIG9wYWNpdHk6IDE7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDJmZmQwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQ6Zm9jdXMgKyAuLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1pbnB1dC1saW5lIHtcbiAgd2lkdGg6IDg1JTtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLWlucHV0LWxpbmUge1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IDJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fY2hhbmdlLXN3aXRjaC1idXR0b24ge1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDJmZmQwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1yZXR1cm4tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX2NoYW5nZS1yZXR1cm4tYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+LqlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19jdXJyZW50LWRvbmF0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZmZkMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fc3RhcnQtZG9uYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICNkMmZmZDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbl9pbWFnZS1tb2RlIHtcbiAgb3BhY2l0eTogMDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fc3RhcnQtZG9uYXRpb24tdGl0bGUsIC4tYXBwLXVzZXItcHJvZmlsZV9fc3RhcnQtZG9uYXRpb24tc3ViLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLi1hcHAtdXNlci1wcm9maWxlX19zdGFydC1kb25hdGlvbi1zdWItdGl0bGUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi4tYXBwLXVzZXItcHJvZmlsZV9fc3RhcnQtZG9uYXRpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4IDY1cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZDJmZmQwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uLWFwcC11c2VyLXByb2ZpbGVfX3N0YXJ0LWRvbmF0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xufSIsIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdXNlci1saXN0L3VzZXItcHJvZmlsZS1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uLWFwcC11c2VyLXByb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICZfX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDkwMDA7XHJcbiAgICAgICAgbGVmdDogMjUlO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAlO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjA2N1wiO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBmcmVlXCIsIFwiRm9udCBBd2Vzb21lIDUgYnJhbmRzXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICZfZGVmYXVsdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdXNlci1saXN0L2RlZmF1bHQtdXNlci1wcm9maWxlLWltYWdlLmpwZ1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgICAmLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtbGlzdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmX21lZGljYWwtbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAmLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgICZfbWVkaWNhbC1tb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAmLi1hcHAtdXNlci1wcm9maWxlX19pbmZvLWxpc3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi13YXJuaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJl9pdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICZfbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYtaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICZfbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMi41JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTJhXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmOGIyYTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QyZmZkMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmZmZDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiArIC4tYXBwLXVzZXItcHJvZmlsZV9faW5mby1saXN0LWZvcm0taXRlbS1saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJl9pbnZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICYtdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCA2MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmZmZDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTAwMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDkwMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDUlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJltkaXNhYmxlZF0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGY0NjlcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiLCBcIkZvbnQgQXdlc29tZSA1IGJyYW5kc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kb25hdGlvbi1saXN0IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZDJmZmQwO1xyXG4gICAgICAgICZfaW1hZ2UtbW9kZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG5cclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NoYW5nZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2QyZmZkMDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgJl9pbWFnZS1tb2RlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMmZmZDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgJi1pbWFnZSxcclxuICAgICAgICAmLXN3aXRjaC1idXR0b24sXHJcbiAgICAgICAgJi1yZXR1cm4tYnV0dG9uLFxyXG4gICAgICAgICYtaW5wdXQsXHJcbiAgICAgICAgJi1mb3JtLFxyXG4gICAgICAgICYtaW5wdXQtbGluZSB7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgJl9pbWFnZS1tb2RlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWlucHV0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAmICsgLi1hcHAtdXNlci1wcm9maWxlX19jaGFuZ2UtaW5wdXQtbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXN3aXRjaC1idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZDJmZmQwO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcmV0dXJuLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYyZWFcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIiwgXCJGb250IEF3ZXNvbWUgNSBicmFuZHNcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jdXJyZW50LWRvbmF0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJmZmQwO1xyXG4gICAgfVxyXG4gICAgJl9fc3RhcnQtZG9uYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgY29sb3I6ICNkMmZmZDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICZfaW1hZ2UtbW9kZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtdGl0bGUsXHJcbiAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zdWItdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDY1cHg7XHJcblxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDJmZmQwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI2QyZmZkMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _store_user_list_user_list_facade__WEBPACK_IMPORTED_MODULE_8__["FacadeServiceUserList"] }, { type: _store_donation_list_donation_list_facade__WEBPACK_IMPORTED_MODULE_9__["FacadeServiceDonationList"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile-donation/user-profile-donation.component */ "./src/app/user-profile-donation/user-profile-donation.component.ts");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/user-list/can-proceed-to-user-profile.guard */ "./src/app/guards/user-list/can-proceed-to-user-profile.guard.ts");
/* harmony import */ var _guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/user-list/can-leave-user-profile.guard */ "./src/app/guards/user-list/can-leave-user-profile.guard.ts");









class UserProfileModule {
}
UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProfileModule, bootstrap: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]] });
UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); }, providers: [
        _guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToUserProfileGuard"],
        _guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveUserProfileGuard"]
    ], imports: [[
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
        _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileDonationComponent"]], imports: [_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"],
                    _user_profile_donation_user_profile_donation_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileDonationComponent"]
                ],
                imports: [
                    _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ],
                providers: [
                    _guards_user_list_can_proceed_to_user_profile_guard__WEBPACK_IMPORTED_MODULE_6__["CanProceedToUserProfileGuard"],
                    _guards_user_list_can_leave_user_profile_guard__WEBPACK_IMPORTED_MODULE_7__["CanLeaveUserProfileGuard"]
                ],
                bootstrap: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map