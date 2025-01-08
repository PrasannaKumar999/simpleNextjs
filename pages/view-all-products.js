import ProductCard from '@/components/productCard';
import React from 'react'

export async function getServerSideProps(context) {
  const res = await fetch('https://fakestoreapi.in/api/products?limit=150');
  const data = await res.json();
	const productsData = data.products;

  return {
    props: { productsData },
  };
}

const ViewAllProducts = ({productsData}) => {
  return (
    <>
			<div style={{ display: "flex", flexWrap: "wrap", gap: "30px",justifyContent:"center" }}>
				{productsData && productsData?.map((product) => (
					<ProductCard product={product} key={product.id}/>
				))}
			</div>
		</>
  )
}

export default ViewAllProducts
