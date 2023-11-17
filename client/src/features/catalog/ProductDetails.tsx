import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios.get(`http://localhost:5217/api/products/${id}`);
  }, [id]);

  return <Typography variant='h2'>Product Details</Typography>;
}

export default ProductDetails;
