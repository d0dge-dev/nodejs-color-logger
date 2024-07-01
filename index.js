class Logs {
    /**
     * Creates a new Logs instance.
     * @example
     * const logger = new Logs()
     * logger.color('red').style('bold').log('This is a bold red message');
     */
    constructor() {
        this.colorCode = '';
        this.styleCode = '';
        this.typeCode = '';
        this.timestampCode = '';         
        this.colors = {
            black: "\x1b[30m",
            red: "\x1b[31m",
            green: "\x1b[32m",
            yellow: "\x1b[33m",
            blue: "\x1b[34m",
            magenta: "\x1b[35m",
            cyan: "\x1b[36m",
            white: "\x1b[37m",
            brightBlack: "\x1b[90m",
            brightRed: "\x1b[91m",
            brightGreen: "\x1b[92m",
            brightYellow: "\x1b[93m",
            brightBlue: "\x1b[94m",
            brightMagenta: "\x1b[95m",
            brightCyan: "\x1b[96m",
            brightWhite: "\x1b[97m",
        };
        this.styles = {
            bold: "\x1b[1m",
            dim: "\x1b[2m",
            italic: "\x1b[3m",
            underscore: "\x1b[4m",
            reverse: "\x1b[7m",
            hidden: "\x1b[8m",
            strikethrough: "\x1b[9m",
            backoneline: "\x1b[1A",
        }
        this.types = {
            success: this.colors.green + "[SUCCESS]\x1b[0m ",
            error: this.colors.brightRed + "[ERROR]\x1b[0m ",
            warning: this.colors.yellow + "[WARNING]\x1b[0m ",
            info: this.colors.brightBlue + "[INFO]\x1b[0m ",
            debug: this.colors.brightMagenta + "[DEBUG]\x1b[0m ",
        }
    }


    /**
     * Sets the color for the log message.
     * @param {('black'|'red'|'green'|'yellow'|'blue'|'magenta'|'cyan'|'white'|'brightBlack'|'brightRed'|'brightGreen'|'brightYellow'|'brightBlue'|'brightMagenta'|'brightCyan'|'brightWhite')} color
     * @example
     * logger.color('red').log('This is a red message');
     */
    color(color) {
        this.colorCode = this.colors[color];
        return this; // return this to allow chaining
    }

    /**
     * Sets the style for the log message.
     * @param {('bold'|'dim'|'italic'|'underscore'|'blink'|'reverse'|'hidden'|'strikethrough'|'backoneline'|'cleanthisline')} style
     * @example
     * logger.color('red').style('bold').log('This is a bold red message');
     * @example
     * logger.color('green').style('backoneline').log('This message will be overwritten by the next one');
     */
    style(style) {
        this.styleCode = this.styleCode + this.styles[style];
        return this;
    }

    /**
     * Sets the type for the log message.
     * @param {('success'|'error'|'warning'|'info'|'debug')} type
     * @example
     * logger.type('success').log('This is a success message');
     */
    type(type) {
        this.typeCode = this.typeCode + this.types[type];
        return this;
    }

    /**
     * Sets the timestamp for the log message.
     * @param {string} [local] - The locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
     * @param {object} [options] - An object that contains one or more properties that specify comparison options.
     */
    timestamp(...args) {
        const local = args[0]
        if (!local) {
            this.timestampCode = new Date().toISOString()
        } else {
            this.timestampCode = new Date().toLocaleString(...args)
        }
        this.timestampCode
        return this;
    }

    /**
     * Logs a message to the console with the specified color.
     * @param {string} message - The message to log.
     */
    log(...args) {
        const msg = [...args];
        if (this.styleCode) {
            msg.unshift(this.styleCode);
            this.styleCode = '';
        }
        if (this.colorCode) {
            msg.unshift(this.colorCode);
            this.colorCode = '';
        }
        if (this.typeCode) {
            msg.unshift(this.typeCode);
            this.typeCode = '';
        }
        if (this.timestampCode) {
            msg.unshift("\x1b[0m" + this.styles.reverse + this.timestampCode + "\x1b[0m ");
            this.timestampCode = '';
        }
        msg.push("\x1b[0m");
        console.log(msg.join(''));
    }

    /**
     * Logs a error message to the console with the specified color.
     * @param {string} message - The message to log.
     */
    error(...args) {
        this.type('error').log(...args);
    }

    /**
     * Logs a warning message to the console with the specified color.
     * @param {string} message - The message to log.
     */
    warning(...args) {
        this.type('warning').log(...args);
    }

    /**
     * Logs a success message to the console with the specified color.
     * @param {string} message - The message to log.
     */
    success(...args) {
        this.type('success').log(...args);
    }

    /**
     * Logs a info message to the console with the specified color.
     * @param {string} message - The message to log.
     */
    info(...args) {
        this.type('info').log(...args);
    }

    /**
     * Logs a debug message to the console with the specified color.
     * @param {string} message - The message to log.
     */
    debug(...args) {
        this.type('debug').log(...args);
    }
}

module.exports = new Logs;