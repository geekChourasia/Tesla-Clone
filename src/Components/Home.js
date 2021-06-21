import React from 'react'
import Section from './Section'

function Home() {
	return (
		<div>
		<Section title="Model S"
			description="Order Online for Touchless Delivery"
			backgroundImg="/images/model-s.jpg"
			leftBtnText="Custom order"
			rightBtnText="Existing inventory"
		/>

<Section title="Model Y"
			description="Order Online for Touchless Delivery"
			backgroundImg="/images/model-y.jpg"
			leftBtnText="Custom order"
			rightBtnText="Existing inventory"
		/>


<Section title="Model 3"
			description="Order Online for Touchless Delivery"
			backgroundImg="/images/model-3.jpg"
			leftBtnText="Custom order"
			rightBtnText="Existing inventory"
		/>
		<Section title="Model X"
			description="Order Online for Touchless Delivery"
			backgroundImg="/images/model-x.jpg"
			leftBtnText="Custom order"
			rightBtnText="Existing inventory"
		/>

		<Section title="Lowest Cost Solar Panels in America"
			description="Money-back gaurantee"
			backgroundImg="/images/solar-panel.jpg"
			leftBtnText="Order now"
			rightBtnText="Learn more"
		/>

                <Section title="Accessories"
			description=""
			backgroundImg="/images/accessories.jpg"
			leftBtnText="Order now"
			
		/>


			
		</div>
	)
}

export default Home
