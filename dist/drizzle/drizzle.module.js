"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrizzleModule = exports.PG_CONNECTION = void 0;
const node_postgres_1 = require("drizzle-orm/node-postgres");
const common_1 = require("@nestjs/common");
const env_1 = require("../env");
exports.PG_CONNECTION = "PG_CONNECTION";
let DrizzleModule = class DrizzleModule {
};
exports.DrizzleModule = DrizzleModule;
exports.DrizzleModule = DrizzleModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: exports.PG_CONNECTION,
                useFactory: async () => {
                    return (0, node_postgres_1.drizzle)(env_1.DATABASE_URL);
                },
            },
        ],
        exports: [exports.PG_CONNECTION],
    })
], DrizzleModule);
//# sourceMappingURL=drizzle.module.js.map