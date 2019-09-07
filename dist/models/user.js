"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const UserSchema = new mongoose_1.Schema({
    image_src: { type: String, required: false },
    name: { type: String, required: true },
    moral_value: { type: Number, required: true },
});
// Export the model and return your IUser interface
exports.default = mongoose_1.default.model('User', UserSchema, "users");
//# sourceMappingURL=user.js.map