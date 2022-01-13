import React,{useEffect,useState} from 'react'
import axios from "axios"

const Data = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    const getVal = (e) =>{
        setSearch(e.target.value)
    }

    const ascOrder = () => {
        let newArr = [...data];
        setData(newArr.sort())
    }

    const descOrder = () => {
        let newArr = [...data];
        setData(newArr.sort().reverse())
    }
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='box text-center'>
            <div className="flex justify-center items-center">
                <input onChange={getVal} placeholder="Search title ..." type="text" className="search shadow mx-3" />
                <button className="btn mx-3 shadow btn1" onClick={ascOrder}>Ascending</button>
                <button className="btn mx-3 shadow btn2" onClick={descOrder}>Descending</button>
            </div>
            <div className='Data text-center'>
            {
                (search === "") ?
                data.map((val,index) => 
                    <h2 key={index}>{val.title}</h2>
                ):
                (data.filter(val => val.title.toLowerCase().includes(search.toLowerCase()))).map((val,index) => (
                    <h2 key={index}>{val.title}</h2>
                ))
            }
            </div>
        </div>
    )
}

export default Data
