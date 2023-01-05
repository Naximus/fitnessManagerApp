import React from "react";

const Dashboard = ({user}) => {
    return(
        <main className="dashboard">
            <h1>Dashboard</h1>
            <div>user type: {user.type}</div>

        </main>
    )
}

export default Dashboard;