import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurant } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [menu, setMenu] = useState("메뉴");
  const [priceRange, setPriceRange] = useState("가격대(1인)");

  const handleSubmit = async (e) => {
    e.preventDefault(); // not to lose all the states
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        menu,
        price_range: priceRange,
      });
      addRestaurant(response.data.data.restaurant);
      console.log(response);
    } catch (err) {}
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="맛집 이름"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="form-control"
              placeholder="맛집 주소"
            />
          </div>
          <div className="col">
            <select
              value={menu}
              onChange={(e) => setMenu(e.target.value)}
              className="custom-select my-1 mr-sm-2"
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
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
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
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
