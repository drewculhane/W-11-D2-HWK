import React, { useState } from "react";
import axios from "axios";

const DeleteReview = (props) => {
    const [isDeleted, setIsDeleted] = useState(false);

    const destroy = async (link) => {
        await axios({
          url: `${link}`,
          method: "DELETE",
        });
        setIsDeleted(true);
        console.log(isDeleted);
      };
      const handleClick = async (e) => {
        const reviewID= props.reviewID;
        const url = `http://localhost:3000/reviews/${reviewID}`;
        await destroy(url);
        window.location.reload()
      };
      return (
          <button className="Del-button" onClick={handleClick}> Delete </button>
      )
}; 

export default DeleteReview 