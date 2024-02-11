import databaseClient from "../services/database.mjs";

const getdata = async (req, res) => {
    let body = req.body;
    console.log(body);
  const data = await databaseClient
    .db()
    .collection("members")
    .findOne({ email: body.email });

    const sendData = data;
    res.json(sendData);
};

export default getdata;