import {dateFormat} from "./dateHelper";
import {NextApiRequest} from "next";

export function isEmailFormatValid(email:string){
    let emailRegexPattern = /^[a-zA-Z0-9-_]+(?:\.?[a-zA-Z0-9-_]+)*(?:\+[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_])*)*@[a-zA-Z0-9-_]+\.[a-zA-Z0-9-_]+/gm;
    return emailRegexPattern.test(email.trim());
}

export function isNothing(value:any){
    if (isEmptyOrUndefined(value)) return true;
    return value === false || value === 0;
}

export function isNullOrUndefined(value:any){
    if (value === void 0) return true;
    return value === null;
}

export function isEmptyOrUndefined(value:any){
    if ((typeof value === "string" || value instanceof String) && value.trim() === "") return true;
    if (value?.length === 0) return true;
    try{
        let val = JSON.stringify(value);
        if (val === "{}") return true;
    } catch {}
    return isNullOrUndefined(value);
}

export function getReadTime(content:string, unitDefinition={
    secondSingular: "secs",
    secondPlural: "sec",
    minuteSingular: "min",
    minutePlural: "mins"
}){
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s/g).length;
    const minutes = wordCount / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    if (readTime > 1) return `${readTime} ${unitDefinition.minutePlural}`;
    else if (readTime === 1) return `1 ${unitDefinition.minuteSingular}`;
    else return `${readTime * 60} ${unitDefinition.secondPlural}`;
}

export function cyrb53(str:string, seed:number = 0) {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

export function randomString(len:number=18){
    return [...Array(len)].map(_=>(~~(Math.random()*36)).toString(36)).join('');
}

export function titleCase(str:string){
    if (str.length < 1) return str;
    return str[0].toUpperCase() + str.substr(1);
}

export type ClientIdBuilderOptions = {
    req:NextApiRequest,
    ipAddress?:string,
    userAgent?:string,
    host?:string,
    lang?:string,
} | {
    ipAddress:string,
    userAgent:string,
    host:string,
    lang:string,
    req?:NextApiRequest
};

export function calculateClientId(opt:ClientIdBuilderOptions){
    let host = opt.host ?? opt.req.headers["host"] ?? "localhost:3000";

    let calculatedIp = !opt ? null : (opt.req.headers["x-forwarded-for"] || opt.req.socket.remoteAddress).toString();
    let ip = (opt.ipAddress ?? calculatedIp ?? "0.0.0.0").replace('::ffff:', '');
    let ua = opt.userAgent ?? opt.req.headers["user-agent"] ?? randomString(8);
    let ho = host != "localhost:3000" ? host : "api.projectfunction.io";
    let lg = opt.lang ?? opt.req.headers["accept-language"] ?? "en-US";
    let st = dateFormat(new Date(), "MMMM YYYY");

    return cyrb53([ip, ho, ua, lg, st].join(";")).toString(16);
}

export function safeStringify(obj){
    return JSON.stringify(obj, (() => {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    })());
}

export const throttle = (()=>{
    let cache = {};

    return (callback:any, timeframeMs:number)=>{
        let key = callback.toString();
        if (cache[key]) return;

        cache[key] = setTimeout(()=>{
            cache[key] = undefined;
            callback();
        }, timeframeMs);

        return {
            cancel: ()=>{
                cache[key] = undefined;
            }
        }
    }
})();

export function isPathLocal(path:string){
    if (path.indexOf(":") === -1) return true;
    for (let protocolStart of ["https:", "http:", "ftp:", "sftp:", "ftps:", "file:"]){
        if (path.toLowerCase().startsWith(protocolStart)) return false;
    }
    return true;
}

export function arrayOverlaps<T = string|number>(arr1:Array<T>, arr2:Array<T>){
    let [bigger, smaller] = arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1];
    for (let item of bigger){
        if (smaller.findIndex(value => item === value) > -1) return true;
    }
    return false;
}

export function dateDiffInDays(pastDate:Date, futureDate:Date){
    let difference = futureDate.getTime() - pastDate.getTime();
    return difference / (1000 * 60 * 60 * 24)
}

export function createUrl(host:string, queryParams:{[key:string]:string}){
    let url = `${host}?`;

    for (let property in queryParams){
        url += `${property}=${encodeURIComponent(queryParams[property])}&`;
    }

    return url.substr(0, url.length - 1);
}