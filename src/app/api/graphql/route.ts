/* eslint-disable react-hooks/rules-of-hooks */
import { WebSocketServer } from "ws";
import { createServer } from "http";
import { ApolloServer } from "@apollo/server";
import mergedTypeDefs from "./typeDefs";
import mergedResolvers from "./resolvers";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const httpServer = createServer();
const schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/api/graphql",
});
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req) => {
    const token = req.headers.authorization?.split(" ")[1] || "";
    try {
      // // Verify token using jose
      // const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
      // return { user: { id: payload.userId } }; // Assuming `userId` is part of the token payload
      return { user: "ali allam" };
    } catch (error) {
      console.error("Token verification failed:", error);
      return { user: null };
    }
  },
});

export { handler as GET, handler as POST };

httpServer.listen(process.env.PORT || 3000);
