import { BaseError, InternalServerError, NotFoundError } from "./src/errors.ts";
import { routeHandler } from "./src/router.ts";

Bun.serve({
  port: 8080,
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
