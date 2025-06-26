import { Module } from '@nestjs/common';
import { PhoneCallsController } from './phone-calls.controllers';
import { PhoneCallsRepository } from './phone-calls.repository';

@Module({
  controllers: [PhoneCallsController],
  providers: [PhoneCallsRepository],
  exports: [PhoneCallsRepository],
})
export class PhoneCallsModule {}
