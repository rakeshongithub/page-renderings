// this is the logger for the browser
// import axios from 'axios';
import pino from 'pino';
import dayjs from 'dayjs';
import { MMDDYYY } from './constants';

const pinoConfig = {
  browser: {
    Object: true
  },
  formatters: {
    level: (label) => {
      return { level: label };
    }
  }
};

const logger = pino(pinoConfig);

export const info = (msg) =>
  logger.info({
    ts: dayjs().format(MMDDYYY),
    level: 'INFO',
    message: msg
  });
export const error = (msg) =>
  logger.error({
    ts: dayjs().format(MMDDYYY),
    level: 'ERROR',
    message: msg
  });
export const warn = (msg) =>
  logger.warn({
    ts: dayjs().format(MMDDYYY),
    level: 'WARN',
    message: msg
  });

export default logger;
