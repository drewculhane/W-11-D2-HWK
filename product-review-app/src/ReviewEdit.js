import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import ReviewForm from './ReviewForm.js'


function ReviewEdit (props) {
    const [input, setInput] = useState({ title: "", content: "", author: ""});
    let productId = props.match.params.productid 
    let reviewId = props.match.params.reviewid 

const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(input)
    axios({
      url: `http://localhost:3000/reviews/${reviewId}`, 
      method: "PUT",
      data: input,
    })
    window.location.href =`/products/${productId}`
}
return ( 
 <div className="edit-redir">
     <h4> Edit your post here: </h4>
 <ReviewForm
 review={input}
 handleChange={handleChange}
 handleSubmit={handleSubmit}
/>
</div>
) 
} 

export default ReviewEdit 