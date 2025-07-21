import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn, PrimaryButton, Icon } from '@fluentui/react';

const statusColors: Record<'Approved' | 'Pending' | 'Rejected', string>= {
    Approved: 'rgba(0, 128, 0, 0.1)',
    Pending: 'rgba(255, 215, 0, 0.1)',
    Rejected: 'rgba(255, 0, 0, 0.1)'
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
    // Sample data
    const items = [
        { key: 1, name: 'Annual Leave', status: 'Approved', date: '2024-07-01', days:"3 Days" },
        { key: 2, name: 'Sick Leave', status: 'Pending', date: '2024-07-05', days:"2 Days"},
        { key: 3, name: 'Casual Leave', status: 'Rejected', date: '2024-07-10', days:"5 Days" },
        // Add more items here
    ];

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
                    <Icon iconName="Calendar" styles={{ root: { fontSize: 20, color: '#0078D7' } }} />
                    <span style={{ marginLeft: 8 }}>Upcoming Leave Schedule</span>
                </div>
                <PrimaryButton
                    iconProps={{ iconName: 'Add' }}
                    styles={{
                        root: {
                            borderRadius: "8px",
                        }
                    }}
                    text="Add Leave"
                    onClick={() => alert('Add Leave clicked')}
                />
            </div>

            <DetailsList
                items={items}
                columns={columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selectionMode={SelectionMode.none}
                isHeaderVisible={true}
            />
        </div>
    );
}

export default DashboardTable;