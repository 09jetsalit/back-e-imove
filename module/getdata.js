import databaseClient from "../services/database.mjs";

const getdata = async (req, res) => {
    let body = req.body;
    console.log('req',body);
  const data = await databaseClient
    .db()
    .collection("members")
    .findOne({ email: body.email });

    console.log('res',data);
    // const sendData = data;
    // res.send(sendData);
};

export default getdata;