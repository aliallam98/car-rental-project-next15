import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDefs from "./user.typeDef";

const mergedTypeDefs = mergeTypeDefs([userTypeDefs]);

export default mergedTypeDefs;
