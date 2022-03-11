import App from "./app.js";

const host = process.env.API_HOST;
const port = process.env.API_PORT;

App.listen(port, () => {
  console.info(`⚡ Server running on ${host}:${port}`);
});
