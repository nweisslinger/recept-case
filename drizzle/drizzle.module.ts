import { drizzle } from "drizzle-orm/node-postgres";
import { NodePgDatabase } from "drizzle-orm/node-postgres";

import { Global, Module } from "@nestjs/common";

import * as schema from "./schema";
import { DATABASE_URL } from "env";

export const PG_CONNECTION = "PG_CONNECTION";

@Global()
@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      useFactory: async () => {
        return drizzle(DATABASE_URL) as NodePgDatabase<typeof schema>;
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
