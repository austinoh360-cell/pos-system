import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set.");
  process.exit(1);
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["ADMIN", "RESTAURANT"], required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, default: null },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

const demoUsers = [
  {
    email: "admin@pos.local",
    password: "Admin123!",
    name: "Platform Admin",
    role: "ADMIN",
  },
  {
    email: "restaurant@pos.local",
    password: "Restaurant123!",
    name: "Demo Restaurant",
    role: "RESTAURANT",
  },
] as const;

async function main() {
  await mongoose.connect(MONGODB_URI!);
  console.log("Connected");

  for (const user of demoUsers) {
    const passwordHash = await bcrypt.hash(user.password, 10);
    await User.findOneAndUpdate(
      { email: user.email },
      {
        email: user.email,
        passwordHash,
        name: user.name,
        role: user.role,
        isActive: true,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );
    console.log(`Upserted ${user.role}: ${user.email} / ${user.password}`);
  }

  await mongoose.disconnect();
  console.log("Seed complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
