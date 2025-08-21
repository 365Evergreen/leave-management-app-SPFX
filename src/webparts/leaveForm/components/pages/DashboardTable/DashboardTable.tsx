import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn, PrimaryButton, Icon } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import CustomPagination from '../../pagination/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

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
    reason: string;
}


const DashboardTable = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = React.useState(1);

    const { items, loading, error } = useSelector(
        (state: RootState) => state.leave
    );

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

    const pagedItems = transformedItems.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    const columns: IColumn[] = [
        {
            key: 'column1',
            name: 'Date',
            fieldName: 'date',
            minWidth: 200,
            maxWidth: 200,
            isResizable: false
        },
        {
            key: 'column2',
            name: 'Type',
            fieldName: 'name',
            minWidth: 200,
            maxWidth: 200,
            isResizable: false
        },
        {
            key: 'column3',
            name: 'Days',
            fieldName: 'days',
            minWidth: 200,
            maxWidth: 200,
            isResizable: false
        },
        {
            key: 'column4',
            name: 'Reason',
            fieldName: 'reason',
            minWidth: 200,
            maxWidth: 200,
            isResizable: false
        },
        {
            key: 'column5',
            name: 'Status',
            fieldName: 'status',
            minWidth: 200,
            maxWidth: 200,
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: "red" }}>{error}</div>;
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