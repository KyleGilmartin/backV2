import express from 'express';
import ValidationMiddleware from '../middleware/validation';
import db from '../models/playerService';

const router = express.Router();



router.post('/', (req, res) => {
    db.createLocation(req, res);
});



// To add: a put request to update a book.
//

router.get('/', (req, res) => {
    db.readLocations(req, res);
})

router.get('/:id', [ValidationMiddleware.validJWTNeeded, (req, res) => {

    db.readLocation(req, res);

}])





export default router;