import { ServerConfig } from "./config/index.js";
import { heathcheckRouter } from "./modules/health/ping.route.js";
import { app } from "./server.js";

// Health check routes
app.use("/api/v1", heathcheckRouter);


const server = app.listen(ServerConfig.PORT, (): void => {
  console.log(`server is running on http://localhost:${ServerConfig.PORT}`);
  console.log(`Press Ctrl + C to stop the server`);
});

const gracefulShutdown = (): void => {
    console.log("Shutting down server...");
    try{
        server.close(() => {
            console.log("HTTP Server closed.");
            process.exit(0);
        });
    } catch (error) {
        console.error("Error occurred while shutting down server:", error);
        process.exit(1);
    }
}

// Handle termination signals for graceful shutdown
process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);