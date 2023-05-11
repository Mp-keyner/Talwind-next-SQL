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
    try {
        const [resultado] = await poool.query('SELECT * FROM products')
        return res.status(200).json(resultado)
    } catch (error) {
        return res.status(500).json({ error: error.response.data.error });
    }
}


const saveProduct = async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const [result] = await poool.query('INSERT INTO products SET ?', {
            name,
            description,
            price
        });
        console.log(result)
        return res.status(200).json({ name, description, price, id: result.insertId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}