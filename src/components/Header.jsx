import Filters from "./Filters";

const Header = () => {
  return (
    <header style={{display: "flex", flexDirection: "column", gap: "15px"}}>
      <h1>React Shop 🛒</h1>
      <Filters/>

    </header>
  );
};

export default Header;
