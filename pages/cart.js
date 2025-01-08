import { useCart } from "@/context/cartContext";
import { cartStyles } from "@/styles/cartStyled";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Cart = () => {
	const { cart, dispatch } = useCart();
	const router = useRouter()

	return (
		<>
			<style jsx>{cartStyles}</style>
			{cart.length > 0 ? (
				<>
					<div className="cartHeaderContainer">
						<div className="cartColumn textStartAlign">Product</div>
						<div className="cartColumn textCenterAlign">Price</div>
						<div className="cartColumn textCenterAlign">Quantity</div>
						<div className="cartColumn textEndAlign">SubTotal</div>
					</div>
					<div className="cartItemsContainer">
						{cart.map((ele) => (
							<div className="productContainer" key={ele?.id}>
								<div
									className="cartColumn textStartAlign"
									style={{ display: "flex", alignItems: "center" }}>
									<div className="cartImageContainer">
										<img
											src={ele.image}
											style={{ width: "40px", height: "40px" }}
										/>
										<div
											className="iconRemove"
											onClick={() => {
												dispatch({ type: "REMOVE_FROM_CART", payload: ele });
											}}>
											X
										</div>
									</div>
									<span>
										{ele.brand} - {ele.model}
									</span>
								</div>
								<div className="cartColumn textCenterAlign"><span className="rupeeSymbol">₹</span>{ele.price * 84}</div>
								<div className="cartColumn textCenterAlign">
									<span
										className="quantityButton"
										onClick={() => {
											dispatch({ type: "DECREASE_QUANTITY", payload: ele });
										}}>
										-
									</span>
									<span className="quantity">{ele.quantity}</span>
									<span
										className="quantityButton"
										onClick={() => {
											dispatch({ type: "INCREASE_QUANTITY", payload: ele });
										}}>
										+
									</span>
								</div>
								<div
									className="cartColumn textEndAlign"
									style={{ textAlign: "end" }}>
									<span className="rupeeSymbol">₹</span>{ele.price * ele.quantity * 84}
								</div>
							</div>
						))}
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div className="ctaButton">Return To Shop</div>
						<div className="ctaButton">Update Cart</div>
					</div>

					<div className="cartBottomContainer">
						<div className="couponContainer">
							<div>
								<input
									placeholder="Coupon Code"
									style={{ height: "100%", width: "100%", fontSize: "16px" }}
									className="ctaCouponInput"
								/>
							</div>
							<div className="ctaButtonActive">Apply Coupon</div>
						</div>
						<div className="cartContainer">
							<div style={{ fontSize: "20px", fontWeight: "500" }}>
								Cart Total
							</div>
							<div className="cartRow">
								<div>Sub Total</div>
								<div>
								<span className="rupeeSymbol">₹</span>
									{cart.length > 0 &&
										cart.reduce((sum, item) => sum + item.price * item.quantity * 84, 0)}
								</div>
							</div>
							<div className="cartRow">
								<div>Shipping</div>
								<div>Free</div>
							</div>
							<div className="cartRow" style={{ border: "none" }}>
								<div>Total</div>
								<div>
								<span className="rupeeSymbol">₹</span>
									{cart.length > 0 &&
										cart.reduce((sum, item) => sum + item.price * item.quantity * 84, 0)}
								</div>
							</div>
							<div className="ctaButtonActive">Proceed To Checkout</div>
						</div>
					</div>
				</>
			) : (
				<div
					style={{
						display: "flex",
						flexDirection:"column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<div>
						<img src="/empty-cart.png" style={{width:"350px"}}/>
					</div>
					<div className="txtCartEmpty">Your Cart Is Empty!</div>
					<div className="txtCartpickup" onClick={() => {
						router.push('/home')
					}}>Pick up where you left off</div>
				</div>
			)}
		</>
	);
};

export default Cart;
