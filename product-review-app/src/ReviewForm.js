import React from "react";
import { Link } from "react-router-dom";

const ReviewForm = ({ review, handleSubmit, handleChange}) => {
return (
<form onSubmit ={handleSubmit}>
          <label> Review Title </label>
          <input 
          placeholder="Title"
          value={review.title}
          name="title"
          onChange={handleChange}
          /> 
          <label> Review </label>
          <input 
          placeholder="Review"
          value = {review.content}
          name="content"
          onChange={handleChange}
           />
          <label> Author </label>
          <input 
          placeholder="Temporary username"
          value = {review.author}
          name = "author"
          onChange={handleChange}
          />
          <button type="submit"> Submit </button>
      </form>
      )}

export default ReviewForm 