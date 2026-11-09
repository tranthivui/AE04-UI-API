import dotenv from "dotenv"

dotenv.config();

function requireEnv(name:string):string{
    const baseUrlValue=process.env[name];
    if(!baseUrlValue){
        throw new Error(`Thieu bien moi truong ${name}`);
    }
    return baseUrlValue;
}

export const ENV={
    baseUrl: requireEnv("BASE_URL"),
}