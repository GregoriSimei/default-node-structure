
import { NextFunction, Response, Request } from "express";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/http";

export class RouterAdapter {
  public static adapt(controller: Controller) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const httpRequest: HttpRequest = {
        body:    req.body,
        params:  req.params,
        query:   req.query,
        headers: req.headers,
      }
  
      const httpResponse = await controller.handle(httpRequest)

      if (httpResponse.headers) {
        res.set(httpResponse.headers)
      }
  
      res.status(httpResponse.statusCode).json(httpResponse.body)
      
      next()
    }
  }
}