import mongoose, { Schema, Document } from "mongoose";
import * as bcrypt from "bcryptjs";

export interface IUser extends Document {
  email: string;
  password: string;
  role: "customer" | "admin" | "superadmin";
  name?: string;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer", "admin", "superadmin"], default: "customer" },
  name: String
}, { timestamps: true });

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;
  next();
});

(UserSchema.methods as any).comparePassword = async function(password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>("User", UserSchema);
