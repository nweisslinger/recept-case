import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PhoneCallsModule } from "./modules/phone-calls/phone-calls.module";
import { DrizzleModule } from "drizzle/drizzle.module";
import { PhoneCallGroupsModule } from "./modules/phone-call-groups/phone-call-groups.module";

@Module({
  imports: [PhoneCallsModule, PhoneCallGroupsModule, DrizzleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
