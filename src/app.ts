import * as express from "express";
import catRouter from "./cats/cats.route";
const app: express.Express = express();
const router = express.Router();
// middleware

// logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  next(); // 다음 라우터 실행
});

// json middleware
app.use(express.json());

// router
app.use(catRouter);

// middleware for 404 error
app.use((req, res, next) => {
  console.log("this is middleware");
  res.send({ error: "404 not found Error!" });
});

app.listen(8000, () => {
  console.log("server is on");
});
