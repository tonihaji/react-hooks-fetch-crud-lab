import React ,{useEffect,useState}from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions,setQuestions]=useState([])


  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((r)=>r.json())
    .then(data =>setQuestions(data))

  },[])
  
  function handleDelete(id){
    //this is the delete fetch
    const deleteQuestion = questions.filter((question) => question.id !== id);
    setQuestions(deleteQuestion);
  }

  function updatedQuestions(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem 
          key={question.id} 
          question={question} 
          onDeleteQuestion={handleDelete}
          onUpdateQuestion={updatedQuestions}
          />
        ))}


      </ul>
    </section>
  );
}

export default QuestionList;