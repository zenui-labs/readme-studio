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
import { useStore } from "@stores/useStore";
import { Copy, Download, Loader2, X } from 'lucide-vue-next';
import { useRouter } from "vue-router";
import VueMarkdown from 'vue3-markdown-it';
import 'github-markdown-css';
import { ref } from 'vue';
var store = useStore();
var router = useRouter();
var isCopying = ref(false);
var isDownloading = ref(false);
var handleModalClose = function () {
    store.currentStep = 1;
    store.generatedReadme = '';
    router.push('/');
};
var copyReadme = function () {
    navigator.clipboard.writeText(store.generatedReadme).then(function () {
        isCopying.value = true;
        setTimeout(function () {
            isCopying.value = false;
        }, 1000);
    });
};
var downloadReadme = function () {
    isDownloading.value = true;
    var blob = new Blob([store.generatedReadme], { type: 'text/markdown;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'readme-studio-generated.md';
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
        isDownloading.value = false;
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    }, 1000);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
var __VLS_0 = {}.Transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "fade",
    appear: true,
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        name: "fade",
        appear: true,
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_3.slots.default;
if (__VLS_ctx.store.currentStep === 4) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "fixed top-0 left-0 z-[50000000000000000000000000] w-full h-screen flex justify-center items-center flex-col backdrop-blur-3xl dark:backdrop-blur-2xl bg-black/10 dark:bg-transparent" }));
    var __VLS_4 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        name: "slide-up",
        appear: true,
    }));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{
            name: "slide-up",
            appear: true,
        }], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-[95%] md:w-[80%] mt-36" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'flex items-center justify-end gap-3 mb-3' }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.copyReadme) }, { class: 'py-2.5 cursor-pointer text-[1rem] font-medium px-6 bg-brandColor text-white rounded-lg hover:bg-brandColor/90 transition-colors duration-300 flex items-center gap-2.5' }));
    var __VLS_8 = ((__VLS_ctx.Copy));
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        size: (19),
    }));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
            size: (19),
        }], __VLS_functionalComponentArgsRest(__VLS_9), false));
    (__VLS_ctx.isCopying ? 'Copied' : 'Copy');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.downloadReadme) }, { class: 'py-2.5 cursor-pointer text-[1rem] font-medium px-6 bg-brandColor text-white rounded-lg hover:bg-brandColor/90 transition-colors duration-300 flex items-center gap-2.5' }));
    if (__VLS_ctx.isDownloading) {
        var __VLS_12 = ((__VLS_ctx.isDownloading ? __VLS_ctx.Loader2 : __VLS_ctx.Download));
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ size: (19) }, { class: "animate-spin" })));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ size: (19) }, { class: "animate-spin" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    }
    else {
        var __VLS_16 = ((__VLS_ctx.isDownloading ? __VLS_ctx.Loader2 : __VLS_ctx.Download));
        // @ts-ignore
        var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
            size: (19),
        }));
        var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
                size: (19),
            }], __VLS_functionalComponentArgsRest(__VLS_17), false));
    }
    (__VLS_ctx.isDownloading ? 'Downloading...' : 'Download');
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.handleModalClose) }, { class: 'py-2.5 cursor-pointer text-[1rem] font-medium px-4 bg-white dark:bg-slate-800 dark:text-darkText text-black rounded-lg hover:text-brandColor transition-colors duration-300' }));
    var __VLS_20 = {}.X;
    /** @type {[typeof __VLS_components.X, ]} */ ;
    // @ts-ignore
    var __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
    var __VLS_22 = __VLS_21.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_21), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ style: {} }, { class: 'bg-white dark:bg-slate-800 h-screen overflow-y-auto p-6 pb-[150px] rounded-t-xl' }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "markdown-container dark:prose-invert" }));
    var __VLS_24 = {}.VueMarkdown;
    /** @type {[typeof __VLS_components.VueMarkdown, ]} */ ;
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24(__assign({ source: (__VLS_ctx.store.generatedReadme) }, { class: "markdown-body" })));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([__assign({ source: (__VLS_ctx.store.generatedReadme) }, { class: "markdown-body" })], __VLS_functionalComponentArgsRest(__VLS_25), false));
    var __VLS_7;
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[50000000000000000000000000]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:backdrop-blur-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black/10']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[95%]']} */ ;
/** @type {__VLS_StyleScopedClasses['md:w-[80%]']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-36']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-brandColor/90']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-brandColor/90']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-spin']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-slate-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-slate-800']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-[150px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-t-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-container']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:prose-invert']} */ ;
/** @type {__VLS_StyleScopedClasses['markdown-body']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Copy: Copy,
            Download: Download,
            Loader2: Loader2,
            X: X,
            VueMarkdown: VueMarkdown,
            store: store,
            isCopying: isCopying,
            isDownloading: isDownloading,
            handleModalClose: handleModalClose,
            copyReadme: copyReadme,
            downloadReadme: downloadReadme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
