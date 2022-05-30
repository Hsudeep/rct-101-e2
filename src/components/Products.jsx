import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct.jsx"
import Product from "./Product.jsx"
import Pagination from "./Pagination.jsx";
import axios from 'axios';
import { Flex, Grid,  } from "@chakra-ui/react";
const Products = () => {
  const [LinkwaladData, setLinkwalaData] = useState([])
  useEffect(()=>{
    const getDatafromAxios = async()=>{
      let datafromLink = await axios.get("http://localhost:8080/products")
      setLinkwalaData(datafromLink.data)
      
    };
    getDatafromAxios();
  },[])
  
  return (
    <Flex>
      <AddProduct>
      </AddProduct>
      <Grid>
        <Product data={LinkwaladData}>
        </Product>
      </Grid>
      <Pagination>
      </Pagination>
    </Flex>
  );
};

export default Products;
