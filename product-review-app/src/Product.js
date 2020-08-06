import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import DeleteReview from './DeleteReview.js';
import ReviewForm from './ReviewForm.js'

function Product(props) {
    const [input, setInput] = useState({ title: "", content: "", author: ""});
    let productId = props.match.params.productid 
    const [reviews, setReviews] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/products/${productId}/reviews`);
        console.log("Ideas - useEffect - response", response);
        setReviews(response.data);
      } catch (err) {
        console.error(err);
      }
    };  
    makeAPICall();
  }, [])

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
      url: `http://localhost:3000/products/${productId}/reviews`,
      method: "POST",
      data: input,
    })
    window.location.reload() 
}
  let productReviews; 
  if (!reviews)
    productReviews = (
        <div> 
            <p> Loading </p>
        </div> 
    )
  else {
      productReviews = reviews.map((review) => {
          return (
              <div className="Review-cont-two">
                 <p> {review.title} </p>
                 <p> {review.content} </p>
                 <p> {review.author} </p>
                 <p> {review.created_at} </p>
                 <DeleteReview reviewID={review.id} />
                 <Link to={productId + '/review/' + review.id +'/edit/'}><button>Edit</button></Link>
              </div>
          )
      })
  }
  return (
      <>
      <div className="Review-cont">
          <h4> Product reviews for this product </h4>
          <Link to="/"><h4> Back to Products </h4></Link>
          {productReviews}
      </div>
      <h4> Submit a review: </h4>
      <ReviewForm
          review={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </>
  )
}

export default Product 