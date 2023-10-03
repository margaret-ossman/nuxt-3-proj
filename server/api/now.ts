import { IncomingMessage, ServerResponse } from "http"
export default (req: IncomingMessage, res: ServerResponse) => {
    const time = new Date().toLocaleTimeString([], { hour12: true, hourCycle: 'h23' });
    return time
}