import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const AddReview = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("평점");
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post(`/${id}/add-review`, {
        name,
        rating,
        review: reviewText,
      });

      // =========== ** REDUX 추가하기 * ===========
      history.push("/");
      history.push(location.pathname);
    } catch (err) {}

    // 리뷰를 추가했을 때 화면이 전체적으로 재로딩되면서 모든 것들이 새롭게 리프레시 ?
    // This is where a state management library like redux comes in handy to update the state application wide and refresh the page.
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">작성자 이름</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="예) 링키 대표 홍길동"
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
            placeholder="식당 후기를 남겨주세요 ~"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitReview}
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default AddReview;
