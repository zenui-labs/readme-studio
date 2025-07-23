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
import Moon from "@/svg-icons/moon.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import Sun from "@/svg-icons/sun.vue";
import { ChevronDown, Linkedin, Menu, X } from "lucide-vue-next";
import Facebook from "@/svg-icons/facebook.vue";
import Discord from "@/svg-icons/discord.vue";
import { useStore } from "@stores/useStore";
var isActiveDropdown = ref(false);
var isDarkMode = ref(false);
var isSidebarOpen = ref(false);
var store = useStore();
var toggleDropdown = function () {
    isActiveDropdown.value = !isActiveDropdown.value;
};
var toggleSidebar = function () {
    isSidebarOpen.value = !isSidebarOpen.value;
};
var applyDarkMode = function (value) {
    if (value) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};
var toggleDarkMode = function () {
    isDarkMode.value = !isDarkMode.value;
    applyDarkMode(isDarkMode.value);
};
onMounted(function () {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode.value = true;
        document.body.classList.add('dark');
    }
    else {
        isDarkMode.value = false;
        document.body.classList.remove('dark');
    }
});
var handleClickOutside;
onMounted(function () {
    handleClickOutside = function (event) {
        if (
        // @ts-ignore
        !event.target.closest('.dropdown_btn') &&
            // @ts-ignore
            !event.target.closest('.dropdown')) {
            isActiveDropdown.value = false;
        }
    };
    document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(function () {
    document.removeEventListener('click', handleClickOutside);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: (__VLS_ctx.store.generatedReadme ? 'z-10' : 'z-20') }, { class: 'fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-2xl flex md:hidden items-center justify-between w-full max-w-[1200px] mx-auto py-2.5 rounded-full px-6' }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'flex items-start gap-2' }));
