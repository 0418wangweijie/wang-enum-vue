import React,{useState, useRef, useEffect} from 'react';

import Tabs from './Tabs';
import {SlopeTabs} from "wang-tabs";
import ElevatedSlopeTabs from "./ElevatedSlopeTabs";
// import CanvasTabs from './CanvasTabs';
// import InvestmentStrategy from './in';
// import TabNavigation from './TabNav';

const Index = () => {
	const [activeTab, setActiveTab] = useState('home');

	const tabList = [
		{ name: 'home1', label: 'Homenidef', icon: 'home' },
		{ name: 'home', label: 'Home', icon: 'home' },
		// { name: 'profile', label: 'Profile', icon: 'user',render:()=>(
		// 	<div style={{
				
		// 	}}>
		// 		<div>icon</div>
		// 		<div>content</div>
		// 	</div>
		// ) },
        // { name: 'c', label: 'c', icon: 'c' },
		// ... other tabs
	];

	return (
		<div style={{
			// width:'50%'
			height:'100vh',
			background:'#fff',
			marginTop:50
		}}>
		{/*	<Tabs*/}
		{/*	tabList={tabList}*/}
		{/*	activeTab={activeTab}*/}
		{/*	style={{*/}
		{/*		// '--active-color': '#999',*/}
		{/*		// '--active-tab-height': '5.9rem'*/}
		{/*	}}*/}
		{/*	onTabChange={setActiveTab}*/}
		{/*/>*/}

			<ElevatedSlopeTabs tabList={tabList} activeTab={activeTab} onTabChange={setActiveTab}
				style={{
					'--tab-container-height': '3.57rem',
					'--tab-height': '2.85rem',
				}}


			/>

		<div>

			{/* <InvestmentStrategy/> */}
		</div>
		<div style={{
				marginTop:20
			}}>
		{/* <CanvasTabs
            tabList={tabList}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        /> */}
		</div>
			<div style={{
				marginTop:20
			}}>
				<SlopeTabs tabList={tabList} activeTab={activeTab} onTabChange={setActiveTab} style={{
					// '--active-color': '#999',
				}}/>
				<div>1111111111</div>
			</div>
			<div style={{
				marginTop:20
			}}>
				{/* <TabNavigation/> */}
			</div>
		</div>
	);
};

export default Index