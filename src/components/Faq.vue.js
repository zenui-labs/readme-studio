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
import { ref } from 'vue';
var faqs = ref([
    {
        question: "What is Readme Studio?",
        answer: "Readme Studio is an AI-powered tool that helps you generate professional, visually appealing README files for GitHub profiles and repositories.",
        open: false
    },
    {
        question: "Who can use Readme Studio?",
        answer: "Anyone! Whether you're a developer, open-source maintainer, or student — Readme Studio is perfect for anyone looking to enhance their GitHub presence.",
        open: false
    },
    {
        question: "Do I need coding knowledge to use this?",
        answer: "Not at all. Just fill out a few fields or connect your GitHub account — the tool does the rest.",
        open: false
    },
    {
        question: "Can I preview my README before downloading?",
        answer: "Yes, the tool provides a live preview of your README as you build it.",
        open: false
    },
    {
        question: "Does Readme Studio support social links and badges?",
        answer: "Yes! You can add GitHub stats, Twitter links, visitor counters, tech badges, and more.",
        open: false
    },
    {
        question: "Is the generated README mobile-friendly?",
        answer: "Yes. All templates are responsive and designed to look great on all devices.",
        open: false
    },
    {
        question: "Is my data stored or shared?",
        answer: "No. Readme Studio doesn't store any personal data. Everything is generated in your browser for privacy and speed.",
        open: false
    },
    {
        question: "Can I contribute to Readme Studio?",
        answer: "Not yet — but we plan to open-source parts of the project in the future. Stay tuned on our GitHub.",
        open: false
    }
]);
var toggle = function (index) {
    faqs.value.forEach(function (faq, i) {
        if (i !== index) {
            faq.open = false;
        }
    });
    faqs.value[index].open = !faqs.value[index].open;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: "py-[130px] md:py-16 px-6 md:px-4 max-w-6xl mx-auto" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "text-center mb-12" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-[2.2rem] dark:text-darkText font-bold text-gray-800" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-gray-500 dark:text-darkSubtext mt-2 text-[1rem]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid grid-cols-1 md:grid-cols-2 gap-4 items-start" }));
var _loop_1 = function (faq, index) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: (faq.question) }, { class: "bg-white dark:bg-darkCardBgColor dark:border-darkBorder border border-gray-200 rounded-xl p-5 transition-all" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.toggle(index);
        } }, { class: "w-full text-left flex cursor-pointer justify-between items-center font-medium text-gray-800" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: 'dark:text-darkText' }));
    (faq.question);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(__assign({ class: (['w-5 h-5 transform transition-transform dark:text-darkText duration-300', faq.open ? 'rotate-180' : 'rotate-0']) }, { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        'stroke-linecap': "round",
        'stroke-linejoin': "round",
        'stroke-width': "2",
        d: "M19 9l-7 7-7-7",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (['overflow-hidden transition-all duration-300 ease-in-out', faq.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "mt-3 text-gray-600 text-sm dark:text-darkSubtext text-left leading-relaxed" }));
    (faq.answer);
};
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.faqs)); _i < _a.length; _i++) {
    var _b = _a[_i], faq = _b[0], index = _b[1];
    _loop_1(faq, index);
}
/** @type {__VLS_StyleScopedClasses['py-[130px]']} */ ;
/** @type {__VLS_StyleScopedClasses['md:py-16']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['md:px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-6xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[2.2rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkSubtext']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-darkCardBgColor']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-darkBorder']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkSubtext']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-relaxed']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            faqs: faqs,
            toggle: toggle,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
