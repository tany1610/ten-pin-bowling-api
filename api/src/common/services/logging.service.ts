import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggingService {
  private logsDir: string;

  constructor() {
    this.logsDir = path.join(process.cwd(), 'logs');
    
    // Ensure logs directory exists
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir);
    }
  }

  logError(errorDetails: Record<string, any>) {
    const fileName = `${new Date().toISOString().split('T')[0]}.log`;
    const filePath = path.join(this.logsDir, fileName);

    const logMessage = JSON.stringify(errorDetails, null, 2) + '\n';

    fs.appendFileSync(filePath, logMessage, 'utf8');
  }
}
