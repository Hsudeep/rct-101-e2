import React, { useState } from "react";
import { Button, Modal, ModalBody, Input, Select, RadioGroup, Radio, useDisclosure } from '@chakra-ui/react'
const AddProduct = () => {

  const [SaveInputData, setSaveInputData] = useState([])
  const [inputData, setinputData] = useState({
    title: "",
    category:"",
    gender:"",
    imageSrc:"https://i.picsum.photos/id/213/422/262.jpg?hmac=nuMJ2NcUekzJBEUuHwEURd9dVoBgISd2AwjhMcNCgQI",
    price:0,
  })

  const handleChange = (e) =>{
    let {name, value} = e.target;
    setinputData({
      ...inputData,
      [name]:value,
    })
  }


  const setinLinkData = () =>{
    fetch("http://localhost:8080/products", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: SaveInputData.title,
        category:SaveInputData.category,
        gender:SaveInputData.gender,
        imageSrc:SaveInputData.imageSrc,
        price:SaveInputData.price,
      }),
    })
    .then((r)=>r.json())
    .then((d)=>{
      setSaveInputData([...SaveInputData, d]);
      setinputData()
    })
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef()
  return (
    <div>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} >Add New Product</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <Input type="text" data-cy="add-product-title" placeholder="Title"  onChange={handleChange}/>
          <Select data-cy="add-product-category"  onChange={handleChange}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Jeans</option>
            <option data-cy="add-product-category-jeans">Pants</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" onChange={handleChange}>
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input onChange={handleChange}  data-cy="add-product-price" placeholder="Price" type="Number"/>
          <Button data-cy="add-product-submit-button" onClick={setinLinkData}>Add Products</Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddProduct;
