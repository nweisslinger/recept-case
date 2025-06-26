import { Controller, Post, Get, Delete, Param, Body } from "@nestjs/common";
import { PhoneCallGroupsRepository } from "./phone-call-groups.repository";
import { CreatePhoneCallGroupInput } from "./phone-call-groups.type";

@Controller("phone_call_groups")
export class PhoneCallGroupsController {
  constructor(
    private readonly phoneCallGroupsRepository: PhoneCallGroupsRepository
  ) {}

  @Post()
  create(@Body() body: CreatePhoneCallGroupInput) {
    return this.phoneCallGroupsRepository.create(body);
  }

  @Get()
  findAll() {
    return this.phoneCallGroupsRepository.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: number) {
    return this.phoneCallGroupsRepository.findById(id);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.phoneCallGroupsRepository.delete(id);
  }
}
