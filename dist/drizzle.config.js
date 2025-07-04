"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const drizzle_kit_1 = require("drizzle-kit");
const env_1 = require("./env");
exports.default = (0, drizzle_kit_1.defineConfig)({
    out: "./drizzle",
    schema: "./src/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: env_1.DATABASE_URL,
    },
});
//# sourceMappingURL=drizzle.config.js.map