const pool = require('../../config/database');
const { DateTime } = require('luxon'); 
const { deleteItem } = require('./Items.controller');

module.exports = {
    create: (data, callBack) => {
        const postedDate = DateTime.fromFormat(data['posted-date'], 'd/M/yyyy').toSQLDate();
        pool.query(
            `INSERT INTO Items (seller_id, item_name, description, price, category,
             quantity, posted_date, item_status) 
            VALUES( ?, ? ,?, ?, ?, ?, ?, ?)`,
            [
        
                data.seller_id,
                data.item_name,
                data.description,
                data.price,
                data.category,
                data.quantity,
                postedDate,
                data.item_status
                
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAll: (callBack) => {
        pool.query(
            `SELECT 
                i.item_id,
                i.seller_id,
                i.item_name,
                i.description,
                i.price,
                i.category,
                i.quantity,
                i.posted_date,
                i.item_status,
                u.name AS seller_name,
                '' AS image,
                'Binh Thanh' as address
            FROM Items i
            JOIN Users u ON i.seller_id = u.user_id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateItem: (data, itemId, callBack) => {
        const postedDate = DateTime.fromFormat(data['posted-date'], 'd/M/yyyy').toSQLDate();
        pool.query(
            `UPDATE Items SET seller_id = ?, item_name = ?, description = ?, price = ?, category = ?, quantity = ?, posted_date = ?, item_status = ? WHERE item_id = ?`,
            [
                data.seller_id,
                data.item_name,
                data.description,
                data.price,
                data.category,
                data.quantity,
                postedDate,
                data.item_status,
                itemId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getItem: (itemId, callBack) => {
        pool.query(
            `SELECT * FROM Items WHERE item_id = ?`,
            [itemId],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteItemById: (itemId, callBack) => {
        pool.query(
            `DELETE FROM Items WHERE item_id = ?`,
            [itemId],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    searchItems: (searchTerm, callBack) => {
        const query = `
            SELECT * FROM Items 
            WHERE item_name LIKE ? 
            OR description LIKE ? 
            OR category LIKE ?
        `;
        const likeSearchTerm = `%${searchTerm}%`;
        pool.query(
            query,
            [likeSearchTerm, likeSearchTerm, likeSearchTerm],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};