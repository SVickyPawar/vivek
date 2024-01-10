import { Card, CardBody, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const ResDetail = () => {
	const { id } = useParams();
	console.log("id: " + id);
	return (
		<div>
			<Card maxW="sm">
				<CardBody>
					<Image
						src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">Rahul Store</Heading>
						<Text py={2}>Cakes, Pastrys and Pastas</Text>
						<Text>
							B-6/2, Model Town 1, Model Town Phase I, New Delhi, Delhi 110009
						</Text>
						<Text color="blue.600" fontSize="2xl">
							$200
						</Text>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default ResDetail;
