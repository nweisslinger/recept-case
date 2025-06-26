import { Inject, Injectable } from "@nestjs/common";
import {
  CreatePhoneCallGroupInput,
  PhoneCallGroup,
} from "./phone-call-groups.type";

import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { PG_CONNECTION } from "drizzle/drizzle.module";
import * as schema from "drizzle/schema";
import { eq } from "drizzle-orm";

@Injectable()
export class PhoneCallGroupsRepository {
  constructor(
    @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>
  ) {}

  async findAll(): Promise<PhoneCallGroup[]> {
    return this.db.select().from(schema.phoneCallGroupSchema);
  }

  async findById(id: number): Promise<PhoneCallGroup | null> {
    const [group] = await this.db
      .select()
      .from(schema.phoneCallGroupSchema)
      .where(eq(schema.phoneCallGroupSchema.id, id));

    return group || null;
  }

  async create(input: CreatePhoneCallGroupInput): Promise<PhoneCallGroup> {
    return this.db
      .insert(schema.phoneCallGroupSchema)
      .values(input)
      .returning()
      .then(([group]) => group);
  }

  async delete(id: number): Promise<void> {
    await this.db
      .delete(schema.phoneCallGroupSchema)
      .where(eq(schema.phoneCallGroupSchema.id, id));
  }
}
