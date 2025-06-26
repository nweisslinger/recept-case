import { CreatePhoneCallInput, PhoneCall, PhoneCallStatus } from "./phone-calls.type";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "drizzle/schema";
export declare class PhoneCallsRepository {
    private db;
    constructor(db: NodePgDatabase<typeof schema>);
    findAll(): Promise<PhoneCall[]>;
    create(input: CreatePhoneCallInput): Promise<PhoneCall>;
    updateStatus(id: number, status: PhoneCallStatus): Promise<PhoneCall>;
}
