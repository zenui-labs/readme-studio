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
import Discord from "@/svg-icons/discord.vue";
import Moon from "@/svg-icons/moon.vue";
import Facebook from "@/svg-icons/facebook.vue";
import { ChevronDown, Linkedin } from 'lucide-vue-next';
import { onBeforeUnmount, onMounted, ref } from "vue";
import Sun from "@/svg-icons/sun.vue";
import { useStore } from "@stores/useStore";
var isActiveDropdown = ref(false);
var isDarkMode = ref(false);
var store = useStore();
var toggleDropdown = function () {
    isActiveDropdown.value = !isActiveDropdown.value;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: (__VLS_ctx.store.generatedReadme ? 'z-10' : 'z-20') }, { class: 'fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-2xl items-center justify-between w-full max-w-[1200px] mx-auto py-2.5 hidden md:flex rounded-full px-6' }));
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(__assign({ src: "/logo.svg", alt: "logo" }, { class: "w-[40px]" }));
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: 'bg-gray-50 rounded-full dark:border-darkBorder dark:text-darkSubtext dark:bg-darkCardBgColor border border-gray-100 px-2 py-0 text-[0.8rem] font-medium text-gray-700' }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'flex items-center gap-10 text-gray-700' }));
var __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ to: "/features" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200' })));
var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ to: "/features" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200' })], __VLS_functionalComponentArgsRest(__VLS_5), false));
__VLS_7.slots.default;
var __VLS_7;
var __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ to: "/faqs" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200' })));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ to: "/faqs" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200' })], __VLS_functionalComponentArgsRest(__VLS_9), false));
__VLS_11.slots.default;
var __VLS_11;
var __VLS_12 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ to: "changelog" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200' })));
var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ to: "changelog" }, { class: 'text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200' })], __VLS_functionalComponentArgsRest(__VLS_13), false));
__VLS_15.slots.default;
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'relative' }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ onClick: (__VLS_ctx.toggleDropdown) }, { class: 'text-[1rem] dropdown_btn font-medium dark:text-darkText hover:text-brandColor flex items-center gap-2 cursor-pointer transition-all duration-200' }));
var __VLS_16 = {}.ChevronDown;
/** @type {[typeof __VLS_components.ChevronDown, ]} */ ;
// @ts-ignore
var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ class: ("".concat(__VLS_ctx.isActiveDropdown ? 'rotate-180' : '', " transition-all duration-200")) })));
var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ class: ("".concat(__VLS_ctx.isActiveDropdown ? 'rotate-180' : '', " transition-all duration-200")) })], __VLS_functionalComponentArgsRest(__VLS_17), false));
var __VLS_20 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    name: "dropdown",
    enterActiveClass: "transition ease-out duration-150",
    enterFromClass: "opacity-0 -translate-y-2",
    enterToClass: "opacity-100 translate-y-0",
    leaveActiveClass: "transition ease-in duration-150",
    leaveFromClass: "opacity-100 translate-y-0",
    leaveToClass: "opacity-0 -translate-y-2",
}));
var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{
        name: "dropdown",
        enterActiveClass: "transition ease-out duration-150",
        enterFromClass: "opacity-0 -translate-y-2",
        enterToClass: "opacity-100 translate-y-0",
        leaveActiveClass: "transition ease-in duration-150",
        leaveFromClass: "opacity-100 translate-y-0",
        leaveToClass: "opacity-0 -translate-y-2",
    }], __VLS_functionalComponentArgsRest(__VLS_21), false));
