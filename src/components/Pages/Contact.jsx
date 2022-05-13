import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';

const Contact= () => {
    const [ctc,setCtc] = useState({
        name:'',
        num:'',
        message:''
    })

    const handleChange= e =>{
        setCtc({...ctc,[e.target.name]:e.target.value})
    }

    const handleSubmit= e =>{
        e.preventDefault();
        console.log(ctc);
        alert("Logged data to console")
    }

    return (
        <>
        <div className="my-4">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">Feel free to contact us if you want to comission us, or require any help.</p>
        </div>
        
        <div>
            <form className="contact-form-container justify-content-center" onSubmit={handleSubmit}>
                    <div className="mb-3 ">
                        <label for="formGroupInput">Email-id</label>     
                        <input type="text" value={ctc.name} placeholder="Email id"  className="form-control"  name='name' onChange={handleChange} required />
                    </div>    
                    <div className="mb-3 ">
                    <label for="formGroupInput">Contact number</label>  
                        <input type="number" value={ctc.num} placeholder="Mobile Number" className="form-control" name='num' onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput">Message</label>  
                        <textarea placeholder="Your Message"  value={ctc.message} className="form-control" name='message' onChange={handleChange} required />
                    </div>
                
                <button className="btn-primary" value="Submit">Send!</button>
            </form>
        </div>

        <div className="pt-4 mt-4 justify-content-center text-center">
            <NavLink to= "/" className="btn btn-secondary">
                <AiIcons.AiOutlineHome/>
            </NavLink>
        </div>
        </>
    );
}

export default Contact;
