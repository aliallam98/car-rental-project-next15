import { model, models, Schema, Types, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  fullName?: string;
  profilePicture?: string;
  isVerified: boolean;
  isActive: boolean;
  roles: Types.ObjectId[];
  permissions: Types.Map<boolean>;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
    },
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    roles: [
      {
        type: Types.ObjectId,
        ref: "Role",
      },
    ],
    permissions: {
      type: Map,
      of: Boolean, // Each permission can be true (granted) or false (revoked)
      default: {}, // Initialize as an empty Map
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    versionKey: false, // Disable the version key (_v)
  }
);

userSchema.index({ email: 1 });

// Check if the model already exists to avoid recompiling the model during hot reloads
const userModel = models?.User || model<IUser>("User", userSchema);

export default userModel;

// MongoDB has document size limits (16MB per document)
// For 400 permissions, the total document size is estimated to be around 8.4 KB to 10 KB.
// For 1000 permissions, the total document size would be around 21 KB.  true - false 1 takes 1 bytes
// The 1 means that the index will be created in ascending order (from A to Z for strings).
// In MongoDB, you can create an index in either ascending (1) or descending (-1) order.
// In this case, 1 simply tells MongoDB that the index should be sorted in ascending order based on the email field.
