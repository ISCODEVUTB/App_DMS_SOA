import {pool} from "../db.js";

export const getcarrito = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, title, author, category, detail, amount, sale_price, url_i FROM inventario')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message: 'Error de conexión'})
    }

    }


export const getcarrito_ind = async (req, res) => {
  try{
      const [rows] = await pool.query('SELECT id, title, author, category, detail, amount, sale_price, url_i FROM inventario WHERE id = ?', [req.params.id])
      if (rows.length <= 0 ) return res.status(404).json({
          message:'Not found'
      })
      res.json(rows[0])
  }
   catch (error) {
      return res.status(500).json({message: 'Error de conexión'})
  }
}

export const updatecarrito = async (req, res) => {
    try{
        const {id,amount} = req.body
        const [result] = await pool.query('UPDATE inventario SET inventario.amount=(select SUM( amount - ?))  WHERE id = ?',
        [amount, id])

    if(result.affectedRows === 0) return res.status(404).json({
        message:'Not found'})

    const [rows] = await pool.query('SELECT id, title, author, category, detail, amount, sale_price FROM inventario WHERE id=?', [id])
    res.json(rows[0])
}catch (error) {
    return res.status(500).json({message: 'Error de conexión'})
}
}
