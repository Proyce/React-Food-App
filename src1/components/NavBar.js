import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";

export default function NavBar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
