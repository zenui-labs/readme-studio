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
import { useStore } from "@stores/useStore";
export function fetchUserProfile(username) {
    return __awaiter(this, void 0, void 0, function () {
        var store, res, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    store = useStore();
                    store.clearError();
                    return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username))];
                case 1:
                    res = _a.sent();
                    if (!res.ok) {
                        if (res.status === 404) {
                            store.setError("User \"".concat(username, "\" not found"));
                            return [2 /*return*/, null];
                        }
                        else {
                            store.setError("Failed to fetch user data: ".concat(res.status));
                            return [2 /*return*/, null];
                        }
                    }
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    store.setGithubUserData(data);
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function fetchRepoInfo(owner, repo) {
    return __awaiter(this, void 0, void 0, function () {
        var store, res, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    store = useStore();
                    store.clearError();
                    return [4 /*yield*/, fetch("https://api.github.com/repos/".concat(owner, "/").concat(repo))];
                case 1:
                    res = _a.sent();
                    if (!res.ok) {
                        if (res.status === 404) {
                            store.setError("Repository \"".concat(owner, "/").concat(repo, "\" not found"));
                            return [2 /*return*/, null];
                        }
                        else {
                            store.setError("Failed to fetch repository data: ".concat(res.status));
                            return [2 /*return*/, null];
                        }
                    }
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    store.setGithubRepoData(data);
                    return [2 /*return*/, data];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export function fetchRepoContents(owner, repo) {
    return __awaiter(this, void 0, void 0, function () {
        var store, res, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    store = useStore();
                    store.clearError();
                    return [4 /*yield*/, fetch("https://api.github.com/repos/".concat(owner, "/").concat(repo, "/contents"))];
                case 1:
                    res = _a.sent();
                    if (!res.ok) {
                        if (res.status === 404) {
                            store.setError("Repository contents for \"".concat(owner, "/").concat(repo, "\" not found"));
                            return [2 /*return*/, null];
                        }
                        else {
                            store.setError("Failed to fetch repository contents: ".concat(res.status));
                            return [2 /*return*/, null];
                        }
                    }
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    store.setRepoContent(data);
                    return [2 /*return*/, data];
                case 3:
                    error_3 = _a.sent();
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
