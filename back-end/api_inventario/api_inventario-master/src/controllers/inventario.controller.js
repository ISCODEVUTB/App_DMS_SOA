import {pool} from "../db.js";

export const getInventario = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM inventario')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message: 'Error de conexión'})
    }

    }

export const getInventario_ind = async (req, res) => {
  try{
      const [rows] = await pool.query('SELECT * FROM inventario WHERE id = ?', [req.params.id])
      if (rows.length <= 0 ) return res.status(404).json({
          message:'Not found'
      })
      res.json(rows[0])
  } catch (error) {
      return res.status(500).json({message: 'Error de conexión'})
  }
}
export const createInventario = async (req, res) => {
    try{
        const {id,title,author,category,detail,amount,purchase_price,sale_price, url_i} = req.body
        const [rows] = await pool.query('INSERT INTO inventario (id,title,author,category,detail,amount,purchase_price,sale_price, url_i) VALUES (?,?,?,?,?,?,?,?,?)', [id,title,author,category,detail,amount,purchase_price,sale_price, url_i])
        res.send({
        id,title,author,category,detail,amount,purchase_price,sale_price, url_i
        })
    } catch (error) {
        return res.status(500).json({message: 'Error de conexión'})
    }
}

export const deleteInventario = async (req, res) => {
try{
    const {id} = req.body
    const [result] = await pool.query('DELETE FROM inventario WHERE id = ?', [id])
    if(result.affectedRows <= 0) return res.status(404).json({
        message:'ID not found'})
    res.sendStatus(204)
}catch (error) {
    return res.status(500).json({message: 'Error de conexión'})
}
}

export const updateInventario = async (req, res) => {
    try{
        const {id,amount, purchase_price, sale_price} = req.body
        const [result] = await pool.query('UPDATE inventario SET amount = IFNULL(?,amount), purchase_price = IFNULL(?,purchase_price), sale_price = IFNULL(?,sale_price) WHERE id = ?',
        [amount,purchase_price, sale_price, id])

    if(result.affectedRows === 0) return res.status(404).json({
        message:'Not found'})

    const [rows] = await pool.query('SELECT * FROM inventario WHERE id=?', [id])
    res.json(rows[0])
}catch (error) {
    return res.status(500).json({message: 'Error de conexión'})
}
}
