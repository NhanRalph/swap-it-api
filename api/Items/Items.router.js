const {createItems, getAllItems, updateItemDetails, getItemByID, deleteItem} = require('./Items.controller');
const router = require('express').Router();

router.post('/',createItems);
router.get('/',getAllItems);
router.put('/:id', updateItemDetails);
router.get('/:id', getItemByID);
router.delete('/:id', deleteItem);
module.exports = router;
