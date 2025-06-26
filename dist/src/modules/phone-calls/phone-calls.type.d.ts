import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { phoneCallSchema } from "drizzle/schema";
export type PhoneCall = InferSelectModel<typeof phoneCallSchema>;
export type PhoneCallStatus = PhoneCall["status"];
export type CreatePhoneCallInput = InferInsertModel<typeof phoneCallSchema>;
