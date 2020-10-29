import { ResteCOptions } from './ResteCOptions';
import { StatusCode } from './StatusCode';

export class ResteC {
    private static options: ResteCOptions;

    public static setOptions(options: ResteCOptions): void {
        ResteC.options = options;
    }

    public static message(status: StatusCode, message: string, stack?: any): void {
        const resp = `${ResteC.dateFormat()} ${ResteC.statusFormat(status)} ${ResteC.messageFormat(message)}`;

        console.log(resp);

        if (stack) {
            console.log(stack);
        }
    }

    public static response(status: StatusCode, message: string, data?: any): { status: StatusCode, message: string, data?: any } {
        return {status, message, data};
    }

    private static statusFormat(status: StatusCode): string {
        switch (status) {
            case StatusCode.SUCCESS:
                return ResteC.options?.raw ? `${status}\t` : `\x1b[32m${status}\x1b[0m\t`;
            case StatusCode.INFORMATION:
                return ResteC.options?.raw ? `${status}\t` : `\x1b[34m${status}\x1b[0m\t`;
            case StatusCode.ERROR:
                return ResteC.options?.raw ? `${status}\t\t` : `\x1b[31m${status}\x1b[0m\t\t`;
            case StatusCode.TRACE:
                return ResteC.options?.raw ? `${status}\t\t` : `\x1b[35m${status}\x1b[0m\t\t`;
            case StatusCode.DEBUGGER:
                return ResteC.options?.raw ? `${status}\t` : `\x1b[94m${status}\x1b[0m\t`;
            default:
                return ResteC.options?.raw ? `${status}\t` : `\x1b[95m${status}\x1b[0m\t`;
        }
    }

    private static dateFormat(): string {
        const date = new Date();
        const addZero = (num: number, moreThenTen?: boolean) => {
            if (num < 10) {
                return '0' + num;
            } else if (num < 100 && moreThenTen) {
                return '0' + num;
            } else {
                return num;
            }
        };

        const format =
            `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`
            + ` ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
            + `:${addZero(date.getMilliseconds(), true)}`;

        return ResteC.options?.raw ? `[${format}]` : `\x1b[36m[${format}]\x1b[0m`;
    }

    private static messageFormat(message: string): string {
        return ResteC.options?.raw ? message : `\x1b[33m${message}\x1b[0m`;
    }
}
