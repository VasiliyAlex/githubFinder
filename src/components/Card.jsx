import React from "react";
import { userSelector } from "../redux/userSlice";
import { useSelector } from "react-redux";

const Card = () => {
  const { user } = useSelector(userSelector);

  return (
    <div className="card">
      <div className="card__left">
        <div className="card__img">
          <img src={user?.avatar_url} alt="" />
        </div>
        <a href={user?.html_url} className="visit">ПОСЕТИТЬ</a>
      </div>
      <div className="card__right">
        <p className="card__p">
          имя:  <span className="card__span">{user?.login}</span>
        </p>
        <p className="card__p">
          Репозиториев:  <span className="card__span">{user?.public_repos}</span>
        </p>
        <p className="card__p">
          Создан:  <span className="card__span">{user?.created_at.split("T")[0]}</span>
        </p> 
        <p className="card__p"> 
          Подписчиков: <span className="card__span">{user?.followers}</span>
        </p>
        <p className="card__p">
          Подписок:  <span className="card__span">{user?.following}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
