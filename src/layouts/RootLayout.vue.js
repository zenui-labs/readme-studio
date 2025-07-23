var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Navbar from "@components/Navbar.vue";
import MobileNabar from "@components/MobileNabar.vue";
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {[typeof Navbar, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof MobileNabar, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(MobileNabar, new MobileNabar({}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "min-h-screen w-full dark:bg-darkBg relative bg-white text-center items-center justify-center flex flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "\u0061\u0062\u0073\u006f\u006c\u0075\u0074\u0065\u0020\u0069\u006e\u0073\u0065\u0074\u002d\u0030\u0020\u007a\u002d\u0030\u000d\u000a\u0020\u0020\u0020\u0020\u005b\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002d\u0069\u006d\u0061\u0067\u0065\u003a\u006c\u0069\u006e\u0065\u0061\u0072\u002d\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074\u0028\u0074\u006f\u005f\u0072\u0069\u0067\u0068\u0074\u002c\u005f\u0023\u0066\u0062\u0066\u0062\u0066\u0062\u005f\u0031\u0070\u0078\u002c\u005f\u0074\u0072\u0061\u006e\u0073\u0070\u0061\u0072\u0065\u006e\u0074\u005f\u0031\u0070\u0078\u0029\u002c\u006c\u0069\u006e\u0065\u0061\u0072\u002d\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074\u0028\u0074\u006f\u005f\u0062\u006f\u0074\u0074\u006f\u006d\u002c\u005f\u0023\u0066\u0062\u0066\u0062\u0066\u0062\u005f\u0031\u0070\u0078\u002c\u005f\u0074\u0072\u0061\u006e\u0073\u0070\u0061\u0072\u0065\u006e\u0074\u005f\u0031\u0070\u0078\u0029\u005d\u000d\u000a\u0020\u0020\u0020\u0020\u0064\u0061\u0072\u006b\u003a\u005b\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002d\u0069\u006d\u0061\u0067\u0065\u003a\u006c\u0069\u006e\u0065\u0061\u0072\u002d\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074\u0028\u0074\u006f\u005f\u0072\u0069\u0067\u0068\u0074\u002c\u005f\u0023\u0031\u0062\u0031\u0062\u0031\u0065\u005f\u0031\u0070\u0078\u002c\u005f\u0074\u0072\u0061\u006e\u0073\u0070\u0061\u0072\u0065\u006e\u0074\u005f\u0031\u0070\u0078\u0029\u002c\u006c\u0069\u006e\u0065\u0061\u0072\u002d\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074\u0028\u0074\u006f\u005f\u0062\u006f\u0074\u0074\u006f\u006d\u002c\u005f\u0023\u0031\u0062\u0031\u0062\u0031\u0065\u005f\u0031\u0070\u0078\u002c\u005f\u0074\u0072\u0061\u006e\u0073\u0070\u0061\u0072\u0065\u006e\u0074\u005f\u0031\u0070\u0078\u0029\u005d\u000d\u000a\u0020\u0020\u0020\u0020\u005b\u0062\u0061\u0063\u006b\u0067\u0072\u006f\u0075\u006e\u0064\u002d\u0073\u0069\u007a\u0065\u003a\u0033\u0030\u0070\u0078\u005f\u0033\u0030\u0070\u0078\u005d" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ style: {} }, { class: "absolute inset-0 z-10 pointer-events-none dark:[background:radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(0,173,149,0.08)_0%,transparent_100%)]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "z-10 w-full max-w-[1200px] mx-auto" }));
var __VLS_6 = {};
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-[0.8rem] absolute bottom-5 opacity-80 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "https://zenui.net", target: "_blank" }, { class: "text-brandColor underline" }));
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-darkBg']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-0']} */ ;
/** @type {__VLS_StyleScopedClasses['[background-image:linear-gradient(to_right,_#fbfbfb_1px,_transparent_1px),linear-gradient(to_bottom,_#fbfbfb_1px,_transparent_1px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:[background-image:linear-gradient(to_right,_#1b1b1e_1px,_transparent_1px),linear-gradient(to_bottom,_#1b1b1e_1px,_transparent_1px)]']} */ ;
/** @type {__VLS_StyleScopedClasses['[background-size:30px_30px]']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:[background:radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(0,173,149,0.08)_0%,transparent_100%)]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[1200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[0.8rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-5']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-80']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['underline']} */ ;
// @ts-ignore
var __VLS_7 = __VLS_6;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Navbar: Navbar,
            MobileNabar: MobileNabar,
        };
    },
});
var __VLS_component = (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
