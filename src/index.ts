import { log } from "console";
import express from "express";
import type { Request, Response } from "express";
import { DEFAULT_PORT } from "src/utils/constants";

const PORT = process.env.PORT || DEFAULT_PORT;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hellow world");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