__VLS_23.slots.default;
if (__VLS_ctx.isActiveDropdown) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'absolute top-[110%] dropdown left-1/2 -translate-x-1/2 bg-white dark:text-darkText dark:bg-darkCardBgColor z-50 w-max p-1.5 rounded-lg shadow-lg' }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "https://www.linkedin.com/company/readme-studio", target: "_blank" }, { class: "py-1 pr-3.5 relative overflow-hidden group cursor-pointer font-medium text-[0.9rem] flex items-center gap-1 rounded-lg" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" }));
    /** @type {[typeof Facebook, ]} */ ;
    // @ts-ignore
    var __VLS_24 = __VLS_asFunctionalComponent(Facebook, new Facebook(__assign({ class: "!text-[2.4rem] z-10" })));
    var __VLS_25 = __VLS_24.apply(void 0, __spreadArray([__assign({ class: "!text-[2.4rem] z-10" })], __VLS_functionalComponentArgsRest(__VLS_24), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "z-10" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "https://discord.gg/E99jWHVMca", target: "_blank" }, { class: 'py-1 pl-1 pr-3.5 relative overflow-hidden group cursor-pointer font-medium text-[0.9rem] flex items-center gap-1 rounded-lg' }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-cyan-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" }));
    /** @type {[typeof Discord, ]} */ ;
    // @ts-ignore
    var __VLS_27 = __VLS_asFunctionalComponent(Discord, new Discord(__assign({ class: '!text-[2.3rem] z-10' })));
    var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([__assign({ class: '!text-[2.3rem] z-10' })], __VLS_functionalComponentArgsRest(__VLS_27), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: 'z-10' }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: "https://web.facebook.com/share/g/1ARs1rHQat/", target: "_blank" }, { class: 'py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2.5 rounded-lg' }));
    var __VLS_30 = {}.Linkedin;
    /** @type {[typeof __VLS_components.Linkedin, ]} */ ;
    // @ts-ignore
    var __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30(__assign({ strokeWidth: (1.5), size: (20) }, { class: 'mb-1 z-10' })));
    var __VLS_32 = __VLS_31.apply(void 0, __spreadArray([__assign({ strokeWidth: (1.5), size: (20) }, { class: 'mb-1 z-10' })], __VLS_functionalComponentArgsRest(__VLS_31), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: 'z-10' }));
}
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: (__VLS_ctx.toggleDarkMode) }, { class: 'flex items-center cursor-pointer' }), { title: "Toggle Dark Mode" }));
var __VLS_34 = ((__VLS_ctx.isDarkMode ? __VLS_ctx.Sun : __VLS_ctx.Moon));
// @ts-ignore
var __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34(__assign({ class: "text-gray-700 dark:text-gray-300 transition-colors duration-300" })));
var __VLS_36 = __VLS_35.apply(void 0, __spreadArray([__assign({ class: "text-gray-700 dark:text-gray-300 transition-colors duration-300" })], __VLS_functionalComponentArgsRest(__VLS_35), false));
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-5']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[1200px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[40px]']} */ ;
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
/** @type {__VLS_StyleScopedClasses['gap-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown_btn']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-[110%]']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-darkCardBgColor']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['w-max']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[0.9rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-r']} */ ;
/** @type {__VLS_StyleScopedClasses['from-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:from-blue-800/50']} */ ;
/** @type {__VLS_StyleScopedClasses['to-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['scale-x-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-x-100']} */ ;
/** @type {__VLS_StyleScopedClasses['origin-left']} */ ;
/** @type {__VLS_StyleScopedClasses['!text-[2.4rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-1']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[0.9rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-r']} */ ;
/** @type {__VLS_StyleScopedClasses['from-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:from-cyan-800/50']} */ ;
/** @type {__VLS_StyleScopedClasses['to-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['scale-x-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-x-100']} */ ;
/** @type {__VLS_StyleScopedClasses['origin-left']} */ ;
/** @type {__VLS_StyleScopedClasses['!text-[2.3rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3.5']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[0.9rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-r']} */ ;
/** @type {__VLS_StyleScopedClasses['from-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:from-blue-800/50']} */ ;
/** @type {__VLS_StyleScopedClasses['to-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['scale-x-0']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:scale-x-100']} */ ;
/** @type {__VLS_StyleScopedClasses['origin-left']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Discord: Discord,
            Moon: Moon,
            Facebook: Facebook,
            ChevronDown: ChevronDown,
            Linkedin: Linkedin,
            Sun: Sun,
            isActiveDropdown: isActiveDropdown,
            isDarkMode: isDarkMode,
            store: store,
            toggleDropdown: toggleDropdown,
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
