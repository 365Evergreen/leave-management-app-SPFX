import * as React from 'react';
import './History.css'
import LeaveHistory from './LeaveHistory'
import {
    CheckmarkCircle20Filled,
    Clock20Filled,
    DismissCircle20Filled,
    PeopleTeam20Filled
} from '@fluentui/react-icons';

const History = () => {
    return (
        <>
            <div className="parent-div">
                <div className="box1">
                    <div className="box-content">
                        <div>
                            <span className="num">3</span>
                            <span>Approved</span>
                        </div>
                        <CheckmarkCircle20Filled className="box-icon approved" />
                    </div>
                </div>
                <div className="box2">
                    <div className="box-content">
                        <div>
                            <span className="num">1</span>
                            <span>Pending</span>
                        </div>
                        <Clock20Filled className="box-icon pending" />
                    </div>
                </div>
                <div className="box3">
                    <div className="box-content">
                        <div>
                            <span className="num">2</span>
                            <span>Rejected</span>
                        </div>
                        <DismissCircle20Filled className="box-icon rejected" />
                    </div>
                </div>
                <div className="box4">
                    <div className="box-content">
                        <div>
                            <span className="num">5</span>
                            <span>Total Requests</span>
                        </div>
                        <PeopleTeam20Filled className="box-icon total" />
                    </div>
                </div>
            </div>

            <LeaveHistory />
        </>
    )
}

export default History;