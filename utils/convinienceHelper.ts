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