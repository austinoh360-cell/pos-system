import { Schema, models, model, type InferSchemaType, type Model } from "mongoose";
import { UserRole } from "@/types/auth";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    restaurantId: {
      type: Schema.Types.ObjectId,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export type UserDocument = InferSchemaType<typeof UserSchema> & {
  _id: Schema.Types.ObjectId;
};

export const User: Model<UserDocument> =
  (models.User as Model<UserDocument>) || model<UserDocument>("User", UserSchema);
