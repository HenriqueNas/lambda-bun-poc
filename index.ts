import { BaseError, InternalServerError } from "./src/errors.ts";
import { routeHandler } from "./src/router.ts";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const NODE_ENV = process.env.NODE_ENV ?? "dev";

const serve = Bun.serve({
  port: PORT,
  fetch(req) {
    try {
      const url = new URL(req.url);

      return Response.json(routeHandler(url));
    } catch (error) {
      if (error instanceof BaseError) {
        return Response.json(error.toJson());
      }

      const internalError = new InternalServerError();
      return Response.json(internalError.toJson());
    }
  },
});

console.log(`[${NODE_ENV}] Server running on port ${serve.port}`);

export default { serve };
