import React, { useEffect, useState, useContext } from "react";
import axios from "../../axiosConfig";
import { UserContext } from "../../Components/Dataprovide/DataProvider"; 
import QuestionDetail from "../QuestionDetail/QuestionDetail";
import "./Allquestion.css";
import Layout from "../../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [userData] = useContext(UserContext); 
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

 const fetchQuestions = async () => {
   try {
     const token = localStorage.getItem("token");
     const response = await axios.get("/questions/", {
       headers: {
         Authorization: `Bearer ${token}`,
       },
       params: { userid: userData.userid },
     });
     setQuestions(response.data.questions);
     console.log(response.data.questions); // Check the response structure
   } catch (error) {
     console.error(error);
     // Handle error
   }
 };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setFilteredQuestions(
      questions?.filter((q) =>
        q?.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, questions]);

  return (
    <Layout>
      <div className="container">
        <div className="homp">
          <div className="hed">
            <div className="row askque">
              <div className="col-md-6">
                <button className="qb" onClick={() => navigate("/question")}>Ask Question</button>
              </div>
              <div className="col-md-6">
                <h4 className="wel text-md-end">
                  Welcome: {userData && userData.username}
                </h4>
              </div>
            </div>
          </div>
          <h3 className="ns">Questions</h3>
        </div>
        <div>
          {filteredQuestions.map((question) => (
            <QuestionDetail question={question} key={question.id} /> 
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;