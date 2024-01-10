import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import {
	Card,
	Stack,
	Image,
	Heading,
	Text,
	Button,
	CardBody,
	CardFooter,
	Grid,
	GridItem,
	Flex,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";



const Homepage = () => {
	const [resdata, setResdata] = useState([]);
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTgxMCIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjAtMTItMTlUMTE6MTM6MjQuMDAwWiIsImlhdCI6MTY5OTA3NzI1NiwiZXhwIjoxNzA2MzM0ODU2fQ.bdGB6gYuLIkLiC_reFgp6S0RxjDSs67tf_NEb_fSo00";
	useEffect(() => {
		fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118");

		fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((resp) => resp.json())
			.then((json) => {
				setResdata(json);
				console.log(json);
			});
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.navbar}>
				<h6>
					Pre Order from{" "}
					<span>
						<i className="fas fa-user"></i>
					</span>
				</h6>
				<h5>Connaught Place</h5>
			</div>
			<div className={styles.name}>
				<div>
					<h3>Karan</h3>
					<h5>Let's explore this evening</h5>
				</div>
				<div className={styles.icons}>
					<div>
						<img
							src="https://img.freepik.com/premium-vector/special-offer-label-icon-flat-style-discount-banner-vector-illustration-isolated-background-sale-sign-business-concept_157943-577.jpg"
							alt=""
							width="50px"
							height="50px"
						/>
						<p>Special Offers</p>
					</div>
					<div>
						<img
							src="https://icons.veryicon.com/png/o/business/work-circle/ethereum-wallet.png"
							alt=""
							width="50px"
							height="50px"
						/>
						<p>Wallet</p>
					</div>
				</div>
			</div>

			<div className={styles.box}>
				<div className={styles.boxText}>
					<p>Your tase</p>
					<p>
						{" "}
						<span>
							<i className="fas fa-chevron-right"></i>
						</span>
						see all
					</p>
				</div>
				<div className={styles.diplayGrid}>
					<div className={styles.verticalCard}>
						<img
							src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
							alt=""
						/>
						<div
							style={{
								width: "100%",
								height: "70px",
								lineHeight: "14px",
								backgroundColor: "#FFB6C1",
							}}
						>
							<p style={{ padding: "10px 0px 0px 10px" }}>Nik Bakers</p>
							<p
								style={{
									fontSize: "12px",
									lineHeight: "14px",
									paddingLeft: "10px",
								}}
							>
								Cannought Place New Delhi
							</p>
						</div>
					</div>
					<div className={styles.verticalCard}>
						<img
							src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
							alt=""
						/>
						<div
							style={{
								width: "100%",
								height: "70px",
								lineHeight: "14px",
								backgroundColor: "#FFB6C1",
							}}
						>
							<p style={{ padding: "10px 0px 0px 10px" }}>Nik Bakers</p>
							<p
								style={{
									fontSize: "12px",
									lineHeight: "14px",
									paddingLeft: "10px",
								}}
							>
								Cannought Place New Delhi
							</p>
						</div>
					</div>
					<div className={styles.verticalCard}>
						<img
							src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
							alt=""
						/>
						<div
							style={{
								width: "100%",
								height: "70px",
								lineHeight: "14px",
								backgroundColor: "#FFB6C1",
							}}
						>
							<p style={{ padding: "10px 0px 0px 10px" }}>Nik Bakers</p>
							<p
								style={{
									fontSize: "12px",
									lineHeight: "14px",
									paddingLeft: "10px",
								}}
							>
								Cannought Place New Delhi
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.tryNowpic}>
				<img
					src="https://media.istockphoto.com/id/1169694902/photo/assorted-indian-non-vegetarian-food-recipe-served-in-a-group-includes-chicken-curry-mutton.jpg?s=2048x2048&w=is&k=20&c=_F4O6GkTFvwnpM5Ic_x52WNuQGg9bsMcfA9hTzzO8Fg="
					alt=""
					width="95%"
					height="100%"
					style={{ objectFit: "cover", margin: "auto", borderRadius: "18px" }}
				/>
			</div>
			<div>
				<h6>Popular Ones</h6>
				<Card  gap={4}>
					{resdata.length &&
						resdata.map((item) => (
							<Link key={item.id} to={`/restaurants/${item.restaurant_id}`}>
							<Card key={item.id} variant="outline" height="250px">
								<Flex key={item.id} variant="outline">
									<Image
										objectFit="contain"
										src={item.images[0].url}
										alt={item.restaurant_name}
										width="220px"
										height="180px"
									/>
									<Stack
										p={4}
										flex="2" // Take 2/3 of the available space
									>
										<CardBody>
											<Heading size="md">{item.restaurant_name}</Heading>
											<Text py={2}>
												Cakes, Pastrys and Pastas
											</Text>
											<Text>
											B-6/2, Model Town 1, Model Town Phase I, New Delhi, Delhi 110009
											</Text>
											<div style={{display:'flex',justifyContent:'space-between',marginTop:'35px'}}>
												<div>
													<Text display='flex'> <FaStar style={{marginTop:'3px',marginRight:'3px'}} /> 4.5</Text>
												<Text style={{marginBottom:'10px'}}>Popularity</Text>
												</div>
												<div>												
												<Text display='flex'> <BsCurrencyDollar style={{marginTop:'3px',marginRight:'3px'}} /> 200</Text>
												<Text>Cost for two</Text>
												</div>
											</div>										
										</CardBody>
									</Stack>
								</Flex>
							</Card>
							</Link>
						))}
				</Card>
			</div>
		</div>
	);
};

export default Homepage;
