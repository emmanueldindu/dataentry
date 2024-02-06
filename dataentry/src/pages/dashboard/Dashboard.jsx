import React from "react"
import Cards from "./Cards"
import Layout from "../../components/layout/Layout"
import DataCollection from "./DataCollection"
import NavHeader from "../../components/layout/NavHeader"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

	const navigate = useNavigate();

    const handleNavigateToAddData = () => {
      navigate('/data-collection'); // Replace '/adduser' with the actual path to your Add User page
    };

	return (
		<Layout>
			<NavHeader  isAddUser={false} navigateToAddData={handleNavigateToAddData} />
			<Cards />

			<DataCollection />
		</Layout>
	)
}
