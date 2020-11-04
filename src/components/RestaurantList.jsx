import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setRestaurants]);

  const handleDelete = async (id) => {
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      console.log(response);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleMenus = (restaurant) => {
    const menu = restaurant.menu;
    if (menu === "A") {
      return "국/탕/찌개";
    }
    if (menu === "B") {
      return "육류";
    }
    if (menu === "C") {
      return "면류";
    }
    if (menu === "D") {
      return "밥/죽/전/한식(기타)";
    }
    if (menu === "E") {
      return "해산물";
    }
    if (menu === "F") {
      return "분식";
    }
    if (menu === "G") {
      return "중식";
    }
    if (menu === "H") {
      return "일식";
    }
    if (menu === "I") {
      return "양식/간편식";
    }
    if (menu === "J") {
      return "뷔페 및 기타";
    }
    return null;
  };

  const handlePrices = (restaurant) => {
    const price_range = parseInt(restaurant.price_range);
    if (price_range === 1) {
      return "1만원 이하";
    }
    if (price_range === 2) {
      return "1만원 ~ 2만원";
    }
    if (price_range === 3) {
      return "2만원 ~ 3만원";
    }
    if (price_range === 4) {
      return "3만원 ~ 4만원";
    }
    if (price_range === 5) {
      return "4만원 이상";
    }
    return null;
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">식당 이름</th>
            <th scope="col">주소</th>
            <th scope="col">메뉴</th>
            <th scope="col">가격대(1인)</th>
            <th scope="col">평점</th>
            <th scope="col">수정하기</th>
            <th scope="col">삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{handleMenus(restaurant)}</td>
                  <td>{handlePrices(restaurant)}</td>
                  <td>review</td>
                  <td>
                    <button className="btn btn-warning">수정하기</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(restaurant.id)}
                      className="btn btn-danger"
                    >
                      삭제하기
                    </button>
                  </td>
                </tr>
              );
            })}
          {/* <tr>
            <td>생생낙지</td>
            <td>센텀시티</td>
            <td>밥/죽/전/한식(기타)</td>
            <td>1만원 ~ 2만원</td>
            <td>평점</td>
            <td>
              <button className="btn btn-warning">수정하기</button>
            </td>
            <td>
              <button className="btn btn-danger">삭제하기</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
