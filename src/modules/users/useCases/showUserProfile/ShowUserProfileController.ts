import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const list = this.showUserProfileUseCase.execute({ user_id });

    return response.send(list).status(200);
  }
}

export { ShowUserProfileController };
