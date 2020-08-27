import "reflect-metadata";
import { createExpressServer } from "routing-controllers";

const app = createExpressServer({
    cors: true
});

app.listen(3000, () => {
    console.log('app is listening port : 3000');
  });