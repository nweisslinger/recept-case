"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneCallGroupsModule = void 0;
const common_1 = require("@nestjs/common");
const phone_call_groups_controllers_1 = require("./phone-call-groups.controllers");
const phone_call_groups_repository_1 = require("./phone-call-groups.repository");
let PhoneCallGroupsModule = class PhoneCallGroupsModule {
};
exports.PhoneCallGroupsModule = PhoneCallGroupsModule;
exports.PhoneCallGroupsModule = PhoneCallGroupsModule = __decorate([
    (0, common_1.Module)({
        controllers: [phone_call_groups_controllers_1.PhoneCallGroupsController],
        providers: [phone_call_groups_repository_1.PhoneCallGroupsRepository],
        exports: [phone_call_groups_repository_1.PhoneCallGroupsRepository],
    })
], PhoneCallGroupsModule);
//# sourceMappingURL=phone-call-groups.module.js.map