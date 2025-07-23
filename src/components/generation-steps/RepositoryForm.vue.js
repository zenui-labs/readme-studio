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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { AlertCircle, Github } from 'lucide-vue-next';
import { useStore } from "@stores/useStore";
import { ref } from "vue";
import AiIcon from "@/svg-icons/ai-icon.vue";
import { fetchRepoContents, fetchRepoInfo } from "@utils/githubApi";
import { generateReadmeWithClaude } from "@utils/groqApi";
var selectedType = ref('');
var input = ref('');
var error = ref('');
var store = useStore();
var validateGithubUrl = function (url) {
    return /^https:\/\/github\.com\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+\/?$/.test(url.trim());
};
var handleGenerating = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, owner, repo, repoData, contents, prompt, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = input.value.replace('https://github.com/', '').split('/'), owner = _a[0], repo = _a[1];
                store.currentStep = 3;
                return [4 /*yield*/, fetchRepoInfo(owner, repo)];
            case 1:
                repoData = _b.sent();
                return [4 /*yield*/, fetchRepoContents(owner, repo)];
            case 2:
                contents = _b.sent();
                prompt = "\nYou are an expert open-source technical writer and developer advocate tasked with generating a professional, comprehensive, and production-ready README.md for a GitHub repository.\n\n---\n\n## Your mission\n\n- Analyze the repository metadata, structure, and code contents thoroughly.\n- Extract meaningful insights such as project purpose, features, usage, configuration, APIs, tests, and contribution guidelines.\n- Dynamically decide **which sections to include** based on the repo's contents and complexity.\n- If the project is sufficiently complex or lengthy, include a **Table of Contents**; otherwise, omit it.\n- Use a clear, well-structured layout optimized for readability and easy navigation.\n- Add badges (stars, forks, license, etc.) using shields.io dynamically based on repo info.\n- Add screenshots or images if present in the repo or use placeholders with notes to update.\n- Insert TODO placeholders clearly where data or documentation is missing.\n- Provide code examples, install commands, usage instructions, and configuration details where detectable.\n- Use professional, concise language accessible to both new users and experienced developers.\n- Make the README copy-paste-ready with GitHub Flavored Markdown.\n- Include sections like Overview, Features, Installation, Usage, Configuration, API Reference, Roadmap, Contributing, Testing, FAQ, License, Contact, and Acknowledgements \u2014 but only if relevant.\n- At the end, add contact info, license details, and acknowledgements.\n\n---\n\n## Repository Info\n\nUse the following data to guide your content decisions:\n\nRepository Metadata:\n".concat(JSON.stringify(repoData, null, 2), "\n\nTop-Level Repository File Tree and Contents:\n").concat(JSON.stringify(contents, null, 2), "\n\n---\n\n## README structure example (adapt dynamically):\n\n# Project Title ![Stars](https://img.shields.io/github/stars/OWNER/REPO) ![Forks](https://img.shields.io/github/forks/OWNER/REPO) ![License](https://img.shields.io/github/license/OWNER/REPO)\n\n> Short, punchy tagline or project description.\n\n").concat('{{TABLE_OF_CONTENTS}}', "  <!-- Include this only if README is long enough -->\n\n## Overview\n\nDescribe the project purpose, goals, and target audience.\n\n## Screenshots\n\nInclude screenshots or GIFs showcasing the project, or placeholders if none found.\n\n## Features\n\nList key features and unique selling points detected from the repo code.\n\n## Getting Started\n\nPrerequisites and quickstart instructions.\n\n## Installation\n\nProvide install commands and steps.\n\n## Usage\n\nExample usage commands and code snippets.\n\n## Configuration\n\nDocument environment variables, config files, or options if present.\n\n## API Reference\n\nDetail public APIs, endpoints, or exports with examples.\n\n## Roadmap\n\nPlanned future improvements if detectable.\n\n## Contributing\n\nContribution guidelines and code of conduct.\n\n## Testing\n\nHow to run tests and verify correctness.\n\n## FAQ\n\nCommon questions and answers, if relevant.\n\n## License\n\nLicense name and badge, linked to LICENSE file.\n\n## Contact\n\nAuthor and maintainer contacts, social links.\n\n## Acknowledgements\n\nCredits, libraries, and inspirations.\n\n---\n\nRemember:\n\n- Use markdown formatting, including headings, lists, code blocks, and badges.\n- Insert TODO placeholders where information is missing.\n- Adjust the structure dynamically to fit the repository's scale and content.\n- Output **only** the README markdown.\n\nNow, generate the best possible README.md for the repository based on the above instructions.\n");
                if (store.hasError)
                    return [2 /*return*/];
                return [4 /*yield*/, generateReadmeWithClaude(prompt)];
            case 3:
                result = _b.sent();
                store.setGeneratedReadme(result);
                return [2 /*return*/];
        }
    });
}); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "space-y-6" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: "block text-[1rem] text-left dark:text-darkText font-medium text-gray-700 mb-2" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "relative" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }));
var __VLS_0 = {}.Github;
/** @type {[typeof __VLS_components.Github, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "h-5 w-5 text-gray-400" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "h-5 w-5 text-gray-400" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign({ type: "text", value: (__VLS_ctx.input), placeholder: (__VLS_ctx.selectedType === 'profile' ? 'your-username' : 'https://github.com/username/repository') }, { class: (['block w-full pl-10 pr-3 py-4 dark:text-darkText border-2 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
        __VLS_ctx.error ? 'border-red-300 bg-red-50' : 'border-gray-200 dark:bg-darkCardBgColor dark:border-darkBorder bg-white']) }));
if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-2 flex items-center text-red-600 text-sm" }));
    var __VLS_4 = {}.AlertCircle;
    /** @type {[typeof __VLS_components.AlertCircle, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "w-4 h-4 mr-1" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "w-4 h-4 mr-1" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    (__VLS_ctx.error);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.handleGenerating) }, { disabled: (!__VLS_ctx.validateGithubUrl(__VLS_ctx.input)) }), { class: "w-full bg-brandColor cursor-pointer gap-3 text-white py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 dark:disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2" }));
/** @type {[typeof AiIcon, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(AiIcon, new AiIcon({}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_8), false));
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-y-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-none']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-10']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-2']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-transparent']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['w-4']} */ ;
/** @type {__VLS_StyleScopedClasses['h-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-brandColor']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:opacity-40']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:disabled:opacity-70']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:cursor-not-allowed']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            AlertCircle: AlertCircle,
            Github: Github,
            AiIcon: AiIcon,
            selectedType: selectedType,
            input: input,
            error: error,
            validateGithubUrl: validateGithubUrl,
            handleGenerating: handleGenerating,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
