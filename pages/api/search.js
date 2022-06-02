import fetch from 'node-fetch';

const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場`


export default async (req, res) => {
  let url = defaultEndpoint

  if (typeof req.query.keyword !== undefined ) {
    url = `${url}&keyword=${req.query.keyword}`
  }

  if (typeof req.query.start !== undefined ) {
    url = `${url}&start=${req.query.start}`
  }
  
  // if(typeof req.query.category.twoCoin !== undefined && req.query.category.twoCoin !== false ) {
  //   url = `${url}&budget=B001`
  // }  
  // これで取得は出来るが検索ワードが使用できなくなる、また総数も変化なし
  // if( typeof req.query.reset !== undefined){
  //   url = defaultEndpoint
  // }
  // if(typeof req.query.id !== undefined){
  //   url = `${url}&id=${req.query.id}`
  // }
 
  url = encodeURI(url)

  const result = await fetch(url)
  res.json(result.body)
}