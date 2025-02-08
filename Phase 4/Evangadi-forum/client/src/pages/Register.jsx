import React, { useState } from "react";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await axios.post("/user/login", {
        email: "lame1@gmail.com",
        password: "123456789",
      });
      alert("login successful");
      console.log(result.data);
      setResult(result.data.msg);
      // navigate("/login");
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <section>
      <h1>{result}</h1>
      <form onClick={handleSubmit}>
        {" "}
        <div>
          <span>username :---</span>
          <input type="text" placeholder="username" />
        </div>
        <div>
          <span>firstname :---</span>
          <input type="text" placeholder="firstname" />
        </div>
        <div>
          <span>lastname :---</span>
          <input type="text" placeholder="lastname" />
        </div>
        <div>
          <span>email :---</span>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <span>password :---</span>
          <input type="text" placeholder="password" />
        </div>
        <button type="submit">submit</button>
      </form>
    </section>
  );
}
