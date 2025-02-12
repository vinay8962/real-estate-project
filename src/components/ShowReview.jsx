import React, { useState } from "react";
import { FaStar, FaRegStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import avatarOne from "../assets/avatar/avatar-1.jpg";
import avatarTwo from "../assets/avatar/avatar-2.jpg";
import avatarThree from "../assets/avatar/avatar-3.jpg";
import BlogOneOne from "../assets/blog/comment-1.jpg";
import BlogOneTwo from "../assets/blog/comment-2.jpg";
import BlogOneThree from "../assets/blog/comment-3.jpg";
import { IoIosArrowForward } from "react-icons/io";

const ShowReview = () => {
  const initialReviews = [
    {
      id: 1,
      image: avatarOne,
      name: "Viola Lucas",
      time: "August 13, 2023",
      reviewStar: 5,
      reviewParagraph:
        "It's really easy to use and exactly what I am looking for. A lot of good-looking templates & it's highly customizable. Live support is helpful and solved my issue in no time.",
      reviewImage: [BlogOneOne, BlogOneTwo, BlogOneThree],
      likes: 10,
      dislikes: 2,
    },
    {
      id: 2,
      image: avatarTwo,
      name: "James Smith",
      time: "September 10, 2023",
      reviewStar: 4,
      reviewParagraph:
        "Great product! The templates are beautiful, and customer service was very responsive. Highly recommend it.",
      reviewImage: [BlogOneTwo, BlogOneThree],
      likes: 7,
      dislikes: 1,
    },
    {
      id: 3,
      image: avatarThree,
      name: "Sophia Williams",
      time: "October 5, 2023",
      reviewStar: 5,
      reviewParagraph:
        "Absolutely love this! The design is sleek, and it's incredibly user-friendly. Worth every penny.",
      reviewImage: [BlogOneThree, BlogOneOne],
      likes: 15,
      dislikes: 0,
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);

  const handleLike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, likes: review.likes + 1 } : review
      )
    );
  };

  const handleDislike = (id) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, dislikes: review.dislikes + 1 } : review
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Guest Reviews</h1>

      {/* Reviews */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 border-b">
            {/* Header */}

            <div className="flex justify-between ">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">{review.name}</h2>
                  <p className="text-sm text-gray-500">{review.time}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex text-yellow-500 mb-2">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < review.reviewStar ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                )}
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-700">{review.reviewParagraph}</p>

            {/* Review Images */}
            {review.reviewImage.length > 0 && (
              <div className="flex space-x-2 mt-4">
                {review.reviewImage.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Review"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                ))}
              </div>
            )}

            {/* Like & Dislike Buttons */}
            <div className="mt-4 flex items-center space-x-6 text-gray-700">
              <button
                className="flex items-center space-x-2 hover:text-green-600"
                onClick={() => handleLike(review.id)}
              >
                <FaThumbsUp /> <span>{review.likes}</span>
              </button>

              <button
                className="flex items-center space-x-2 hover:text-red-600"
                onClick={() => handleDislike(review.id)}
              >
                <FaThumbsDown /> <span>{review.dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Reviews Button */}
      <div className="my-10">
        <button className="bg-primary flex items-center px-4 py-4 text-white rounded-2xl">
          View All Reviews <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ShowReview;
