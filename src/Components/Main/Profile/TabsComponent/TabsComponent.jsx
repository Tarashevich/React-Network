import React from 'react'
import x from './TabsComponent.module.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsComponent = () => {
	return (
		<div className={x.tabs}>

			<Tabs>
				<TabList>
					<Tab className={x.tab_item}>Posts</Tab>
					<Tab className={x.tab_item}>My Projects</Tab>
					<Tab className={x.tab_item}>Follow</Tab>
					<Tab className={x.tab_item}>UnFollow</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>

		</div>
	)
};

export default TabsComponent