
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Pyq from 'pyq/pyqschema';





export default function handler(
    req,
    res
) {
    if (req.method == "POST") {
        // if(req.body.admin=="sachin"&&req.body.admin_password=="1234"){
        let p = new Pyq({
            "year": req.body.year,
            "semester": req.body.semester,
            "subject": req.body.subject,
            "link": req.body.link,
        })
        p.save()
        res.status(200).json({ name: "succesfully added" })




    }
    else {
        res.status(400).json({ name: "bad req" })
    }

}


