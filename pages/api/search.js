import fetch from "../../../node_modules/node-fetch";

const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場`;

export default async (req, res) => {
  let url = defaultEndpoint;

  if (typeof req.query.keyword !== "undefined") {
    url = `${url}&keyword=${req.query.keyword}`;
  }

  if (typeof req.query.start !== "undefined") {
    url = `${url}&start=${req.query.start}`;
  }
  if (req.query.oneCoin === "true") {
    url = `${url}&budget=B009,B010`;
  }
  if (req.query.twoCoin === "true") {
    url = `${url}&budget=B001,B011&count=70`;
  }
  if (req.query.oneBill === "true") {
    url = `${url}&budget=B002&count=100`;
  }
  if (req.query.twoBill === "true") {
    url = `${url}&budget=B003&count=55`;
  }
  if (req.query.manyBill === "true") {
    url = `${url}&budget=B008,B004,B005&count=20`;
  }
  if (req.query.noodle === "true") {
    url = `${url}&keyword=ラーメン`;
  }
  if (req.query.meat === "true") {
    url = `${url}&keyword=肉&count=40`;
  }
  if (req.query.cafe === "true") {
    url = `${url}&keyword=カフェ&count=12`;
  }

  url = encodeURI(url);

  const result = await fetch(url);
  res.json(result.body);
};
