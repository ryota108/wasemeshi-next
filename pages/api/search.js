import fetch from "node-fetch";

const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場`;

const handler = async (req, res) => {
  let url = defaultEndpoint;

  switch (true) {
    case typeof req.query.keyword !== "undefined":
      url = `${url}&keyword=${req.query.keyword}`;
      break;
    case typeof req.query.start !== "undefined":
      url = `${url}&start=${req.query.start}`;
      break;
    case req.query.oneCoin === "true":
      url = `${url}&budget=B009,B010`;
      break;
    case req.query.twoCoin === "true":
      url = `${url}&budget=B001,B011&count=70`;
      break;
    case req.query.oneBill === "true":
      url = `${url}&budget=B002&count=100`;
      break;
    case req.query.twoBill === "true":
      url = `${url}&budget=B003&count=55`;
      break;
    case req.query.manyBill === "true":
      url = `${url}&budget=B008,B004,B005&count=20`;
      break;
    case req.query.noodle === "true":
      url = `${url}&genre=G013`;
      break;
    case req.query.meat === "true":
      url = `${url}&genre=G008&count=40`;
      break;
    case req.query.cafe === "true":
      url = `${url}&genre=G014&count=15`;
      break;
    case req.query.cafe === "true":
      url = `${url}&genre=G007,G017&count=35`;
  }

  url = encodeURI(url);

  const result = await fetch(url);
  res.json(result.body);
};

export default handler;
