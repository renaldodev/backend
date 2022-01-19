import "reflect-metadata";
import express from "express";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { PrimaryResolver } from "./resolvers/PrimaryResolver";

export async function startApolloServer() {
  createConnection()
    .then(async (_) => {
      const app = express();
      const httpServer = http.createServer(app);
      const schema = await buildSchema({
        resolvers: [PrimaryResolver],
      });
      const server = new ApolloServer({
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        schema,
      });

      await server.start();

      server.applyMiddleware({ app, path: "/api" });
      await new Promise<void>((resolve) =>
        httpServer.listen({ port: 3333 }, resolve)
      );
      console.log(
        `🚀 Server ready at http://localhost:3333${server.graphqlPath}`
      );
      return { server, app };
    })
    .catch((error) => console.log(error));
}
