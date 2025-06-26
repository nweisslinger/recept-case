"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneCallGroupsController = void 0;
const common_1 = require("@nestjs/common");
const phone_call_groups_repository_1 = require("./phone-call-groups.repository");
let PhoneCallGroupsController = class PhoneCallGroupsController {
    constructor(phoneCallGroupsRepository) {
        this.phoneCallGroupsRepository = phoneCallGroupsRepository;
    }
    create(body) {
        return this.phoneCallGroupsRepository.create(body);
    }
    findAll() {
        return this.phoneCallGroupsRepository.findAll();
    }
    findById(id) {
        return this.phoneCallGroupsRepository.findById(id);
    }
    delete(id) {
        return this.phoneCallGroupsRepository.delete(id);
    }
};
exports.PhoneCallGroupsController = PhoneCallGroupsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PhoneCallGroupsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhoneCallGroupsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PhoneCallGroupsController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PhoneCallGroupsController.prototype, "delete", null);
exports.PhoneCallGroupsController = PhoneCallGroupsController = __decorate([
    (0, common_1.Controller)("phone_call_groups"),
    __metadata("design:paramtypes", [phone_call_groups_repository_1.PhoneCallGroupsRepository])
], PhoneCallGroupsController);
//# sourceMappingURL=phone-call-groups.controllers.js.map