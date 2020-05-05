import { Router } from 'express';
class GamesRoutes{
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(){
        this.router.get('/',(req,res) => res.send('Games'));
    }
}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;