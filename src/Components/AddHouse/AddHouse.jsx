import axios from "axios";
import { useEffect, useState } from "react";

export const AddHouse = () => {
  const [house, setHouse] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    preferred: "",
  })
  useEffect(() => [
    getData()
  ], []);
  const [houseData, setHouseData] = useState([]);
  function handleChange(e) {
    const { id, value } = e.target;
    setHouse({ ...house, [id]: value });
  }
  function getData() {
    axios.get("http://localhost:8080/houses").then((res) => [
      setHouseData(res.data)
    ])
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", house).then(() => {
      alert("House Added Successfully")
      getData()
      setHouse({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        preferred: "",
      })
    })
  }


  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input onChange={handleChange} type="text" className="name" required />
        <br />
        <label>ownerName</label>
        <input onChange={handleChange} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input onChange={handleChange} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input onChange={handleChange} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange={handleChange} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange={handleChange} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange={handleChange} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input onChange={handleChange} type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
