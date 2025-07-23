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
import { generateReadmeWithClaude } from "@utils/groqApi";
import { fetchUserProfile } from "@utils/githubApi";
var input = ref('');
var error = ref('');
var store = useStore();
function handleGenerating() {
    return __awaiter(this, void 0, void 0, function () {
        var userData, prompt, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    store.currentStep = 3;
                    return [4 /*yield*/, fetchUserProfile(input.value)];
                case 1:
                    userData = _a.sent();
                    prompt = "\nYou are a leading GitHub profile consultant, open-source advocate, and technical writer specialized in developer portfolios.\n\nYour task is to generate a **world-class, visually appealing, and highly professional GitHub Profile README** in GitHub-flavored Markdown, using the user data below.\n\n---\n\n## Objectives\n\n- Target audience: potential employers, collaborators, open-source community, and recruiters.\n- Create a compelling narrative highlighting the user's technical skills, contributions, and personality.\n- Emphasize measurable social proof: GitHub stats, top projects, contribution streaks, and popular repositories.\n- Use rich formatting: badges (shields.io), emojis, icons, images, and clear sections.\n- Keep it developer-friendly with concise yet meaningful content.\n- Include a call-to-action to engage visitors (follow, star, connect).\n- Provide placeholders or TODOs where data is missing, with friendly explanations.\n- Use professional but approachable language that reflects a passionate developer\u2019s profile.\n- Structure the README with appropriate sections and an optional table of contents if needed.\n\n---\n\n## Recommended Sections (include all relevant):\n\n# {{Name}} \uD83D\uDC4B\n\n![Profile Image](https://example.com/profile.jpg)\n\n> A brief, catchy personal tagline or summary about the user.\n\n---\n\n## \uD83D\uDE80 About Me\n\nWrite a short bio: background, key expertise, programming languages, interests, and current goals.\n\n---\n\n## \uD83D\uDEE0\uFE0F Skills & Technologies\n\nUse badges or icons to display main programming languages, frameworks, tools, and technologies. get the technologies from his most used languages or frameworks which have in his profile data. also add some demo tech stack (which user will replaced with his own)\n\n---\n\n## \uD83D\uDCCA GitHub Stats & Social Proof\n\nInclude the following with the user's actual GitHub username:\n\n- ![GitHub stats](https://github-readme-stats.vercel.app/api?username=USERNAME&show_icons=true&theme=radical)\n- ![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=USERNAME&layout=compact&theme=radical)\n- ![GitHub Trophy](https://github-profile-trophy.vercel.app/?username=USERNAME&theme=radical)\n- ![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=USERNAME&theme=radical)\n\n---\n\n## \uD83D\uDCC2 Featured Projects\n\nList 3-6 of the user's most popular or relevant repositories with:\n\n- Project name linked to the repo.\n- Short description summarizing the project\u2019s purpose or technology stack.\n- Badges for stars, forks, last commit date, and license.\n\n---\n\n## \uD83C\uDF10 Connect with Me\n\nProvide links (badges) for social profiles like GitHub, LinkedIn, Twitter, personal website/blog, and others if available.\n\n---\n\n## \uD83D\uDCDD Latest Blog Posts\n\nLink to the most recent blog posts or articles written by the user (if applicable).\n\n---\n\n## \uD83D\uDCEB Contact\n\nProvide professional contact info such as email or preferred communication channels.\n\n---\n\n## \uD83E\uDD1D Let\u2019s Collaborate!\n\nEncourage visitors to follow, star repositories, open issues, or contact the user.\n\n---\n\n## Notes\n\n- Use GitHub-flavored Markdown syntax.\n- Insert clear TODO placeholders for any missing information.\n- Keep the tone professional, enthusiastic, and approachable.\n- Include emojis to enhance readability but do not overuse.\n- Use placeholder URLs/badges if actual data is missing.\n- Only output the final markdown without any explanations or extra commentary.\n\n---\n\n## User Data\n\n".concat(JSON.stringify(userData, null, 2), "\n\n---\n\nNow, generate the **best possible, developer-focused, production-ready GitHub Profile README** for this user.\n");
                    if (store.hasError)
                        return [2 /*return*/];
                    return [4 /*yield*/, generateReadmeWithClaude(prompt)];
                case 2:
                    result = _a.sent();
                    store.setGeneratedReadme(result);
                    return [2 /*return*/];
            }
        });
    });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "space-y-6" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: "block text-[1rem] text-left font-medium dark:text-darkText text-gray-700 mb-2" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "relative" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }));
var __VLS_0 = {}.Github;
/** @type {[typeof __VLS_components.Github, ]} */ ;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "h-5 w-5 text-gray-400" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "h-5 w-5 text-gray-400" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign({ type: "text", value: (__VLS_ctx.input), placeholder: "your-username" }, { class: (['block w-full pl-10 pr-3 py-4 border-2 rounded-xl dark:text-darkText dark:bg-darkCardBgColor placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
        __VLS_ctx.error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white dark:border-darkBorder']) }));
if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mt-2 flex items-center text-red-600 text-sm" }));
    var __VLS_4 = {}.AlertCircle;
    /** @type {[typeof __VLS_components.AlertCircle, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ class: "w-4 h-4 mr-1" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ class: "w-4 h-4 mr-1" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    (__VLS_ctx.error);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.handleGenerating) }, { disabled: (!__VLS_ctx.input) }), { class: "w-full bg-brandColor cursor-pointer text-white gap-3 py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 dark:disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2" }));
/** @type {[typeof AiIcon, ]} */ ;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(AiIcon, new AiIcon({}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_8), false));
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[1rem]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
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
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-darkText']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-darkCardBgColor']} */ ;
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
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
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
            input: input,
            error: error,
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
