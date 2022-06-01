import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const list = this.listAllUsersUseCase.execute({ user_id });

    return response.send(list).status(200);
  }
}

export { ListAllUsersController };
