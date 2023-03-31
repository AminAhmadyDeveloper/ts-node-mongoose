import "dotenv/config";
import { createServer } from "http";
import expressApp from "@apps/expressApp";

const appServer = createServer(expressApp);
const { PORT } = process.env;

appServer.listen(PORT, () =>
  console.log(`[http] server started on port: ${PORT}`)
);
