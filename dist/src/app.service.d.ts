import { PhoneCallsRepository } from "./modules/phone-calls/phone-calls.repository";
export declare class AppService {
    private phoneCallsRepository;
    constructor(phoneCallsRepository: PhoneCallsRepository);
    getMainHTMLPage(): Promise<string>;
}
