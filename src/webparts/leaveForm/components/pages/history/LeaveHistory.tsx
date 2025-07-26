import * as React from 'react';
import './History.css'

const LeaveHistory = () => {
    // Sample data - replace this with your SharePoint list data
    const leaveHistoryData = [
        {
            id: 1,
            leaveType: 'Annual Leave',
            status: 'Approved',
            days: 5,
        },
        {
            id: 2,
            leaveType: 'Sick Leave',
            status: 'Pending',
            days: 2,

        },
        {
            id: 3,
            leaveType: 'Personal Leave',
            status: 'Rejected',
            days: 3,
        }
    ];

    // Function to get status class dynamically
    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'approved':
                return 'status-approved';
            case 'pending':
                return 'status-pending';
            case 'rejected':
                return 'status-rejected';
            default:
                return 'status-pending'; // fallback
        }
    };
    return (
        <div className='parent-LeaveHistory'>
            <div className='header'>
                <div className='title'>
                    <h4>Leave History Details</h4>
                </div>
                <div className='history-btn'>
                    <select className="filter-dropdown" defaultValue="">
                        <option value="">All Types</option>
                        <option value="Annual Leave">Annual Leave</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Personal Leave">Personal Leave</option>
                    </select>
                    <input type="search" placeholder='Search by status' />
                </div>
            </div>
            <div className='History-cards'>
                {leaveHistoryData.map((leave) => (
                    <div key={leave.id} className='card-details'>
                        <div className='card-content'>
                            <div className='card-item'>
                                <span className='card-label'>Leave Type</span>
                                <span className='card-value'>{leave.leaveType}</span>
                            </div>
                            <div className='card-item status'>
                                <span className='card-label'>Status</span>
                                <span className={`status-badge ${getStatusClass(leave.status)}`}>
                                    {leave.status}
                                </span>
                            </div>
                            <div className='card-item days'>
                                <span className='card-label'>Days</span>
                                <span className='card-value'>{leave.days}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default LeaveHistory;