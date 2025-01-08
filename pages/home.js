import ProductCard from "@/components/productCard";
import { homeStyled } from "@/styles/homeStyled";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export async function getServerSideProps(context) {
	const res = await fetch("https://fakestoreapi.in/api/products");
	const data = await res.json();
	const productsData = data.products;

	return {
		props: { productsData },
	};
}

const Home = ({ productsData }) => {
	const categoryOptions = [
		"Woman’s Fashion",
		"Men’s Fashion",
		"Electronics",
		"Home & Lifestyle",
		"Medicine",
		"Sports & Outdoor",
		"Baby’s & Toys",
		"Groceries & Pets",
		"Health & Beauty",
	];

	const countdown = [
		{ title: "days", subtitle: "03" },
		{ title: "hours", subtitle: 23 },
		{ title: "minutes", subtitle: 19 },
		{ title: "seconds", subtitle: 56 },
	];

	const scrollContainerRef = useRef(null);
	const router = useRouter();

	const scrollButton = (direction) => {
		if (scrollContainerRef.current) {
			if (direction === "right") {
				scrollContainerRef.current.scrollBy({
					left: 600, // Adjust the scroll distance
					behavior: "smooth", // Smooth scrolling
				});
			} else {
				scrollContainerRef.current.scrollBy({
					left: -600, // Adjust the scroll distance
					behavior: "smooth", // Smooth scrolling
				});
			}
		}
	};

	return (
		<>
			<style jsx>{homeStyled}</style>
			{/* <div className="divider"></div> */}
			<div style={{ paddingBottom: "200px" }}>
				<div className="categoryContainer">
					<div className="leftSection">
						{categoryOptions.map((ele) => (
							<span className="category" key={ele}>
								{ele}
							</span>
						))}
					</div>
					<div className="rightSection">
						<div className="imageContainer">
							{/* <img src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"/> */}
						</div>
					</div>
				</div>
				<div className="dealsToday">
					<div className="rectangle"></div>
					<div>Today's</div>
				</div>
				<div className="countdown">
					<div className="textFlashSales">Flash Sales</div>
					<div className="countdownContainer">
						{countdown.map((ele, index) => (
							<div className="timeContainer" key={index}>
								<div className="time">
									<div className="timeTitle">{ele.title}</div>
									<div className="timeSubTitle">{ele.subtitle}</div>
								</div>
								{countdown.length > index + 1 && (
									<div className="colonContainer">
										<div className="colon"></div>
										<div className="colon"></div>
									</div>
								)}
							</div>
						))}
					</div>
					<div className="buttonContainer">
						<div className="slideButton" onClick={() => scrollButton("left")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none">
								<path
									d="M8 1L1 8L8 15M1 8H17"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="slideButton" onClick={() => scrollButton("right")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19"
								height="16"
								viewBox="0 0 19 16"
								fill="none">
								<path
									d="M1.5 8H18M18 8L11 1M18 8L11 15"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div
					ref={scrollContainerRef}
					style={{
						display: "flex",
						margin: "30px 0px",
						overflow: "auto",
						scrollbarWidth: "none",
					}}>
					{productsData &&
						productsData.map((ele) => (
							<ProductCard product={ele} key={ele.id} />
						))}
				</div>
				<div
					style={{ display: "flex", borderRadius: "4px", marginTop: "60px" }}>
					<div
						className="ctaAllProducts"
						onClick={() => router.push("/products")}>
						View All Products
					</div>
				</div>
				<div
					style={{
						width: "100%",
						borderBottom: " 1px solid rgb(225,225,225)",
						marginTop: "60px",
					}}></div>
				<div className="categories">
					<div className="rectangle"></div>
					<div>Categories</div>
				</div>
				<div className="countdown">
					<div className="textFlashSales">Browse By Category</div>
					<div className="buttonContainer">
						<div className="slideButton" onClick={() => console.log("test")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none">
								<path
									d="M8 1L1 8L8 15M1 8H17"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="slideButton" onClick={() => console.log("test")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19"
								height="16"
								viewBox="0 0 19 16"
								fill="none">
								<path
									d="M1.5 8H18M18 8L11 1M18 8L11 15"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
