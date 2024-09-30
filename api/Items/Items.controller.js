const { create, getAll, updateItem, getItem, deleteItemById,searchItems }  = require('./Items.service');

const createItems = (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: " Error: " + err.message
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Item created successfully",
            data: results
        });
    });
};

const getAllItems = (req, res) => {
    getAll((err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: " Error: " + err.message
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Items retrieved successfully",
            data: results
        });
    });
};
const updateItemDetails = (req, res) => {
    const body = req.body;
    const itemId = req.params.id;
    updateItem(body, itemId, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Error: " + err.message
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Updated item successfully",
            data: results
        });
    });
};
const getItemByID = (req, res) => {
    const itemId = req.params.id;
    getItem(itemId, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Error: " + err.message
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Item retrieved successfully",
            data: results
        });
    });
}
const deleteItem = (req, res) => {
    const itemId = req.params.id;
    deleteItemById(itemId, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Error: " + err.message
            });
        }
        return res.status(200).json({
            success: 1,
            message: "Item is deleted successful",
            data: results
        });
    });
}
const searchItemsDetails = (req, res) => {
    const searchTerm = req.query.q;
    searchItems(searchTerm, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Error: " + err.message
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
};
module.exports = {
    createItems,
    getAllItems,
    updateItemDetails,
    getItemByID,
    deleteItem,
    searchItemsDetails 
};