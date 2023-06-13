import fetch from "node-fetch";

const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場`;

//search.jsのテストを書いてあげる
// fetchが期待している引数で呼ばれているかをチェックする　spyOn
// パターンに応じてテストしてあげる
// E2Eテストでもいいかも

const handler = async (req, res) => {
  const queryParams = {
    keyword: req.query.keyword,
    start: req.query.start,
    oneCoin: req.query.oneCoin === "true",
    twoCoin: req.query.twoCoin === "true",
    oneBill: req.query.oneBill === "true",
    twoBill: req.query.twoBill === "true",
    manyBill: req.query.manyBill === "true",
    noodle: req.query.noodle === "true",
    meat: req.query.meat === "true",
    cafe: req.query.cafe === "true",
    izkaya: req.query.izkaya === "true",
    chinese: req.query.chinese === "true",
  };

  const queryMapping = {
    keyword: `&keyword=${req.query.keyword}`,
    start: `&start=${req.query.start}`,
    oneCoin: "&budget=B009,B010",
    twoCoin: "&budget=B001,B011&count=70",
    oneBill: "&budget=B002&count=100",
    twoBill: "&budget=B003&count=55",
    manyBill: "&budget=B008,B004,B005&count=20",
    noodle: "&genre=G013",
    meat: "&genre=G008&count=20",
    cafe: "&genre=G014&count=15",
    izkaya: "&genre=G001&count=100",
    chinese: "&genre=G007,G017&count=40",
  };

  let url = defaultEndpoint;

  for (const param in queryParams) {
    if (queryParams[param] && queryMapping[param]) {
      url += queryMapping[param];
    }
  }

  url = encodeURI(url);

  const result = await fetch(url);
  res.json(result.body);
};
export default handler;
