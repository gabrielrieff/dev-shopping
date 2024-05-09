import { Request, Response } from "express";
import { DeleteUserUseCase } from "./delete-user-use-case";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { id, name, email, password } = req.body;

    try {
      await this.deleteUserUseCase.execute({ id, name, email, password });

      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({
        message: error.message || "",
      });
    }
  }
}
