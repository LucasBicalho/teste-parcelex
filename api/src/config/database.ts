import mongoose from "mongoose";

class Database {
  private DATABASE_URI =
    "mongodb+srv://admin:admin@cluster0.zzzsl.mongodb.net/teste?retryWrites=true&w=majority";
  private DATABASE_CONNECTION: mongoose.Connection;

  constructor() {}

  async createConnection() {
    try {
      await mongoose.connect(this.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      this.DATABASE_CONNECTION = mongoose.connection;
      console.log("conectado ao banco de dados");
    } catch (error) {
      throw error;
    }
  }

  closeConnection(message: string, callback: Function) {
    this.DATABASE_CONNECTION.close(() => {
      console.log("Mongoose foi desconectado pelo: " + message);
      callback();
    });
  }
}

export default Database;
