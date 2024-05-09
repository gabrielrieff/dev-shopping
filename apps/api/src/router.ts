import { Router } from "express";
import { deleteUserController } from "./UseCases/User/delete-user";
import { createUserController } from "./UseCases/User/create-user";

const router = Router();

router.post("/users", (request, reponse) => {
  return createUserController.handle(request, reponse);
});

router.delete("/user", (request, reponse) => {
  return deleteUserController.handle(request, reponse);
});

export { router };
