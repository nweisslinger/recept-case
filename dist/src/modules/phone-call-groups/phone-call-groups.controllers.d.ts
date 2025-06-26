import { PhoneCallGroupsRepository } from "./phone-call-groups.repository";
import { CreatePhoneCallGroupInput } from "./phone-call-groups.type";
export declare class PhoneCallGroupsController {
    private readonly phoneCallGroupsRepository;
    constructor(phoneCallGroupsRepository: PhoneCallGroupsRepository);
    create(body: CreatePhoneCallGroupInput): Promise<{
        id: number;
    }>;
    findAll(): Promise<{
        id: number;
    }[]>;
    findById(id: number): Promise<{
        id: number;
    }>;
    delete(id: number): Promise<void>;
}
