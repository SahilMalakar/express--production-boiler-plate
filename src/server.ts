import express, { type Express } from "express";
import { ServerConfig } from "./config/index.js";
import { pingHandler } from "./modules/health/ping.controller.js";

const app: Express = express();

// Health check routes
app.use(pingHandler)


app.listen(ServerConfig.PORT, (): void => {
  console.log(`server is running on http://localhost:${ServerConfig.PORT}`);
  console.log(`Press Ctrl + C to stop the server`);
});
