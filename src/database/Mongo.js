import mongoose from "mongoose";

class Mongo {
  async connectToDatabase(uri) {
    try {
      await mongoose.connect(uri);
      console.info("⚡ Connected to database");
    } catch (error) {
      console.error("⛔ Error trying to connect to database");
    }
  }
}

export default new Mongo();
