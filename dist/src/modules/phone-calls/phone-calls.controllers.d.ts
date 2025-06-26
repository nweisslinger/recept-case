import { PhoneCallsRepository } from "./phone-calls.repository";
import { CreatePhoneCallInput, PhoneCallStatus } from "./phone-calls.type";
export declare class PhoneCallsController {
    private readonly phoneCallsRepository;
    constructor(phoneCallsRepository: PhoneCallsRepository);
    create(body: CreatePhoneCallInput): Promise<{
        id: number;
        phoneNumber: string;
        createdAt: string;
        status: "New" | "Viewed";
    }>;
    findAll(): Promise<{
        id: number;
        phoneNumber: string;
        createdAt: string;
        status: "New" | "Viewed";
    }[]>;
    updateStatus(id: number, body: {
        status: PhoneCallStatus;
    }): Promise<{
        id: number;
        phoneNumber: string;
        createdAt: string;
        status: "New" | "Viewed";
    }>;
}
