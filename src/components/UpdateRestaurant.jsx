import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [menu, setMenu] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      menu,
      price_range: priceRange,
    });
    console.log(updatedRestaurant);
    history.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        const restaurant = response.data.data.restaurant;
        setName(restaurant.name);
        setLocation(restaurant.location);
        setMenu(restaurant.menu);
        setPriceRange(restaurant.price_range);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">식당 이름</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="맛집 이름"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">주소</label>
          <input
            type="text"
            id="location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="맛집 주소"
          />
        </div>
        <div className="form-group">
          <label htmlFor="menu">메뉴</label>
          <select
            // value={priceRange}
            // onChange={(e) => setPriceRange(e.target.value)}
            className="custom-select my-1 mr-sm-2 form-control"
            id="menu"
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
          >
            <option disabled>메뉴</option>
            <option value="A">국/탕/찌개</option>
            <option value="B">육류</option>
            <option value="C">면류</option>
            <option value="D">밥/죽/전/한식(기타)</option>
            <option value="E">해산물</option>
            <option value="F">분식</option>
            <option value="G">중식</option>
            <option value="H">일식</option>
            <option value="I">양식/간편식</option>
            <option value="J">뷔페 및 기타</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price_range">가격대(1인)</label>
          <select
            className="custom-select my-1 mr-sm-2 form-control"
            id="price_range"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option disabled>가격대(1인)</option>
            <option value="1">1만원 이하</option>
            <option value="2">1만원 ~ 2만원</option>
            <option value="3">2만원 ~ 3만원</option>
            <option value="4">3만원 ~ 4만원</option>
            <option value="5">4만원 이상</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          등록하기
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
