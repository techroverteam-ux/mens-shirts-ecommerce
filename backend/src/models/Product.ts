import mongoose, { Schema, Document } from "mongoose";

export interface IVariant {
  size: "S" | "M" | "L" | "XL";
  color: string;
  stock: number;
}

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: mongoose.Types.ObjectId;
  seasonalTag: "Summer" | "Winter" | "Monsoon";
  variants: IVariant[];
}

const ProductSchema: Schema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  seasonalTag: { type: String, enum: ["Summer", "Winter", "Monsoon"], required: true },
  variants: [{
    size: { type: String, enum: ["S", "M", "L", "XL"], required: true },
    color: { type: String, required: true },
    stock: { type: Number, default: 0 }
  }]
}, { timestamps: true });

export default mongoose.model<IProduct>("Product", ProductSchema);
