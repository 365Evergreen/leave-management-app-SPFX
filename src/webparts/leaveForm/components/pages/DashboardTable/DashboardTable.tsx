import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn, PrimaryButton, Icon } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import CustomPagination from '../../pagination/Pagination';

const PAGE_SIZE = 5;

const statusColors: Record<'Approved' | 'Pending' | 'Rejected', string> = {
    Approved: 'var(--status-approved)',
    Pending: 'var(--status-pending)',
    Rejected: 'var(--status-rejected)'
};

const textColors: Record<'Approved' | 'Pending' | 'Rejected', string> = {
    Approved: 'green',
    Pending: 'brown',
    Rejected: 'red',
};

interface Item {
    key: number;
    name: string;
    status: 'Approved' | 'Pending' | 'Rejected';
    date: string;
}


const DashboardTable = () => {
    const navigate = useNavigate();

    // Sample data
    const items = [
        { key: 1, name: 'Annual Leave', status: 'Approved', date: '2024-07-01', days: "3 Days" },
        { key: 2, name: 'Sick Leave', status: 'Pending', date: '2024-07-05', days: "2 Days" },
        { key: 3, name: 'Casual Leave', status: 'Rejected', date: '2024-07-10', days: "5 Days" },
        { key: 4, name: 'Casual Leave', status: 'Pending', date: '2024-07-10', days: "5 Days" },
        { key: 5, name: 'Casual Leave', status: 'Approved', date: '2024-07-10', days: "5 Days" },
        { key: 6, name: 'Casual Leave', status: 'Pending', date: '2024-07-10', days: "5 Days" },
        { key: 7, name: 'Casual Leave', status: 'Approved', date: '2024-07-10', days: "5 Days" },
    ];

    const [currentPage, setCurrentPage] = React.useState(1);

    const pagedItems = items.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    const columns: IColumn[] = [
        {
            key: 'column1',
            name: 'Date',
            fieldName: 'date',
            minWidth: 250,
            maxWidth: 250,
            isResizable: false
        },
        {
            key: 'column2',
            name: 'Type',
            fieldName: 'name',
            minWidth: 250,
            maxWidth: 250,
            isResizable: false
        },
        {
            key: 'column3',
            name: 'Days',
            fieldName: 'days',
            minWidth: 250,
            maxWidth: 250,
            isResizable: false
        },
        {
            key: 'column4',
            name: 'Status',
            fieldName: 'status',
            minWidth: 250,
            maxWidth: 250,
            isResizable: false,
            onRender: (item: Item) => {
                const bgColor = statusColors[item.status];
                const textColor = textColors[item.status];

                return (
                    <span
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '4px 10px',
                            borderRadius: 12,
                            fontWeight: 500,
                        }}
                    >
                        {item.status}
                    </span>
                );
            },
        },
    ];

    return (
        <div style={{ marginTop: 20 }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
            }}>
                <div>
                    <Icon iconName="Calendar" styles={{ root: { fontSize: 20, color: 'var(--theme-color)' } }} />
                    <span style={{ marginLeft: 8, fontWeight: 600, fontSize: '21px' }}>Upcoming Leave Schedule.</span>
                </div>
                <PrimaryButton
                    iconProps={{ iconName: 'Add' }}
                    styles={{
                        root: {
                            borderRadius: '8px',
                            backgroundColor: 'var(--theme-color)',
                            border: 'none',
                            color: 'white',
                        },
                        rootHovered: {
                            backgroundColor: 'var(--theme-color-hover)', 
                            color: 'white',
                        },
                        rootPressed: {
                            backgroundColor: 'var(--theme-color-active)',
                            color: 'white',
                        }
                    }}
                    text="Add Leave"
                    onClick={() => navigate('/request')}
                />
            </div>

            <DetailsList
                items={pagedItems}
                columns={columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selectionMode={SelectionMode.none}
                isHeaderVisible={true}
            />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: 16
                }}
            >
                <CustomPagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(items.length / PAGE_SIZE)}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

export default DashboardTable;