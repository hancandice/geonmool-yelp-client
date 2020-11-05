import React, { useState } from "react";

const AddReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("평점");
  const [reviewText, setReviewText] = useState("");

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">평점</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option disabled>평점</option>
              <option value="1">별 1개</option>
              <option value="2">별 2개</option>
              <option value="3">별 3개</option>
              <option value="4">별 4개</option>
              <option value="5">별 5개</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">후기</label>
          <textarea
            id="review"
            className="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AddReview;
