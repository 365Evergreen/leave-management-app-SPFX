import * as React from 'react';
import './History.css'
// import LeaveHistory from './LeaveHistory'

const History = () => {
    return (
        <>
            <div className="parent-div">
                <div className="box1">
                    <span className="num">3</span>
                    <span>Approved</span>
                </div>
                <div className="box2">
                    <span className="num">1</span>
                    <span>Pending</span>
                </div>
                <div className="box3">
                    <span className="num">2</span>
                    <span>Reject</span>
                </div>
                <div className="box4">
                    <span className="num">5</span>
                    <span>Total Requests</span>
                </div>
            </div>

        </>
    )
}

export default History;