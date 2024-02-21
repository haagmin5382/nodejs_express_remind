import * as express from "express";
import { Cat, CatType } from "./cats.model";

const router = express.Router();

// ----router----
// READ 고양이 전체 데이터 가져옴
router.get("/cats", (req: express.Request, res: express.Response) => {
  try {
    // 더미데이터지만 db에서 데이터를 가져온다고 생각하고 try catch 구문 작성
    const cats = Cat;
    // throw new Error("db connect error"); // catch로 넘어감
    res.status(200).send({ success: true, data: cats });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// READ 특정 고양이 데이터 가져옴
router.get("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    // 더미데이터지만 db에서 데이터를 가져온다고 생각하고 try catch 구문 작성
    const { id } = req.params;
    const cat = Cat.find((cat) => {
      return cat.id === id;
    });

    // throw new Error("db connect error"); // catch로 넘어감
    res.status(200).send({ success: true, data: { cat } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// CREATE 새로운 고양이 추가

router.post("/cats", (req: express.Request, res: express.Response) => {
  try {
    const data = req.body; // undefined, express에서 json을 읽을 수 있도록 미들웨어를 추가해줘야한다.
    // app.use(express.json());

    const cats = Cat;
    cats.push(data); // create
    console.log("enter data?", cats);
    res.status(201).send({ success: true, data: { cats } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router; // 위에서 get,post 등으로 등록한 router를 내보낸다.
