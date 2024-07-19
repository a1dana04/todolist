import React, { useEffect, useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [edit, setEdit] = useState(0)
  const [all, setAll] = useState([]);


  const addProduct = () => {
   const findProduct = all.find((el,id)=> el.name  === name)
   console.log(findProduct);
    if (url === "" || name === "" || price === "") {
      alert("Error");
    }else if(findProduct){
      alert("err")
    }else {
      let newProduct = {
        id: Date.now(),
        url: url,
        name: name,
        price: price,
      };
      let result = [newProduct, ...all];
      let sorteProduct =result.sort((a,b)=>b.price - a.price)
      setAll(sorteProduct );
      localStorage.setItem("todo", JSON.stringify(sorteProduct ));
    }
    setUrl("");
    setName("");
    console.log(edit);
    setPrice("");
    setEdit(0)
  };
  const enterHandle = (e)=>{
    if(e.key === "Enter"){
      addProduct()
    }
  }

  const editProduct = (index) => {
    let product = all.find((el) => el.id === index)
    console.log(product);
    setName(product.name)
    console.log(edit);
    setUrl(product.url)
    setEdit(index)
    setPrice(product.price)
  }

  const deleteProduct =(iDx)=>{
    
    let local = JSON.parse(localStorage.getItem("todo")) || [];
    let dele =local.filter((el,id)=>el.id !== iDx)
    setAll(dele)
    localStorage.setItem("todo",JSON.stringify(dele))
  }
  const readProduct = ()  => {
    let local = JSON.parse(localStorage.getItem("todo")) || [];
    setAll(local);
  };
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className="container">
      <h1> To Do List</h1>
      <div className="form">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="url"
          onKeyDown={(e)=>enterHandle(e)}
        />
        <input
          value={name}
          onKeyDown={(e)=>enterHandle(e)}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="price"
          onKeyDown={(e)=>enterHandle(e)}
        />
        <button onClick={() => addProduct()}>{edit ? 'Save product': 'Add Product' }</button>
      </div>
      {all.map((el) => (
        <div className="product">
          <img src={el.url} alt="img" />
          <h2>{el.name}</h2>
          <h2>{el.price}</h2>
          <button onClick={()=>deleteProduct(el.id)}>Delete</button>
          <button onClick={() => editProduct(el.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
