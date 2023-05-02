export default function handler(req, res) {
    return res.status(200).json('geting one product ' + req.query.id)
}