import express from "express";

const expressApp = express();

expressApp.use((_, response) => {
  response.json({
    hello: "World!",
  });
});

export default expressApp;
