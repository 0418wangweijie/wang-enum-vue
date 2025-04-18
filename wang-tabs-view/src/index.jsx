import React,{useState} from 'react';

import Tabs from './Tabs';

const Index = () => {
	const [activeTab, setActiveTab] = useState('home');

	const tabList = [
		{ name: 'home', label: 'Home', icon: 'home' },
		{ name: 'profile', label: 'Profile', icon: 'user' },
        // { name: 'c', label: 'c', icon: 'c' },
		// ... other tabs
	];

	return (
		<Tabs
			tabList={tabList}
			activeTab={activeTab}
			onTabChange={setActiveTab}
		/>
	);
};

export default Index