var __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        to: "/",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "/logo.svg", alt: "logo" }, { class: "w-[33px]" }));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: 'bg-gray-50 rounded-full dark:border-darkBorder dark:text-darkSubtext dark:bg-darkCardBgColor border border-gray-100 px-2 py-0 text-[0.8rem] font-medium text-gray-700' }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'flex items-center gap-3' }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: (__VLS_ctx.toggleDarkMode) }, { class: 'flex items-center cursor-pointer' }), { title: "Toggle Dark Mode" }));
var __VLS_4 = ((__VLS_ctx.isDarkMode ? __VLS_ctx.Sun : __VLS_ctx.Moon));
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "text-gray-700 dark:text-gray-300 transition-colors duration-300" })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "text-gray-700 dark:text-gray-300 transition-colors duration-300" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
var __VLS_8 = {}.Menu;
/** @type {[typeof __VLS_components.Menu, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign(__assign({ 'onClick': {} }, { size: (28) }), { class: "cursor-pointer dark:text-darkText" })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { size: (28) }), { class: "cursor-pointer dark:text-darkText" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
var __VLS_12;
var __VLS_13;
var __VLS_14;
var __VLS_15 = {
    onClick: (__VLS_ctx.toggleSidebar)
};
var __VLS_11;
var __VLS_16 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    name: "slide",
    enterActiveClass: "transform transition-transform duration-300",
    enterFromClass: "translate-x-full",
    enterToClass: "translate-x-0",
    leaveActiveClass: "transform transition-transform duration-300",
    leaveFromClass: "translate-x-0",
    leaveToClass: "translate-x-full",
}));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
        name: "slide",
        enterActiveClass: "transform transition-transform duration-300",
        enterFromClass: "translate-x-full",
        enterToClass: "translate-x-0",
        leaveActiveClass: "transform transition-transform duration-300",
        leaveFromClass: "translate-x-0",
        leaveToClass: "translate-x-full",
    }], __VLS_functionalComponentArgsRest(__VLS_17), false));
__VLS_19.slots.default;
if (__VLS_ctx.isSidebarOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)(__assign({ class: "fixed top-0 right-0 h-full w-[85%] max-w-xs z-50 bg-white dark:bg-darkCardBgColor shadow-xl px-8 py-6 flex flex-col gap-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-end items-center mb-3" }));
    var __VLS_20 = {}.X;
    /** @type {[typeof __VLS_components.X, ]} */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20(__assign(__assign({ 'onClick': {} }, { strokeWidth: "1.5", size: (22) }), { class: "cursor-pointer dark:text-darkSubtext" })));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([__assign(__assign({ 'onClick': {} }, { strokeWidth: "1.5", size: (22) }), { class: "cursor-pointer dark:text-darkSubtext" })], __VLS_functionalComponentArgsRest(__VLS_21), false));
    var __VLS_24 = void 0;
    var __VLS_25 = void 0;
    var __VLS_26 = void 0;
    var __VLS_27 = {
        onClick: (__VLS_ctx.toggleSidebar)
    };
    var __VLS_23;
    var __VLS_28 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    var __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28(__assign({ to: "/features" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition' })));
    var __VLS_30 = __VLS_29.apply(void 0, __spreadArray([__assign({ to: "/features" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition' })], __VLS_functionalComponentArgsRest(__VLS_29), false));
    __VLS_31.slots.default;
    var __VLS_31;
    var __VLS_32 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    var __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32(__assign({ to: "/faqs" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition' })));
    var __VLS_34 = __VLS_33.apply(void 0, __spreadArray([__assign({ to: "/faqs" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition' })], __VLS_functionalComponentArgsRest(__VLS_33), false));
    __VLS_35.slots.default;
    var __VLS_35;
    var __VLS_36 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    var __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36(__assign({ to: "/changelog" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition' })));
    var __VLS_38 = __VLS_37.apply(void 0, __spreadArray([__assign({ to: "/changelog" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition' })], __VLS_functionalComponentArgsRest(__VLS_37), false));
    __VLS_39.slots.default;
    var __VLS_39;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ onClick: (__VLS_ctx.toggleDropdown) }, { class: 'font-semibold dropdown_btn mb-2 flex dark:text-darkText items-center gap-2' }));
    var __VLS_40 = {}.ChevronDown;
    /** @type {[typeof __VLS_components.ChevronDown, ]} */ ;
    // @ts-ignore
    var __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40(__assign({ size: (22) }, { class: ("".concat(__VLS_ctx.isActiveDropdown ? 'rotate-180' : '', " transition-all duration-200")) })));
    var __VLS_42 = __VLS_41.apply(void 0, __spreadArray([__assign({ size: (22) }, { class: ("".concat(__VLS_ctx.isActiveDropdown ? 'rotate-180' : '', " transition-all duration-200")) })], __VLS_functionalComponentArgsRest(__VLS_41), false));
    if (__VLS_ctx.isActiveDropdown) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'dropdown' }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "https://www.linkedin.com/company/readme-studio", target: "_blank" }, { class: 'text-sm flex items-center mt-2 dark:text-darkText hover:text-brandColor transition' }));
        /** @type {[typeof Facebook, ]} */ ;
        // @ts-ignore
        var __VLS_44 = __VLS_asFunctionalComponent(Facebook, new Facebook(__assign({ class: "!text-[2rem]" })));
        var __VLS_45 = __VLS_44.apply(void 0, __spreadArray([__assign({ class: "!text-[2rem]" })], __VLS_functionalComponentArgsRest(__VLS_44), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "https://discord.gg/E99jWHVMca", target: "_blank" }, { class: 'text-sm flex items-center mt-1 dark:text-darkText hover:text-brandColor transition' }));
        /** @type {[typeof Discord, ]} */ ;
        // @ts-ignore
        var __VLS_47 = __VLS_asFunctionalComponent(Discord, new Discord(__assign({ class: "!text-[2rem]" })));
        var __VLS_48 = __VLS_47.apply(void 0, __spreadArray([__assign({ class: "!text-[2rem]" })], __VLS_functionalComponentArgsRest(__VLS_47), false));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "https://web.facebook.com/share/g/1ARs1rHQat/", target: "_blank" }, { class: 'text-sm flex items-center gap-2 dark:text-darkText mt-2 ml-2 hover:text-brandColor transition' }));
        var __VLS_50 = {}.Linkedin;
        /** @type {[typeof __VLS_components.Linkedin, ]} */ ;
        // @ts-ignore
        var __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({
            strokeWidth: "1",
            size: (17),
        }));
        var __VLS_52 = __VLS_51.apply(void 0, __spreadArray([{
                strokeWidth: "1",
                size: (17),
            }], __VLS_functionalComponentArgsRest(__VLS_51), false));
    }
}
var __VLS_19;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-5']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[1200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[33px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-darkBorder']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkSubtext']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-darkCardBgColor']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[0.8rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[85%]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-darkCardBgColor']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkSubtext']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown_btn']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['!text-[2rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['!text-[2rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Moon: Moon,
            Sun: Sun,
            ChevronDown: ChevronDown,
            Linkedin: Linkedin,
            Menu: Menu,
            X: X,
            Facebook: Facebook,
            Discord: Discord,
            isActiveDropdown: isActiveDropdown,
            isDarkMode: isDarkMode,
            isSidebarOpen: isSidebarOpen,
            store: store,
            toggleDropdown: toggleDropdown,
            toggleSidebar: toggleSidebar,
            toggleDarkMode: toggleDarkMode,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
