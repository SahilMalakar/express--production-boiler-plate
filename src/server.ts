import express, { type Request, type Response, type Express } from "express";

const app: Express = express();

const PORT: number = 6001;

app.get("/ping", async (_req: Request, res: Response) => {
  res.status(200).json({
    msg: "Pong",
  });
});

app.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
  console.log(`Press Ctrl + C to stop the server`);
});
