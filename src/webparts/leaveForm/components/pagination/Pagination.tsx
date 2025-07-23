import * as React from 'react';
import { Stack, IconButton } from '@fluentui/react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange
}) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Stack horizontal tokens={{ childrenGap: 8 }} horizontalAlign="center" style={{ marginTop: 20 }}>
            {/* Prev Button */}
            <IconButton
                iconProps={{ iconName: 'ChevronLeft' }}
                title="Previous"
                ariaLabel="Previous"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                styles={{
                    root: {
                        borderRadius: 20,
                        color: '#605e5c'
                    },
                    rootDisabled: {
                        opacity: 0.5
                    }
                }}
            />

            {/* Page Numbers */}
            {pages.map((page) => (
                <IconButton
                    key={page}
                    title={`Page ${page}`}
                    ariaLabel={`Page ${page}`}
                    onClick={() => onPageChange(page)}
                    styles={{
                        root: {
                            borderRadius: '5px',
                            width: 28,
                            height: 28,
                            backgroundColor: page === currentPage ? 'var(--theme-color)' : 'transparent',
                            color: page === currentPage ? '#ffffff' : '#323130',
                            border: page === currentPage ? '1px solid var(--theme-color)' : '1px solid #ddd',
                            fontWeight: page === currentPage ? 600 : 400,
                            fontSize: 12,
                        },
                        rootHovered: {
                            backgroundColor: page === currentPage ? 'var(--theme-color)' : '#f3f2f1'
                        }
                    }}
                >
                    {page}
                </IconButton>
            ))}

            {/* Next Button */}
            <IconButton
                iconProps={{ iconName: 'ChevronRight' }}
                title="Next"
                ariaLabel="Next"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                styles={{
                    root: {
                        borderRadius: 20,
                        color: '#605e5c'
                    },
                    rootDisabled: {
                        opacity: 0.5
                    }
                }}
            />
        </Stack>
    );
};

export default Pagination;
