"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneCallSchema = exports.callStatus = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.callStatus = (0, pg_core_1.pgEnum)("call_status", ["New", "Viewed"]);
exports.phoneCallSchema = (0, pg_core_1.pgTable)("phone_calls", {
    id: (0, pg_core_1.serial)().primaryKey().notNull(),
    phoneNumber: (0, pg_core_1.varchar)("phone_number", { length: 255 }),
    createdAt: (0, pg_core_1.timestamp)("created_at", {
        withTimezone: true,
        mode: "string",
    }).defaultNow(),
    status: (0, exports.callStatus)(),
});
//# sourceMappingURL=phone-calls.schema.js.map