import { log } from "console";
import express from "express";
import type { Request, Response } from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hellow world");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
