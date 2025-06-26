import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { phoneCallGroupSchema } from "drizzle/schema";
export type PhoneCallGroup = InferSelectModel<typeof phoneCallGroupSchema>;
export type CreatePhoneCallGroupInput = InferInsertModel<typeof phoneCallGroupSchema>;
