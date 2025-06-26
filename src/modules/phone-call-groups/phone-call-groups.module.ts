import { Module } from "@nestjs/common";
import { PhoneCallGroupsController } from "./phone-call-groups.controllers";
import { PhoneCallGroupsRepository } from "./phone-call-groups.repository";

@Module({
  controllers: [PhoneCallGroupsController],
  providers: [PhoneCallGroupsRepository],
  exports: [PhoneCallGroupsRepository],
})
export class PhoneCallGroupsModule {}
