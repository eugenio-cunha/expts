import { Request, Response } from 'express';

class UserController {

  public list(req: Request, res: Response) {
    return res.json([
      { 
        id: 1,
        user: 'Eugenio'
      },
      { 
        id: 2,
        user: 'Davi'
      },
    ]);
  }
}

export default new UserController();
