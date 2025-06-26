"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneCallGroupSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.phoneCallGroupSchema = (0, pg_core_1.pgTable)("phone_call_groups", {
    id: (0, pg_core_1.serial)().primaryKey().notNull(),
});
//# sourceMappingURL=phone-call-groups.schema.js.map