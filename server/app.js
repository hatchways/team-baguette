const colors = require("colors");
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { notFound, errorHandler } = require("./middleware/error");
const connectDB = require("./db");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const requestsRouter = require("./routes/requests");
const profileRouter = require("./routes/profile");
const imageRouter = require("./routes/image");

const { json, urlencoded } = express;
const cookie = require('cookie');
const { jwtVerifyUser } = require('./middleware/jwtAuth');

connectDB();
const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.use(async (socket, next) => {
  if (socket.handshake.headers.cookie) {
    const authToken = cookie.parse(socket.handshake.headers.cookie).token;
    if (authToken) {
      const foundUser = await jwtVerifyUser(authToken, next)
      if (foundUser) {
        console.log(foundUser)
        next();
      } else {
        next(new Error('Invalid Auth'))
      }
    } else {
      next(new Error('No Auth Provided'))
    }
  } else {
    next(new Error('Auth Error'))
  }
})

io.on("connection", (socket) => {
  socket.on('emit-msg', (num, str) => {
    console.log(num, '\n', str)
  })
});

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/requests", requestsRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/profiles", profileRouter);
app.use("/image", imageRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname), "client", "build", "index.html")
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };
