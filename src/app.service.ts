import { Injectable } from "@nestjs/common";
import { PhoneCallsRepository } from "./modules/phone-calls/phone-calls.repository";

@Injectable()
export class AppService {
  constructor(private phoneCallsRepository: PhoneCallsRepository) {}

  async getMainHTMLPage(): Promise<string> {
    const phoneCalls = await this.phoneCallsRepository.findAll();

    const tableRows = phoneCalls
      .map(
        (call) => `
      <tr>
        <td>${call.id}</td>
        <td>${call.phoneNumber}</td>
        <td>${call.status}</td>
        <td>${call.createdAt}</td>
      </tr>
    `
      )
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
}
