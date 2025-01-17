import { Schema, model, models, Types } from "mongoose";

interface IRole extends Document {
  name: string;
  permissions: Types.ObjectId[];
}

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const roleModel = models?.Role || model<IRole>("Role", roleSchema);
export default roleModel;
