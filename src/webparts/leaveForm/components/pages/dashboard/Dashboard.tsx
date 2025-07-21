import * as React from 'react';
import './dashboard.css'

const Dashboard = () => {
    return (
        <>
            <div className="parent">
                <div className="div1 box-1">Total Leaves This Year <span>15</span></div>
                <div className="div2 box-2">Pending Requests <span>2</span></div>
                <div className="div3 box-3">Approved Leaves <span>4</span></div>
                <div className="div4 box-4">Rejected Leaves <span>3</span></div>
                <div className="div5 box-5">Upcoming Approved Leaves</div>
                <div className="div6 box-6">Quick Actions.</div>
            </div>
        </>
    )
}

export default Dashboard;