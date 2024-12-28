import { mergeResolvers } from "@graphql-tools/merge";
import userResolvers from "./user.resolver";

const mergedResolvers = mergeResolvers([userResolvers]);

export default mergedResolvers;
