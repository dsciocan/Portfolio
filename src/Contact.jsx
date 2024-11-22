import {React, useState} from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";




export default function Contact() {
    const [result, setResult] = useState("");
    
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ad5a0748-196f-457c-8593-7c41a597fbd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
        if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
      <div className="bg-bg-light sm:px-20 py-10">
         <h3 className="text-2xl font-light mb-10 ml-5">If you have any questions, ask away!</h3>                
        <div className=" text-center">
            <div className="font-light sm:text-xl text-2xl mb-5">
            <form onSubmit={onSubmit}>
                <label for="name">Name (required): </label>
                <input className="mx-5 w-72 sm:w-88 px-4 pb-2 mb-8 h-12 sm:h-8 rounded-md" type="text" name="name" required/>
                <br/>
                <label for="email">Email (required): </label>
                <input className="mx-5 w-72 sm:w-88 px-4 pb-2 mb-8 h-12 sm:h-8 rounded-md" type="email" name="email" required/>
                <br/>
                <label for="message">Your message:</label>
                <textarea className="mx-5 w-72 sm:w-88 sm:w-96 px-10 rounded-md" rows="3" name="message"></textarea>
                <br/>
                <button className="bg-bg-dark mt-5 rounded-lg px-2 py-2 font-normal text-bg-light" type="submit">Submit Form</button>
            </form>
            <span>{result}</span>
            </div>
            <div className="border-y-2 border-bg-dark"/>
            <div className="my-5">
            <h3 className="text-2xl font-light mb-10">Or contact me via</h3> 
            <div className="flex justify-center space-x-7">
            <a target="_blank" className="hover:text-dark-red" href="https://github.com/dsciocan"><FaGithub className="size-12" /></a> 
            <a target="_blank" className="hover:text-dark-red" href="https://www.linkedin.com/in/daniela-ciocan-631608267/"><FaLinkedin className="size-12" /></a>
            <a target="_blank" className="hover:text-dark-red" href="mailto:dsciocan@outlook.com"><FaEnvelopeOpenText className="size-12" /></a>
            </div>
            </div>
        </div>
        </div>
    )
}
