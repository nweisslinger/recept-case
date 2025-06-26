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
exports.PhoneCallGroupsRepository = void 0;
const common_1 = require("@nestjs/common");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const drizzle_module_1 = require("../../../drizzle/drizzle.module");
const schema = require("../../../drizzle/schema");
const drizzle_orm_1 = require("drizzle-orm");
let PhoneCallGroupsRepository = class PhoneCallGroupsRepository {
    constructor(db) {
        this.db = db;
    }
    async findAll() {
        return this.db.select().from(schema.phoneCallGroupSchema);
    }
    async findById(id) {
        const [group] = await this.db
            .select()
            .from(schema.phoneCallGroupSchema)
            .where((0, drizzle_orm_1.eq)(schema.phoneCallGroupSchema.id, id));
        return group || null;
    }
    async create(input) {
        return this.db
            .insert(schema.phoneCallGroupSchema)
            .values(input)
            .returning()
            .then(([group]) => group);
    }
    async delete(id) {
        await this.db
            .delete(schema.phoneCallGroupSchema)
            .where((0, drizzle_orm_1.eq)(schema.phoneCallGroupSchema.id, id));
    }
};
exports.PhoneCallGroupsRepository = PhoneCallGroupsRepository;
exports.PhoneCallGroupsRepository = PhoneCallGroupsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(drizzle_module_1.PG_CONNECTION)),
    __metadata("design:paramtypes", [node_postgres_1.NodePgDatabase])
], PhoneCallGroupsRepository);
//# sourceMappingURL=phone-call-groups.repository.js.map