import Head from 'next/head'
import Link from 'next/link'
import Category from "../component/Category/Category";
import FadeUp from '../component/UI/FadeUp'
import Explain from '../component/Explain/Explain'
import Header from '../component/Header/Header'
import {AiOutlineSearch} from "react-icons/ai";
import{AiFillMoneyCollect} from "react-icons/ai";
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const defaultEndpoint = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&format=json&keyword=高田馬場&count=10`

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  const [categoryValue, setCategoryValue] = useState({});
  const { ref, inView } = useInView({delay:1000});
  const [reset,setReset] = useState(false);
  const resetHandler = ()=>{
   setReset((prev)=>!prev);
   console.log(reset);
  }
  const {
    results_available = 0,
    results_start = 1,
    results_returned = 1,
    shop: defaultShops = [],
  } = data.results

  const [shop, updateShops] = useState(defaultShops)
  const [page, updatePage] = useState({
    results_available: results_available,
    results_returned: results_returned,
    results_start: results_start,
  })
  
  const [keyword, setKeyword] = useState('')
 console.log(categoryValue);
  useEffect(() => {
    if (keyword === '') return

    const params = { keyword: keyword }
    const query = new URLSearchParams(params)

    const request = async () => {
      const res = await fetch(`/api/search?${query}`)
      const data = await res.json()
      const nextData = data.results

      updatePage({
        results_available: nextData.results_available,
        results_returned: nextData.results_returned,
        results_start: nextData.results_start,
      })

      updateShops(nextData.shop)
    }

    request()
  }, [keyword])

  useEffect(() => {
    if (page.results_start === 1) return

    const params = { start: page.results_start, keyword: keyword , category: categoryValue}
    const query = new URLSearchParams(params)

    const request = async () => {
      const res = await fetch(`/api/search?${query}`)
      const data = await res.json()
      const nextData = data.results
      
      updatePage({
        results_available: nextData.results_available,
        results_returned: nextData.results_returned,
        results_start: nextData.results_start,
      })

      if (nextData.results_start === 1) {
        updateShops(nextData.shop)
        return
      }
     
      updateShops((prev) => {
        return [...prev, ...nextData.shop]
      })
    }

    request()
  }, [page.results_start])
  
// useEffect(()=>{
  // category検索をここに実装
//   if ( typeof categoryValue.twoCoin  === undefined  ) return

//   const params = {category: categoryValue}
//   const query = new URLSearchParams(params)
//   const request = async () => {
//     const res = await fetch(`/api/search?${query}`)
//     const data = await res.json()
//     const nextData = data.results
    
//     updatePage({
//       results_available: nextData.results_available,
//       results_returned: nextData.results_returned,
//       results_start: nextData.results_start,
//     })

//     if (nextData.results_start === 1) {
//       updateShops(nextData.shop)
//       return
//     }
   
//     updateShops((prev) => {
//       return [...prev, ...nextData.shop]
//     })
//   }
//   request()
// },[categoryValue.twoCoin])
// useEffect(()=>{
//   if (reset === false) return
//   const params = {reset:reset}
//     const query = new URLSearchParams(params)
//     const request = async () => {
//       const res = await fetch(`/api/search?${query}`)
//       const data = await res.json()
//       const nextData = data.results
      
//       updatePage({
//         results_available: nextData.results_available,
//         results_returned: nextData.results_returned,
//         results_start: nextData.results_start,
//       })
  
//       if (nextData.results_start === 1) {
//         updateShops(nextData.shop)
//         return
//       }
     
//       updateShops((prev) => {
//         return [...prev, ...nextData.shop]
//       })
//     }
//     request()
// },[reset])
 useEffect(()=>{
   if (inView === false) return
  updatePage((prev) => {
    return {
      ...prev,
      results_start: prev.results_start + 10,
    }
  })
 },[inView])

  const handlerOnClickReadMore = () => {

    updatePage((prev) => {
      return {
        ...prev,
        results_start: prev.results_start + 10,
      }
    })
  } 

  const handlerOnSubmitSearch = (e) => {
    e.preventDefault()


    const { currentTarget = {} } = e
    const fields = Array.from(currentTarget?.elements)
    const fieldQuery = fields.find((field) => field.name === 'query')
    const value = fieldQuery.value || ''
    setKeyword(value)
  }

  const resetSearchHandler = ()=>{
  
  }

  const submitCategoryHandler =(data)=>{
    setCategoryValue(data);
  }
  return (
    <>
        <Header/>
        <Explain/>
        <form onSubmit={handlerOnSubmitSearch} className="text-center">
              <input
                type="search"
                name="query"
                className="searchInput"
                placeholder="キーワードを入力して下さい"
              />
              <button className="searchButton">
                <AiOutlineSearch color="white" size="18px"/>
              </button>
            </form>
        <Category onSubmit={submitCategoryHandler}/>
        <div className='flex'><span className="resultReturn">{page.results_available}</span> <h3>件</h3></div>
              {/* <button onClick={resetHandler}>Reset</button> */}
        <ul className="flex" style={{flexWrap:"wrap"}}>
          {shop.map((item, index) => {
            return (
              <FadeUp key={index}>
              <li className="shop" key={index}>
       <Link key={index} href={`restaurants/${item.id}`} >
         <div className="shop-card">
           <div className="img-box">
             <img className="shop-img" src={item.photo.pc.l} />
           </div>
           <h3 className="shop-title">{item.name}</h3>
           <p>{item.catch}</p>
           <hr align="left" color="#871b28" width="300px" />
           <div className="price-area">
           <AiFillMoneyCollect key={index} size="25px" className='moneyMiniIcon'/> <h4 className="moneyInfo">{item.budget.name}</h4>
             {/* <h4>{item.open}</h4> */}
           </div>
        </div>
       </Link>
     </li>
     </FadeUp>
            )
          })}
        </ul>
        {/* {page.results_returned <= page.results_start ? (
          <div></div>
        ) : ( */}
          {/* <div className="">
            <p>上手く読み込まない場合はボタンを押してください</p>
            <button
              className="readMoreBtn"
              onClick={handlerOnClickReadMore}
            >
              もっと読む
            </button>
          </div> */}
          <div ref={ref}></div>
        {/* )} */}
        {!inView && <img src="/images/loading.gif" className='loadingSpinner' />  }
        <a href="http://webservice.recruit.co.jp/"><img src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif" alt="ホットペッパー Webサービス" width="135" height="17" border="0" title="ホットペッパー Webサービス"/></a>
   </>

  )
}

