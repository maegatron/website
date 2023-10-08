import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct(){
    const data = {title, desc, price};
    await axios.post('/api/product', data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>

        <label>Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>

        <label>Product Description</label>
        <textarea
          placeholder="Product Description"
          value={desc}
          onChange={(ev) => setTitle(ev.target.value)}
        ></textarea>

        <label>Price (USD)</label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>

        <button type="submit" className="save">
          Save
        </button>
      </form>
    </Layout>
  );
}
