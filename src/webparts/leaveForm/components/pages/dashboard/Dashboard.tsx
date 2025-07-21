import * as React from 'react';
import './dashboard.css'
import { Icon } from '@fluentui/react';
import DashboardTable from '../DashboardTable/DashboardTable';

const Dashboard = () => {
    return (
        <>
            <div className="parent">
                <div className="div1 box">
                    <div className="content">
                        <div className="title">Total Leaves This Year</div>
                        <div className="details">
                            <span className="num">15</span>
                            <span className="desc">days remaining</span>
                        </div>
                    </div>
                    <div className="icon">
                        <Icon iconName="Calendar" styles={{ root: { color: 'blue' } }} />
                    </div>
                </div>
                <div className="div2 box"><div className="content">
                    <div className="title">Pending Requests</div>
                    <div className="details">
                        <span className="num">3</span>
                        <span className="desc">awaiting approval</span>
                    </div>
                </div>
                    <div className="icon">
                        <Icon iconName="Snooze" styles={{ root: { color: 'brown' } }} />
                    </div>
                </div>
                <div className="div3 box"><div className="content">
                    <div className="title">Approved Leaves</div>
                    <div className="details">
                        <span className="num">4</span>
                        <span className="desc">days taken</span>
                    </div>
                </div>
                    <div className="icon">
                        <Icon iconName="ReceiptCheck" styles={{ root: { color: 'green' } }} />
                    </div>
                </div>
                <div className="div4 box"><div className="content">
                    <div className="title">Rejected Leaves</div>
                    <div className="details">
                        <span className="num">2</span>
                        <span className="desc">this quarter</span>
                    </div>
                </div>
                    <div className="icon">
                        <Icon iconName="ReceiptUndelivered" styles={{ root: { color: 'red' } }} />
                    </div>
                </div>
            </div>
            
            <DashboardTable />
        </>
    )
}

export default Dashboard;