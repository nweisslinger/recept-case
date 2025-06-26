import { Inject, Injectable } from "@nestjs/common";
import {
  CreatePhoneCallInput,
  PhoneCall,
  PhoneCallStatus,
} from "./phone-calls.type";

import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { PG_CONNECTION } from "drizzle/drizzle.module";
import * as schema from "drizzle/schema";
import { eq } from "drizzle-orm";

@Injectable()
export class PhoneCallsRepository {
  constructor(
    @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>
  ) {}

  async findAll(): Promise<PhoneCall[]> {
    return this.db.select().from(schema.phoneCallSchema);
  }

  async create(input: CreatePhoneCallInput): Promise<PhoneCall> {
    return this.db
      .insert(schema.phoneCallSchema)
      .values(input)
      .returning()
      .then(([call]) => call);
  }

  async updateStatus(id: number, status: PhoneCallStatus): Promise<PhoneCall> {
    const [call] = await this.db
      .update(schema.phoneCallSchema)
      .set({ status })
      .where(eq(schema.phoneCallSchema.id, id))
      .returning();

    if (!call) {
      throw new Error("Phone call not found");
    }

    return call;
  }
}
