import * as React from 'react';
import './History.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useState } from 'react';

interface Item {
    name: string;
    status: 'Approved' | 'Pending' | 'Rejected';
    id?: number;
    Title?: string;
    date?: string;
    reason?: string;
    days: string;
}

const LeaveHistory = () => {
    const { items, loading, error } = useSelector(
        (state: RootState) => state.leave
    );
    const [filterType, setFilterType] = useState('');
    const [statusSearch, setStatusSearch] = useState('');

    const transformedItems: Item[] = items.map((spItem: any, index: number) => {
        // Calculate number of days between StartDate and EndDate
        const start = new Date(spItem.StartDate);
        const end = new Date(spItem.EndDate);
        const diffDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1;

        return {
            key: spItem.Id || index,
            name: spItem.Title || "N/A",
            status: (spItem.Status as "Approved" | "Pending" | "Rejected") || "Pending", // default Pending if null
            date: new Date(spItem.StartDate).toLocaleDateString(),
            days: `${diffDays} Days`,
            reason: spItem.Reason || "—"
        };
    });

    // Function to handle filtering
    const filteredItems = transformedItems.filter((leave) => {
        // Filter by leave type (dropdown)
        const typeMatch = filterType === '' || leave.name.toLowerCase().includes(filterType.toLowerCase());

        // Filter by status (input, case-insensitive match)
        const statusMatch =
            statusSearch === '' ||
            leave.status.toLowerCase().includes(statusSearch.toLowerCase());

        return typeMatch && statusMatch;
    });


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
    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;
    return (
        <div className='parent-LeaveHistory'>
            <div className='header'>
                <div className='title'>
                    <h4>Leave History Details</h4>
                </div>
                <div className='history-btn'>
                    <select
                        className="filter-dropdown"
                        defaultValue=""
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        <option value="sick">Sick Leave</option>
                        <option value="casual">Casual Leave</option>
                        <option value="earned">Earned Leave</option>
                    </select>
                    <input
                        type="search"
                        placeholder='Search by status'
                        value={statusSearch}
                        onChange={(e) => setStatusSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className='History-cards'>
                {filteredItems.map((leave) => (
                    <div key={leave.id} className='card-details'>
                        <div className='card-content'>
                            <div className='card-item'>
                                <span className='card-label'>Leave Type</span>
                                <span className='card-value'>{leave.name}</span>
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