const app = require("./app");
const connectDatabase = require("./db/Database");

// Handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server for handeling uncaught exception`);
});

// create Server
const server = app.listen(process.env.PORT, () => {
  (async () => {
    connectDatabase();
  })();
  console.log(`Server is running on port ${process.env.PORT}`);
});

// unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err?.message}`);
  console.log(`Shutting down the server for unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
