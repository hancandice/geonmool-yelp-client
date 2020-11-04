import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="맛집 이름"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="맛집 주소"
            />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
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
            <select className="custom-select my-1 mr-sm-2">
              <option disabled>인당 가격대</option>
              <option value="1">1만원 이하</option>
              <option value="2">1만원 ~ 2만원</option>
              <option value="3">2만원 ~ 3만원</option>
              <option value="4">3만원 ~ 4만원</option>
              <option value="5">4만원 이상</option>
            </select>
          </div>
          <button className="btn btn-primary">등록하기</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
