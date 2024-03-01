import React, { useState } from "react";
export default function Booking() {

  const [formData, SetFormData] = useState({ name: "", mobile: "", cnic: "",seat_no:"" });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    SetFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `We are booking your seats ... (Your backend logic will be applied here)`
    );
    alert(`Your Details: Name ${formData.name}, Mobile ${formData.mobile}, CNIC ${formData.cnic}, Seat ${formData.seat_no}`);
  };

return (
  <div className="m-10">
  <h1 className="text-3xl ">Select Your Booking</h1>
  <div className="grid grid-cols-2">
  <form className="form col-span-1" onSubmit={handleSubmit}>
      <div className="m-2">
        <input type="text" className="name p-2 border border-slate-400 rounded w-full m-1" onChange={handleChange} name="name" placeholder="Your Full Name" />
      </div>
      <div className="m-2">
        <input type="text" className="mobile p-2 border border-slate-400 rounded w-full m-1" onChange={handleChange} name="mobile" placeholder="03123456789" pattern="03[0-9]{9,9}" />
      </div>

      <div className="m-2">
        <input type="text" className="cnic p-2 border border-slate-400 rounded w-full m-1" onChange={handleChange} name="cnic" placeholder="CNIC" />
      </div>
      <div className="m-2">
        <input type="number" className="saet p-2 border border-slate-400 rounded w-full m-1" onChange={handleChange} name="seat_no" placeholder="Seat No" />
      </div>
      <div className="m-2">
        <input type="submit" className="border px-20 py-2 bg-slate-800 text-white rounded duration-300 cursor-pointer hover:bg-white hover:text-slate-500" value={"Book My Seat"} />
      </div>
    </form>
    <div className="col-span-1 mx-10">
        <div className="header">
        <h1 className="bg-slate-800 text-3xl text-white text-center p-3">Booking Summary</h1>
        <div className="details p-5">
        <p className="my-3">Name: {formData.name}</p>
        <p className="my-3">Mobile Number: {formData.mobile}</p>
        <p className="my-3">CNIC Number: {formData.cnic}</p>
        <p className="my-3">Seat Number: {formData.seat_no}</p>
        </div>
        </div>
    </div>
  </div>
  </div>
  )
}
