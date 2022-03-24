import  axios  from 'axios';
import { useEffect, useState } from "react";

export const AddHouse = (props) => {
  const [formData, setFormdata] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: "",
  });

  function handleChange(e) {
    const { className, value } = e.target;
    setFormdata({...formData, [className]: value })
  }  
  const getData = props.getData;
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", formData).then(() => {
      alert("House added");
      getData()
      setFormdata({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        bachelor: "",
        married: "",
        image: "",
      })
    })
  }  
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" onChange = {handleChange} className="name" value={formData.name} required />
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName} type="text" onChange = {handleChange} className="ownerName" required />
        <br />
        <label>address</label>
        <input value={formData.address} type="text" onChange = {handleChange} className="address" required />
        <br />
        <label>areaCode</label>
        <input value={formData.areaCode} type="text" onChange = {handleChange} className="areaCode" required />
        <br />
        <label>rent</label>
        <input value={formData.rent} type="text" onChange = {handleChange} className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={formData.bachelor} type="checkbox" onChange = {handleChange} className="bachelor" />
        <br />
        <label>married</label>
        <input checked={formData.married} type="checkbox" onChange = {handleChange} className="married" />
        <br />
        <label>image</label>
        <input value={formData.image} type="text" onChange = {handleChange} className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
