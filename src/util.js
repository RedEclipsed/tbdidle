let LOGS = 0;
let MAX_LOGS = 10000;
let warned = false;

/**
 * Console.log with an anti-browser crash feature!
 * 
 * @param {string} text - The text that you want to be sent to console
 */
const log = (text) => {
    if (LOGS <= MAX_LOGS) {
        console.log(text);
        LOGS++;
    } else {
        if (!warned) console.warn("The number of console logs has exceded the limit. Run LOGS_RESET()");
        warned = true;
    }
}
/**
 * console.warn under a new name :star: :star:
 *  
 * @param {string} text - The text that you want to send as a warning
 */
const warn = (text) => {
    console.warn(text);
}

/**
 * Resets the log counter back to 0
 */
const LOGS_RESET = () => {
    LOGS = 0;
    warned = false;
}

/**
 * Shows or modifies the maximum number of logs allowed before log() stops.
 * 
 * @param {number} MAX - Leave empty if you want to get the maximum number of logs, or put a number to modify it.
 */
const SET_LOG_MAX = (MAX) => {
    if (typeof MAX === "undefined") {
        console.log("Max logs: " + MAX_LOGS);
    } else {
        console.log("Max logs has been switched from " + MAX_LOGS + " to " + MAX);
        MAX_LOGS = MAX;
    }
}









