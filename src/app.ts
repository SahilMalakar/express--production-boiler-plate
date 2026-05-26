import { ServerConfig } from "./config/index.js";
import { pingHandler } from "./modules/health/ping.controller.js";
import { app } from "./server.js";

// Health check routes
app.use("/api/v1/ping",pingHandler);

app.listen(
    ServerConfig.PORT,
    (): void => {
        console.log(`server is running on http://localhost:${ServerConfig.PORT}`);
        console.log(`Press Ctrl + C to stop the server`);
});