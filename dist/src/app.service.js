"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const phone_calls_repository_1 = require("./modules/phone-calls/phone-calls.repository");
let AppService = class AppService {
    constructor(phoneCallsRepository) {
        this.phoneCallsRepository = phoneCallsRepository;
    }
    async getMainHTMLPage() {
        const phoneCalls = await this.phoneCallsRepository.findAll();
        const tableRows = phoneCalls
            .map((call) => `
      <tr>
        <td>${call.id}</td>
        <td>${call.phoneNumber}</td>
        <td>${call.status}</td>
        <td>${call.createdAt}</td>
      </tr>
    `)
            .join("");
        return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Phone Calls</title>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h1>Phone Calls</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </body>
      </html>
    `;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [phone_calls_repository_1.PhoneCallsRepository])
], AppService);
//# sourceMappingURL=app.service.js.map