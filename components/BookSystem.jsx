import React, { useState } from "react";
import img from '../assets/img/bus/10.png'
import {
  AiOutlineLaptop,
  AiOutlineBars,
  AiOutlineAlert,
  AiOutlineAmazon,
} from "react-icons/ai";

export default function BookSystem() {
  
  const [formData , SetFormData] = useState({from:"",to:"",date:""});
  const handleChange = (event) =>{
    const {name, value} = event.target;
    SetFormData((prevFormData) => ({...prevFormData, [name]:value})); 
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    alert(`We are Searching for buses for you... (Your backend logic will be applied here)`);
    alert(`From ${formData.from}, To ${formData.to}, Date ${formData.date}`);
    document.querySelector(".departure").style.display = "block";
  };

  return (
    <div>
      <div className="book-system bg-slate-300 top-[65%] relative w-full px-20 py-8">
        <div className="form-group">
          <p className="text-2xl py-3 pb-5">Book for a seat</p>
          <form
          onSubmit={handleSubmit}
            className="form sm:flex items-center justify-evenly "
            method="GET"
            action="/find_a_bus"
          >
            <div className="from sm:w-[25%] py-2">
            <label>Pick Up Location</label>
              <select name="from" value={formData.from} onChange={handleChange} className=" w-full input border outline-none px-3 py-2 border-slate-400 rounded">
                <option>Karachi</option>
                <option>Hyderabad</option>
                <option>Sukkur</option>
                <option>Badin</option>
                <option>Larkana</option>
                <option>Dadu</option>
                <option>Naushahro Feroze</option>
                <option>Rawalpindi</option>
                <option>Islamabad</option>
                <option>Multan</option>
                <option>Lahore</option>
              </select>
            </div>
            <div className="from sm:w-[25%] py-2">
            <label>Drop Off Location</label>
              <select name="to" value={formData.to} onChange={handleChange} className=" w-full input border outline-none px-3 py-2 border-slate-400 rounded">
                <option>Karachi</option>
                <option>Hyderabad</option>
                <option>Sukkur</option>
                <option>Badin</option>
                <option>Larkana</option>
                <option>Dadu</option>
                <option>Naushahro Feroze</option>
                <option>Rawalpindi</option>
                <option>Islamabad</option>
                <option>Multan</option>
                <option>Lahore</option>
              </select>
            </div>
            <div className="from sm:w-[25%] py-2">
            <label>Departure Date</label>
            <input name="date" value={formData.date} onChange={handleChange}
                autoFocus
                placeholder="Date"
                className=" w-full input border outline-none px-3 py-2 border-slate-400 rounded"
                type="date"
              />
            </div>
            <div className="from sm:w-[15%] w-[50%] py-2">
            <br />
              <button
                autoFocus
                className=" w-full input border outline-none  py-2 bg-slate-700 text-white border-slate-400 rounded"
                type="submit"
              >
              FIND A BUS
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="departure hidden m-10" >
        <h1 className="font-bold text-3xl">Select Your Departure</h1>
        <div className="departure-container m-10" >
          <div className="card w-full border grid grid-cols-4">
            <div className=" col-span-1 border p-4 bg-slate-100">
              <img src={img} />
            </div>
            <div className=" col-span-2 border p-4 bg-slate-100">
              <h1 className="text-3xl text-center">
                Business Class
              </h1>
              <p className="text-center text-xl">
              {formData.from} To {formData.to} On {formData.date}
              </p>
              <div className="description">
              <br />
                Some description about this bus and route. Some description about this bus and route.Some description about this bus and route.Some description about this bus and route.Some description about this bus and route.Some description about this bus and route.
              </div>
            </div>
            <div className="col-span-1 border p-4 bg-slate-100">
              Price
              <h1 className="text-4xl">
                Rs. 7500
              </h1>
              Per Pasanger
              <br />
              <div className="text-center my-10">
              <a href="/find_a_bus" className="text-xl text-bold border border-slate-800 px-10 py-2 rounded hover:bg-slate-500 hover:text-white duration-200">
              Select
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}