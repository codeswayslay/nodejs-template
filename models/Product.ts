import mongoose, { Schema, Document } from "mongoose";

export interface IProductDocument extends Document {
    id: number;
    name: string;
    description: string;
}

const ProductSchema: Schema = new Schema<IProductDocument>({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const ProductModel = mongoose.model<IProductDocument>("Product", ProductSchema);

export default ProductModel;