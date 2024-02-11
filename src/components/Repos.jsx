import { useState } from "react";
import { userSelector, reposSort } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

const Repos = () => {
  const dispatch = useDispatch();
  const { repos } = useSelector(userSelector);

  const [name, setName] = useState(true);
  const [stargazers, setStargazers] = useState(false);
  const [updated, setUpdated] = useState(false);
  const nameLink = clsx("repos__link", { active: name });
  const stargazersLink = clsx("repos__link", { active: stargazers });
  const updatedLink = clsx("repos__link", { active: updated });

  function addSort(sort) {
    setName(false);
    setStargazers(false);
    setUpdated(false);
    sort == "name"
      ? setName(true)
      : sort == "stargazers_count"
      ? setStargazers(true)
      : setUpdated(true);
    dispatch(reposSort(sort));
  }

  return (
    <div className="repos">
      <h1>Сортировка</h1>
      <ul className="repos__list">
        <li className={nameLink} onClick={() => addSort("name")}>
          ИМЯ
        </li>
        <li
          className={stargazersLink}
          onClick={() => addSort("stargazers_count")}
        >
          ЗВЕЗДЫ
        </li>
        <li className={updatedLink} onClick={() => addSort("updated_at")}>
          ДАТА
        </li>
      </ul>
      {repos?.map((item) => (
        <div className="repos__item" key={item.id}>
          <div className="repos__item-left">
            <p className="card__p">
              Имя: <span className="card__span">{item.name}</span>
            </p>
            <p className="card__p">
              Кол-во звёзд:{" "}
              <span className="card__span">{item.stargazers_count}</span>
            </p>
            <p className="card__p">
              Дата добавления:{" "}
              <span className="card__span">
                {item.updated_at.split("T")[0]}
              </span>
            </p>
          </div>
          <div className="repos__item-right">
            <a href={item.homepage} className="visit">
              ПОСЕТИТЬ
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repos;