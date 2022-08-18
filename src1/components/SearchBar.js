import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          required
        />
      </form>
    </div>
  );
}
