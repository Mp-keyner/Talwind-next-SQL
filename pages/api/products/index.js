import { poool } from "../../../config/db";

export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            return await getProduct(req, res);
        case 'POST':
            return await saveProduct(req, res);
    }

}

const getProduct = async (req, res) => {
    const [resultado] = await poool.query('SELECT * FROM products')
    return res.status(200).json(resultado)
}


const saveProduct = async (req, res) => {
    const { name, description, price } = req.body;

    const [result] = await poool.query('INSERT INTO products SET ?', {
        name,
        description,
        price
    });
    console.log(result)
    return res.status(200).json({ name, description, price, id: result.insertId });
}