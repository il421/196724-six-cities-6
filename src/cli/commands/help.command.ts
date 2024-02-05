import { Command } from './command.interface.js';
import { Commands } from './commands.enums.js';
import Chalk from 'chalk';
import { inject, injectable } from 'inversify';
import { Components } from '../../shared/types/index.js';
import { ILogger } from '../../shared/libs/logger/index.js';

@injectable()
export class HelpCommand implements Command {
  constructor(@inject(Components.ConsoleLogger) private readonly logger: ILogger,) {
  }

  public getName(): string {
    return Commands.help;
  }

  public async execute(..._parameters: string[]): Promise<void> {
    this.logger.info(`
      ${Chalk.green('Программа для подготовки данных для REST API сервера.')}
      ${Chalk.blue('Пример:')} cli.js --<command> [--arguments]
      ${Chalk.blue('Команды:')}
        --version:                        ✓ выводит номер версии
        --help:                           ✓ печатает этот текст
        --import <path>:                  ✓ импортирует данные из TSV
        --generate <count> <path> <url>:  ✓ generate random offers data and write TSV file to /mocks
    `);
  }
}
