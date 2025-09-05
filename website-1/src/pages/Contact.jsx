import { RiContactsBookUploadLine } from "react-icons/ri";
import { CiClock2, CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaHandshake } from "react-icons/fa";
import {useState} from "react"

const Contact = () => {
  const [user,setUser]=useState({
    name:""
    ,email:"",
    number:"",
    description:""
  })

  const handleOnchange=(e)=>{
     const {name,value}=e.target;
     setUser((prev)=>({...prev,[name]:value}))
  }

  
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Form Data:", user); // see the data in console
  };

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row md:gap-20 items-start justify-between p-6 md:p-10 w-full max-w-6xl mx-auto">
      
      {/* Left Section */}
      <div className="flex flex-col items-start w-full md:w-1/2">
        <h1 className="text-2xl font-serif">Get In Touch</h1>

        {/* Contact Details */}
        <div className="flex flex-row mt-4 items-start gap-4">
          <div className="flex flex-col items-center">
            <RiContactsBookUploadLine className="w-5 h-5 text-[#B2986B]" />
            <div className="w-[2px] h-24 bg-[#B2986B] mt-1"></div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-xl font-bold">Contact Details</p>
            <p className="text-[#5A5A5A]">Address: 678 Melbourne, Australia</p>
            <p className="text-[#5A5A5A]">Number: 91 123-456-7890</p>
            <p className="text-[#5A5A5A]">Email: info@example.com</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex flex-row mt-4 items-start gap-4">
          <div className="flex flex-col items-center">
            <CiClock2 className="w-5 h-5 text-[#B2986B]" />
            <div className="w-[2px] h-24 bg-[#B2986B] mt-1"></div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-black text-xl font-bold">Working Hours</p>
            <p className="text-[#5A5A5A]">Monday to Friday: 9.00 AM – 5.00 PM</p>
            <p className="text-[#5A5A5A]">Saturday: 10.00 AM – 2.00 PM</p>
            <p className="text-[#5A5A5A]">Sunday: Closed</p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-row mt-4 items-center gap-4">
          <FaHandshake className="w-6 h-6 text-[#B2986B]" />
          <p className="text-black text-xl font-bold">Follow Us</p>
        </div>
        <div className="flex flex-row cursor-pointer text-[#B2986B] gap-4 py-4">
          <CiFacebook className="text-2xl" />
          <CiLinkedin className="text-2xl" />
          <CiTwitter className="text-2xl" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-1/2 mt-10 md:mt-0">
        <h1 className="text-2xl font-serif">Send Us A Message</h1>
        <form className="flex flex-col gap-5 mt-5 py-5 w-full" onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            className="border p-2 border-[#DDDDDD] bg-[#FAFAFA] w-full"
            onChange={handleOnchange}
            maxLength={15}
            minLength={5}
          />
          <input 
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email" 
            className="border p-2 border-[#DDDDDD] bg-[#FAFAFA] w-full"
            onChange={handleOnchange}
            required
          />
          <input 
            type="text"
            name="number"
            value={user.number}
            placeholder="Contact Number"
            className="border p-2 border-[#DDDDDD] bg-[#FAFAFA] w-full"
            onChange={handleOnchange}
            pattern="[0-9]{10,15}"

          />
          <textarea 
            placeholder="Case Description" 
            name="description" 
            value={user.description}
            className="border p-2 border-[#DDDDDD] bg-[#FAFAFA] w-full"
            onChange={handleOnchange}
            required
            maxLength={1000}
          />
         <button 
  type="submit" 
  className="text-[#B2986B] border border-[#B2986B] py-2 hover:bg-[#B2986B] hover:text-white transition">
            Request an Appointment
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
