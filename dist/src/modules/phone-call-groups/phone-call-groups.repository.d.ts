import { CreatePhoneCallGroupInput, PhoneCallGroup } from "./phone-call-groups.type";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "drizzle/schema";
export declare class PhoneCallGroupsRepository {
    private db;
    constructor(db: NodePgDatabase<typeof schema>);
    findAll(): Promise<PhoneCallGroup[]>;
    findById(id: number): Promise<PhoneCallGroup | null>;
    create(input: CreatePhoneCallGroupInput): Promise<PhoneCallGroup>;
    delete(id: number): Promise<void>;
}
