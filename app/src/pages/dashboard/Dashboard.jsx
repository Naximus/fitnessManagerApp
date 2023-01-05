import React from "react";
import UserInfo from "../../components/user/user-info/UserInfo";

const Dashboard = ({user}) => {
    return(
        <main className="dashboard">
            <h1>Dashboard</h1>
            <UserInfo user={user} />

        </main>
    )
}

export default Dashboard;