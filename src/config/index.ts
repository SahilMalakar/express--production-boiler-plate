import dotenv from "dotenv";

// types 
type ServerConfigType = {
    PORT: number
}

// load the env in this config file
export function LoadEnv():void {
    dotenv.config();
    console.log("env variables loaded");
    
} 
LoadEnv();

export const ServerConfig: ServerConfigType = {
    PORT: Number(process.env.PORT) || 6000
}