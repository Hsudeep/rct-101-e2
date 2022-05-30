import React from "react";
import { Text, Image, Box, Stack, Heading, Tag, TagLabel } from '@chakra-ui/react'
const Product = (props) => {
  return (
    <div>
    {props.data.map((beta)=>(
      <Stack data-cy="product" key={beta.id}>
        <Image data-cy="product-image" src={beta.imageSrc}/>
        <Text data-cy="product-category">{beta.category}</Text>
        <Tag>
          <TagLabel data-cy="product-gender">{beta.gender}</TagLabel>
        </Tag>
        <Heading data-cy="product-title">{beta.title}</Heading>
        <Box data-cy="product-price">{beta.price}</Box>
    </Stack>
  ))}
  </div>
  );
};

export default Product;
