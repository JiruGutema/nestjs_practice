import { Body, Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { json } from 'stream/consumers';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  html_response_email: string = `
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
        .container { background: #fff; max-width: 600px; margin: 40px auto; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);}
        .header { padding: 20px; border-radius: 8px 8px 0 0; text-align: center;}
        .content { margin: 20px 0; color: #222; }
        .footer { color: #888; font-size: 12px; text-align: center; margin-top: 30px;}
        .button { padding: 12px 24px; border-radius: 4px; text-decoration: none; display: inline-block; margin-top: 20px;}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Official Job Offer from Google</h1>
        </div>
        <div class="content">
          <p>Dear <strong>Jiru Gutema</strong>,</p>
          <p>
            We are delighted to formally offer you the position of <strong>Software Engineer</strong> at <strong>Google</strong>. Your skills, experience, and passion for technology have impressed our team, and we are confident you will make a significant contribution to our organization.
          </p>
          <p>
            <strong>Position:</strong> Software Engineer<br>
            <strong>Location:</strong> 1600 Amphitheatre Parkway, Mountain View, CA 94043<br>
            <strong>Start Date:</strong> feb 2027<br>
            <strong>Annual Salary:</strong> 120k USD<br>
            <strong>Benefits:</strong> Comprehensive health insurance, 401(k) plan, paid time off, wellness programs, and more.
          </p>
          <p>
            Please review the attached offer letter for further details regarding your employment, compensation, and benefits. To accept this offer, please click the button below or contact us if you have any questions.
          </p>
          <a href="https://google.com/jirugutema" class="button">View & Accept Offer</a>
          <p>
            We look forward to welcoming you to Google and working together to shape the future of technology.
          </p>
          <p>
            Sincerely,<br>
            <strong>The Google Recruitment Team</strong>
          </p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Google. All rights reserved.<br>
          1600 Amphitheatre Parkway, Mountain View, CA 94043<br>
          <a href="https://www.google.com/privacy">Privacy Policy</a> | <a href="https://www.google.com/terms">Terms of Service</a>
        </div>
      </div>
    </body>
  </html>
`;

  @Get("/")
  @HttpCode(300)
  getHello(): any {

    return this.html_response_email;

  }

  @Get("/askquestion")
  askquestion(): String {
    return "What is your name ?"
  }

    

}
