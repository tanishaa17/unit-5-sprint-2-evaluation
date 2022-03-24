import "./Rentals.css";
import axios from 'axios'
import { useEffect, useState } from "react";
export const Rentals = () => {
  const [data, setData] = useState([]);
  const [inp, setinp] = useState("");
  useEffect(() => {
    getData()
    SortByRentAsc(data)
    SortByRentDsc(data)
    SortById(data)
    SortByAreaCodeAsc(data)
    SortByAreaCodeDsc(data)
    Filter(inp)
  }, [setData])
  function getData(){
    axios.get("http://localhost:8080/houses").then((res) => {
      setData(res.data)
    })
  }

  function handleChange(e) {
    setinp(e.target.value)
  }
  

  function Filter(inp) {
    console.log('Under filter function: ', inp)
   let temp = data.filter((e)=>{
     return e.address.startsWith(inp)
   })
   setData([...temp])
   console.log(temp)
  }



  function SortByAreaCodeAsc(data) {
    data.sort((a, b) => {
      return a.areaCode - b.areaCode
    })
    setData([...data])
  }
  function SortByAreaCodeDsc(data) {
    data.sort((a, b) => {
      return b.areaCode - a.areaCode
    })
    setData([...data])
  }
  function SortById() {
    data.sort((a, b) => {
      return a.id - b.id
    })
    setData([...data])
  }
  // SortByRent(data)
  function SortByRentAsc(data) {
    data.sort((a, b) => {
      return a.rent - b.rent
    })
    setData([...data])
  }
  function SortByRentDsc(data) {
    data.sort((a, b) => {
      return b.rent - a.rent
    })
    setData([...data])
  }



  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={() => SortById(data)}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={() => SortByRentAsc(data)}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={() => SortByRentDsc(data)}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={() => SortByAreaCodeAsc(data)}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={() => SortByAreaCodeDsc(data)}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onChange={handleChange}

      />
      <button onClick={()=> Filter(inp)}>Find</button> 
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.owners_name}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.area_code}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">{house.tenants}</td>
                <td className="houseImage">
                  <img src={house.img} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
