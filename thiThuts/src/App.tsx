import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { Product } from "./interfaces/Product";
import instance from "./services";

function App() {
  const navigate = useNavigate();

  // Hiển thị sản phẩm
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);

  //Xóa sản phẩm
  const handleDeleteProduct = (id: number) => {
    (async () => {
      const isConfirm = confirm("Are you sure you want to delete!");
      if (isConfirm) {
        await instance.delete(`/products/${id}`);
        setProducts(products.filter((item) => item.id !== id && item));
      }
    })();
  };

  //Thêm sản phẩm
  const handleAddProduct = (product: Product) => {
    (async () => {
      const { data } = await instance.post(`/products`, product);
      setProducts([...products, data]);
      navigate("/");
    })();
  };

  //Sửa sản phẩm
  const handleEditProduct = (product: Product) => {
    (async () => {
      const { data } = await instance.put(`/products/${product.id}`, product);
      setProducts(products.map((item) => (item.id === data.id ? data : item)));
      navigate("/");
    })();
  };
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add new product</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route
          index
          element={<Home onDel={handleDeleteProduct} products={products} />}
        />
        <Route
          path="/add"
          element={<AddProduct onSubmit={handleAddProduct} />}
        />
        <Route
          path="/edit/:id"
          element={<EditProduct onSubmit={handleEditProduct} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
