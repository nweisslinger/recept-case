"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneCallsModule = void 0;
const common_1 = require("@nestjs/common");
const phone_calls_controllers_1 = require("./phone-calls.controllers");
const phone_calls_repository_1 = require("./phone-calls.repository");
let PhoneCallsModule = class PhoneCallsModule {
};
exports.PhoneCallsModule = PhoneCallsModule;
exports.PhoneCallsModule = PhoneCallsModule = __decorate([
    (0, common_1.Module)({
        controllers: [phone_calls_controllers_1.PhoneCallsController],
        providers: [phone_calls_repository_1.PhoneCallsRepository],
        exports: [phone_calls_repository_1.PhoneCallsRepository],
    })
], PhoneCallsModule);
//# sourceMappingURL=phone-calls.module.js.map