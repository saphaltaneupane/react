import "./App.css";
import { useStore } from "./useStore";
function App() {
  const {
    products,
    searchTerm,
    category,
    maxPrice,
    setsearchTerm,
    setcategory,
    setmaxPrice,
  } = useStore();
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesMaxPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesMaxPrice;
  });
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <select value={category} onChange={(e) => setcategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Category1">Category 1</option>
        <option value="Category2">Category 2</option>
      </select>
      <input
        type="range"
        min="0"
        max="2000"
        value={maxPrice}
        onChange={(e) => setmaxPrice(Number(e.target.value))}
      />
      <span>Max Price: {maxPrice}</span>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
