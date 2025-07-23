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
import SelectType from "@components/generation-steps/SelectType.vue";
import ProfileForm from "@components/generation-steps/ProfileForm.vue";
import RepositoryForm from "@components/generation-steps/RepositoryForm.vue";
import ReadmePreview from "@components/generation-steps/ReadmePreview.vue";
import GeneratingScreen from "@components/generation-steps/GeneratingScreen.vue";
import { onMounted } from "vue";
import RootLayout from "@/layouts/RootLayout.vue";
var store = useStore();
var steps = [
    {
        label: 'Select Type',
        slug: 'select_type',
    },
    {
        label: 'Enter Info',
        slug: 'enter_info',
    },
    {
        label: 'Generate',
        slug: 'generate',
    },
    {
        label: 'Preview',
        slug: 'preview',
    }
];
onMounted(function () {
    store.currentStep = 1;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
/** @type {[typeof RootLayout, typeof RootLayout, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(RootLayout, new RootLayout({}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("".concat(__VLS_ctx.store.currentStep === 3 && 'md:my-[100px]', " py-[150px] px-6 md:px-0 md:py-0 z-10 max-w-[900px] w-full md:min-w-[900px] mx-auto")) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex items-center flex-col md:flex-row gap-4 justify-center w-full mb-16" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.steps)); _i < _a.length; _i++) {
    var _b = _a[_i], step = _b[0], index = _b[1];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ key: (index) }, { class: "flex items-center justify-center gap-4" }), { class: (index !== __VLS_ctx.steps.length - 1 ? 'w-full' : 'w-auto') }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (index === 0 && 'ml-3') }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all duration-500 ".concat(__VLS_ctx.store.currentStep >= index + 1
            ? 'bg-gradient-to-r from-teal-300 to-brandColor text-white shadow-lg transform scale-110'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-400')) }));
    (index + 1);
    if (index !== __VLS_ctx.steps.length - 1) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("".concat(__VLS_ctx.store.currentStep >= index + 1 ? 'bg-brandColor' : 'bg-gray-300 dark:bg-gray-700', " flex-1 h-[30px] mx-auto mt-2 md:hidden w-1.5 rounded-full")) }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col md:flex-row items-center gap-4" }, { class: (index !== __VLS_ctx.steps.length - 1 ? 'md:flex-grow pb-9 md:pb-0' : '') }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-[1rem] font-medium ".concat(__VLS_ctx.store.currentStep >= index + 1 ? 'text-brandColor' : 'text-gray-500')) }));
    (step.label);
    if (index !== __VLS_ctx.steps.length - 1) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("".concat(__VLS_ctx.store.currentStep >= index + 1 ? 'bg-brandColor' : 'bg-gray-300 dark:bg-gray-700', " flex-1 h-1.5 rounded-full hidden md:block")) }));
    }
}
if (__VLS_ctx.store.currentStep === 1) {
    /** @type {[typeof SelectType, ]} */ ;
    // @ts-ignore
    var __VLS_4 = __VLS_asFunctionalComponent(SelectType, new SelectType({}));
    var __VLS_5 = __VLS_4.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_4), false));
}
if (__VLS_ctx.store.currentStep === 2 && __VLS_ctx.store.selectedType === 'profile') {
    /** @type {[typeof ProfileForm, ]} */ ;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(ProfileForm, new ProfileForm({}));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_7), false));
}
if (__VLS_ctx.store.currentStep === 2 && __VLS_ctx.store.selectedType === 'repository') {
    /** @type {[typeof RepositoryForm, ]} */ ;
    // @ts-ignore
    var __VLS_10 = __VLS_asFunctionalComponent(RepositoryForm, new RepositoryForm({}));
    var __VLS_11 = __VLS_10.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_10), false));
}
if (__VLS_ctx.store.currentStep === 4) {
    /** @type {[typeof ReadmePreview, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(ReadmePreview, new ReadmePreview({}));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_13), false));
}
if (__VLS_ctx.store.currentStep === 3) {
    /** @type {[typeof GeneratingScreen, ]} */ ;
    // @ts-ignore
    var __VLS_16 = __VLS_asFunctionalComponent(GeneratingScreen, new GeneratingScreen({}));
    var __VLS_17 = __VLS_16.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_16), false));
}
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-16']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            SelectType: SelectType,
            ProfileForm: ProfileForm,
            RepositoryForm: RepositoryForm,
            ReadmePreview: ReadmePreview,
            GeneratingScreen: GeneratingScreen,
            RootLayout: RootLayout,
            store: store,
            steps: steps,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
