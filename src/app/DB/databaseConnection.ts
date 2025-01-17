import mongoose from "mongoose";

const uri = process.env.DB_LINK;

if (!uri) {
  throw new Error('Missing environment variable: "MONGODB_URI"');
}

// to avoid unnecessary re-connections during HMR.
let cached = (global as any).mongoose || { conn: null, promise: null };

const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri)
      .then((mongoose) => {
        console.log("Database Connected Successfully");
        return mongoose;
      })
      .catch((error) => {
        console.error("Database Connection Failed:", error);
        // throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

// Cache the connection globally in development mode
// handling the production environment with a single connection and avoiding unnecessary global variable caching.
if (process.env.NODE_ENV === "development") {
  (global as any).mongoose = cached;
}

export default connectToDatabase;
