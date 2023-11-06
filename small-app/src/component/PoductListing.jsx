import React, { useEffect, useState } from 'react'
import Product from './product'
import Pagination from './Pagination'
import Sort from './Sort'
import Filter from './Filtercom'
import Catogery from './Catogery'
import Search from './Search'


const PoductListing = () => {
    const [loading , setLoading]=useState(false)
    const [error , setError]=useState(false)
    const [data , setData]=useState([])
    const [page , setPage]=useState(1)
    const [search , setSearch]=useState('')
    const [total , setTotal]=useState(4)
    const [sort , setSort]=useState('')
    const [catogery , setCatogery]=useState('')
    const [filter , setFilter]=useState('')
    const [limit , setLimit]=useState(4)
    
    const getUrl =(Purl,page,sort,limit,filter,catogery,search)=>{
        if(page){
            Purl = Purl +`?_page=${page}&_limit=${limit}`
        }
        if(sort){
            Purl = Purl +`&_sort=price&_order=${sort}`
        }
        if(filter){
            Purl = Purl +`&type=${filter}`
        }
        if(catogery){
            Purl = Purl +`&catogery=${catogery}`
        }
        if(search){
            Purl = Purl +`&q=${search}`
        }
        return Purl;
    }
    
    const getData = async (page,sort)=>{
        try {
            setLoading(true)
            const Purl = 'https://cwproject-unit5.onrender.com/products';
            const newUrl = getUrl(Purl,page,sort,limit,filter,catogery,search)
            console.log(newUrl)
            const res = await fetch(newUrl)
            const fetchData = await res.json()
            setData(fetchData)
            const TotalPage = res.headers.get("X-Total-Count");
            setTotal(Math.ceil(TotalPage/limit))
            setLoading(false)
        }
        catch (error) {
            console.log(error)    
            setError(error)
        }
    }

    console.log(data)
    console.log(total)

    useEffect(() => {
    getData(page,sort,filter,catogery,search)
    }, [page,sort,filter,catogery,search])

const arr = []
for(let i =1;i<=total;i++){
    arr.push(i);
}

const SetPageFun =(key)=>{
    setPage(key)
}

const sortFun=(ele)=>{
    setSort(ele)
}

console.log(sort)
console.log(search)
  return (
    <div>
      <h1>Product Listing page</h1>
      {loading && <h1>Loading.... please wait</h1>} 
      {/* /*this is for no else statement only for if true*/ }


    <div>
        <Filter onChange={setFilter}/>
        
        <br></br>
        <Catogery onChange={setCatogery}/>
    </div>


      <Search onChange={setSearch}/>
    
      <br></br>
        <Sort onChange={sortFun}/>

    <div style={{display:"grid" , gridTemplateColumns:"repeat(2,1fr)" , gap:"20px"}}>
        {data?.map((ele)=>(
           <Product key={ele.id} {...ele}/>
        ))}
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div style={{display:"flex" , flexDirection:"row", justifyContent:"center" , gap:"10px"}}>
    
            <Pagination onChange={SetPageFun} arr={arr} page={page} />
    
      </div>
      <br></br><br></br><br></br>
    </div>
  )
}

export default PoductListing
