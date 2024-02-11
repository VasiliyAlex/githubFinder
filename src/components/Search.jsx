import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGithubuser, getUserrepos } from "../redux/userSlice";

const Search = () => {
  const dispatch = useDispatch();
  
  const [search, setSearch] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getGithubuser(search));
    dispatch(getUserrepos(search));
  };

  return (
        <form className="search" onSubmit={submitHandler}>
          <input
            type="text"
            className="search__input"
            placeholder="Введите имя пользователя"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="search__button" onClick={submitHandler}>
            НАЙТИ
          </button> 
        </form>
  );
};

export default Search;
