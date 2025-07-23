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
import { AlertCircle, CheckCircle, RefreshCw, RotateCcw } from 'lucide-vue-next';
import { useStore } from "@stores/useStore";
import { computed, onMounted, ref, watch } from "vue";
var currentStep = ref(0);
var store = useStore();
var profileSteps = [
    'Analyzing profile structure...',
    'Loading GitHub data...',
    'Creating README content...',
    'Finalizing output...'
];
var repoSteps = [
    'Analyzing repository structure...',
    'Processing code files...',
    'Generating documentation...',
    'Creating README content...',
    'Finalizing output...'
];
var steps = computed(function () {
    return store.selectedType === 'profile' ? profileSteps : repoSteps;
});
// Determine which step is the data loading step
var dataLoadingStepIndex = computed(function () {
    return store.selectedType === 'profile' ? 1 : 1; // "Loading GitHub data..." or "Processing code files..."
});
onMounted(function () {
    var interval = setInterval(function () {
        // Stop progression if there's an error on the data loading step
        if (store.hasError && currentStep.value === dataLoadingStepIndex.value) {
            clearInterval(interval);
            return;
        }
        if (currentStep.value < steps.value.length) {
            currentStep.value++;
        }
        else {
            clearInterval(interval);
        }
    }, 2000);
});
watch(function () { return currentStep.value; }, function (newValue) {
    // Don't proceed if there's an error
    if (store.hasError) {
        return;
    }
    if (store.selectedType === 'profile') {
        if (newValue === 4) {
            store.currentStep = 4;
            currentStep.value = 0;
        }
    }
    else {
        if (newValue === 5) {
            store.currentStep = 4;
            currentStep.value = 0;
        }
    }
}, {
    immediate: true,
});
watch(function () { return store.hasError; }, function (hasError) {
    if (!hasError) {
        currentStep.value = 0;
    }
});
var handleTryAgain = function () {
    store.currentStep = 2;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "space-y-4 inline-block mx-auto" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.steps)); _i < _a.length; _i++) {
    var _b = _a[_i], step = _b[0], index = _b[1];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (step) }, { class: "flex items-center gap-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (['flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500',
            __VLS_ctx.store.hasError && index === __VLS_ctx.dataLoadingStepIndex ? 'bg-red-500 text-white' :
                index < __VLS_ctx.currentStep ? 'bg-brandColor text-white' :
                    index === __VLS_ctx.currentStep && !__VLS_ctx.store.hasError ? 'bg-brandColor text-white' :
                        'bg-gray-200 text-gray-400 dark:text-gray-700 dark:bg-gray-400']) }));
    if (index < __VLS_ctx.currentStep && !__VLS_ctx.store.hasError) {
        var __VLS_0 = {}.CheckCircle;
        /** @type {[typeof __VLS_components.CheckCircle, ]} */ ;
        // @ts-ignore
        var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "w-5 h-5" })));
        var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "w-5 h-5" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    }
    else if (__VLS_ctx.store.hasError && index === __VLS_ctx.dataLoadingStepIndex) {
        var __VLS_4 = {}.AlertCircle;
        /** @type {[typeof __VLS_components.AlertCircle, ]} */ ;
        // @ts-ignore
        var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "w-5 h-5" })));
        var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "w-5 h-5" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    }
    else if (index === __VLS_ctx.currentStep && !__VLS_ctx.store.hasError) {
        var __VLS_8 = {}.RefreshCw;
        /** @type {[typeof __VLS_components.RefreshCw, ]} */ ;
        // @ts-ignore
        var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "w-5 h-5 animate-spin" })));
        var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "w-5 h-5 animate-spin" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div)(__assign({ class: "w-2 h-2 bg-current rounded-full" }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-col" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: 'flex items-center gap-2' }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: (['text-lg transition-all flex duration-500',
            __VLS_ctx.store.hasError && index === __VLS_ctx.dataLoadingStepIndex ? 'text-red-600 text-left dark:text-red-400 font-medium' :
                index <= __VLS_ctx.currentStep ? 'text-gray-800 dark:text-darkText font-medium' :
                    'text-gray-400 dark:text-gray-500']) }));
    (step);
    if (__VLS_ctx.store.hasError && index === __VLS_ctx.dataLoadingStepIndex) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.handleTryAgain) }, { class: "py-1.5 cursor-pointer bg-red-100 border border-red-400 dark:border-red-900 hover:bg-red-200 dark:bg-red-800/30 dark:hover:bg-red-800/60 transition-all duration-300 px-3 dark:text-white text-red-600 rounded-lg text-[0.9rem] flex items-center gap-2 font-normal justify-center w-max" }));
        var __VLS_12 = {}.RotateCcw;
        /** @type {[typeof __VLS_components.RotateCcw, ]} */ ;
        // @ts-ignore
        var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            size: (18),
        }));
        var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
                size: (18),
            }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    }
    if (__VLS_ctx.store.hasError && index === __VLS_ctx.dataLoadingStepIndex) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "text-sm text-red-500 text-left dark:text-red-400 mt-1" }));
        (__VLS_ctx.store.errorMessage);
    }
}
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-spin']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-current']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1.5']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-red-400']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-red-900']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-red-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-red-800/30']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:hover:bg-red-800/60']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[0.9rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-normal']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-max']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-red-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            AlertCircle: AlertCircle,
            CheckCircle: CheckCircle,
            RefreshCw: RefreshCw,
            RotateCcw: RotateCcw,
            currentStep: currentStep,
            store: store,
            steps: steps,
            dataLoadingStepIndex: dataLoadingStepIndex,
            handleTryAgain: handleTryAgain,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
