import * as mongoose from 'mongoose';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Pyq from 'pyq/pyqschema';
import connectdb from 'pyq/middelware';

mongoose.set('strictQuery', false);


async function handler(req, res) {

    await connectdb();

    res.status(200).json(await Pyq.find(req.query).catch((err) => res.status(400).json({ err }))
    );
    console.log(req);
    console.log(res);
}
export default handler
