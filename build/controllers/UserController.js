"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    list(req, res) {
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
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map