const { response, request } = require('express');
const pool = require('../db/config');

const getUsers = async (req = request, res = response) => {
    const r = await pool.query('SELECT * FROM users');

    res.status(200).json(r.rows)
}

const postUsers = async (req = request, res = response) => {

    //destruct the req.body
    const { name, email } = req.body

    //connect to Database and Run Query
    await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])

    //response
    res.status(201).json({
        msg: 'user created successfully',
        name,
        email
    });
};
const getUsersById = async (req = request, res = response) => {

    const r = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);

    res.status(200).json(r.rows);
}

const putUsers = async (req = request, res = response) => {

    const { name, email } = req.body;
    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, req.params.id])

    res.status(200).json({
        msg: 'User updated successfully'
    })
}

const deleteUsers = async (req = request, res = response) => {

    await pool.query('DELETE FROM users WHERE id = $1', [req.params.id])

    res.status(200).json({
        msg: `User ${req.params.id} deleted successfully`
    });
}


module.exports = {
    getUsers,
    getUsersById,
    postUsers,
    putUsers,
    deleteUsers
}