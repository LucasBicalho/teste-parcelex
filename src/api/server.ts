import express from "express";
import cors from "cors";

import Database from "./config/database";
import ProductRouter from "./resources/product/routes";

const PORT = 3333;

const app = express();
const database = new Database();

database
  .createConnection()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`servidor está rodando na porta ${PORT}`)
    )
  )
  .catch((error) =>
    console.log("erro ao conectar no banco de dados\nErro: " + error)
  );

app.use(cors());
app.use(express.json());
app.use((_, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(ProductRouter);

process.once("SIGUSR2", () =>
  database.closeConnection("nodemon restart", () =>
    process.kill(process.pid, "SIGUSR2")
  )
);
process.on("SIGINT", () =>
  database.closeConnection("execução foi interrompida", () => process.exit(0))
);
