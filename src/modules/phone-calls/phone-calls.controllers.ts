import { Controller, Post, Get, Patch, Param, Body } from "@nestjs/common";
import { PhoneCallsRepository } from "./phone-calls.repository";
import { CreatePhoneCallInput, PhoneCallStatus } from "./phone-calls.type";

@Controller("phone_calls")
export class PhoneCallsController {
  constructor(private readonly phoneCallsRepository: PhoneCallsRepository) {}

  @Post()
  create(@Body() body: CreatePhoneCallInput) {
    return this.phoneCallsRepository.create(body);
  }

  @Get()
  findAll() {
    return this.phoneCallsRepository.findAll();
  }

  @Patch(":id/status")
  updateStatus(
    @Param("id") id: number,
    @Body() body: { status: PhoneCallStatus }
  ) {
    return this.phoneCallsRepository.updateStatus(id, body.status);
  }
}
