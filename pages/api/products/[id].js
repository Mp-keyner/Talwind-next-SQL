// import { poool } from "../../../config/db";

// export default async function handler(req, res) {

//     switch (req.method) {
//         case 'GET':
//             return await getProduct(res, req)
//         case 'DELETE':
//             return await deleteProduct(res, req)
//         default:
//             break;
//     }
// }


// const getProduct = async (res, req) => {
//     const { id } = req.query
//     const [result] = await poool.query('SELECT  * FROM products WHERE id = ?' + [id])
//     return res.status(200).json(result[0])
// }

// const deleteProduct = async (res, req) => {
//     const { id } = req.query
//     const result = await poool.query('DELETE FROM products WHERE id = ?' + [id])
//     return res.status(204).json()
// }

import { poool } from "../../../config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getProduct(req, res);
        case "DELETE":
            return await deleteProduct(req, res);
        default:
            res.setHeader("Allow", ["GET", "DELETE"]);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

const getProduct = async (req, res) => {
    const { id } = req.query;
    try {
        const [result] = await poool.query("SELECT * FROM products WHERE id = ?" + [
            id,
        ]);
        return res.status(200).json(result[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).end();
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.query;
    try {
        await poool.query("DELETE FROM products WHERE id = ?" + [id]);
        return res.status(204).json();
    } catch (error) {
        console.error(error);
        return res.status(500).end();
    }
};
