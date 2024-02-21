import * as express from "express";
import catRouter from "./cats/cats.route";
const app: express.Express = express();

// 싱글톤 패턴
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }
  private setRoute() {
    // router
    this.app.use(catRouter);
  }
  private setMiddleware() {
    // ---- middleware ----
    // logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is middleware");
      next(); // 다음 라우터 실행
    });

    // json middleware
    this.app.use(express.json());

    // route middleware
    this.setRoute();

    // middleware for 404 error
    this.app.use((req, res, next) => {
      console.log("this is middleware");
      res.send({ error: "404 not found Error!" });
    });
  }
  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on");
    });
  }
}

function init() {
  const server = new Server(); // 서버 인스턴스 생성
  server.listen(); // 서버의 listen 실행
}

init(); // init 함수 실행
