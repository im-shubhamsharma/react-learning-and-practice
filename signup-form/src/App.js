import React from "react";

export default function App() {
  
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    okayToEmail: false,
  });

  function handleChange(event) {
    const {value, name, checked, type} = event.target;
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name] : type==="checkbox" ? checked : value
        }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    const {password, confirmPassword, okayToEmail} = formData
    password === confirmPassword ? console.log("Succesfully signed up") : console.log("Passwords do not match");
    if(password === confirmPassword && okayToEmail){
        console.log("Thanks for signing up for our newsletter!")
    }  
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="form--input" 
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input 
            id="okayToEmail" 
            type="checkbox" 
            name="okayToEmail" 
            onChange={handleChange}
            checked={formData.okayToEmail}
           />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>

        <button onSubmit={handleSubmit} className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
