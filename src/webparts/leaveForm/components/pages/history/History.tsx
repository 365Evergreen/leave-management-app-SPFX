import * as React from 'react';
import './History.css'
import LeaveHistory from './LeaveHistory'
import {
    CheckmarkCircle20Filled,
    Clock20Filled,
    DismissCircle20Filled,
    PeopleTeam20Filled
} from '@fluentui/react-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const History = () => {
    const { items, loading, error } = useSelector(
        (state: RootState) => state.leave
    );

    // ✅ Calculate summary
    const totalLeaves = items.length;

    const pendingCount = items.filter(i => i.Status === "Pending").length;
    const approvedCount = items.filter(i => i.Status === "Approved").length;
    const rejectedCount = items.filter(i => i.Status === "Rejected").length;

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;
    return (
        <>
            <div className="parent-div">
                <div className="box1">
                    <div className="box-content">
                        <div>
                            <span className="num">{approvedCount}</span>
                            <span>Approved</span>
                        </div>
                        <CheckmarkCircle20Filled className="box-icon approved" />
                    </div>
                </div>
                <div className="box2">
                    <div className="box-content">
                        <div>
                            <span className="num">{pendingCount}</span>
                            <span>Pending</span>
                        </div>
                        <Clock20Filled className="box-icon pending" />
                    </div>
                </div>
                <div className="box3">
                    <div className="box-content">
                        <div>
                            <span className="num">{rejectedCount}</span>
                            <span>Rejected</span>
                        </div>
                        <DismissCircle20Filled className="box-icon rejected" />
                    </div>
                </div>
                <div className="box4">
                    <div className="box-content">
                        <div>
                            <span className="num">{totalLeaves}</span>
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