import React from "react";
import Avatar from "@mui/material/Avatar";
import "../../styles/Dashboard/Feedback.css";
import Rating from './Rating'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'

const images = [img1, img2,img3, img4, img5, img6]


const customerFeedback = [
    {
      name: "Alice Johnson",
      rating: 4.5,
      comment: "Great service and friendly staff. Will definitely come back! The ambiance was also very pleasant, making for a relaxing visit.",
    },
    {
      name: "Bob Smith",
      rating: 3.0,
      comment: "The experience was average. The waiting time was too long. The place was clean, but I expected more attentive service overall.",
    },
    {
      name: "Charlie Brown",
      rating: 5.0,
      comment: "Absolutely fantastic! Exceeded my expectations. The staff went above and beyond to ensure a memorable and enjoyable experience.",
    },
    {
      name: "Dana White",
      rating: 4.0,
      comment: "Good quality, but the prices could be better. I appreciated the attention to detail, but there are cheaper alternatives nearby.",
    },
    {
      name: "Ella Fitzgerald",
      rating: 2.5,
      comment: "Not satisfied with the product quality. Needs improvement. The staff was courteous, but the overall experience was disappointing.",
    },
    {
      name: "Frank Sinatra",
      rating: 4.8,
      comment: "Amazing experience. Highly recommended! The decor and atmosphere were wonderful, creating a perfect setting for relaxation.",
    },
  ];
  

  function Feed({ name, rating, comment , src}) {
    return (
      <div className="feed" style={{ marginBottom: '20px' }}>
        <div className="feed-profile" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Avatar alt={name} src={src} sx={{ marginRight: "10px" }} />
          <span style={{ fontWeight: 'bold' }}>{name}</span>
        </div>
        <Rating value={rating} readOnly />
        <p style={{ marginTop: '10px' }}>{comment}</p>
      </div>
    );
  }


export default function Feedback() {
    return (
        <div>
          {customerFeedback.map((feedback, index) => (
            <Feed
              key={index}
              name={feedback.name}
              rating={feedback.rating}
              comment={feedback.comment}
              src={images[index]}
            />
          ))}
        </div>
      );
}
