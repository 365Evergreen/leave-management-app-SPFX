import * as React from 'react';
import {
    TextField,
    Dropdown,
    DatePicker,
    PrimaryButton,
    DefaultButton,
    Stack,
    Label,
    Icon
} from '@fluentui/react';
import { useState } from 'react';
import './Request.css'

const leaveTypeOptions = [
    { key: 'sick', text: 'Sick Leave' },
    { key: 'casual', text: 'Casual Leave' },
    { key: 'earned', text: 'Earned Leave' },
];

const Request = () => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e: any) => {
        setFileName(e.target.files[0]?.name || '');
    };
    return (
        <Stack tokens={{ childrenGap: 20, padding: 20 }} styles={{ root: { width: 600 } }}>
            {/* Leave Type */}
            <Dropdown
                label="Leave Type *"
                placeholder="Select leave type"
                options={leaveTypeOptions}
            />

            {/* Start & End Date */}
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <DatePicker
                    label="Start Date *"
                    placeholder="Pick a date"
                    styles={{ root: { flex: 1 } }}
                />
                <DatePicker
                    label="End Date *"
                    placeholder="Pick a date"
                    styles={{ root: { flex: 1 } }}
                />
            </Stack>

            {/* Reason */}
            <TextField
                label="Reason *"
                multiline
                rows={3}
                placeholder="Please provide a brief reason for your leave..."
            />

            {/* File Upload Section */}
            <Stack tokens={{ childrenGap: 8 }}>
                <Label>Supporting Documentation (Optional)</Label>
                <label htmlFor="fileUpload" style={{ width: '100%' }}>
                    <Stack
                        styles={{
                            root: {
                                border: '2px dashed #ccc',
                                padding: 20,
                                textAlign: 'center',
                                background: '#fafafa',
                                borderRadius: 6,
                                cursor: 'pointer'
                            },
                        }}
                    >
                        <Icon iconName="Upload" styles={{ root: { fontSize: 32, color: '#0078D4', marginBottom: 10 } }} />
                        <Label>Click to upload or drag and drop</Label>
                        <span style={{ fontSize: 12, color: '#666' }}>
                            PDF, DOC, JPG, PNG files up to 5MB
                        </span>
                    </Stack>
                    <input
                        id="fileUpload"
                        type="file"
                        accept=".pdf,.doc,.jpg,.png"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    {fileName && <span style={{ fontSize: 12, color: '#333' }}>{fileName}</span>}
                </label>
            </Stack>



            {/* Buttons */}
            <Stack horizontal tokens={{ childrenGap: 10 }}>
                <PrimaryButton text="Submit Request" className='submit-button' />
                <DefaultButton text="Cancel" />
            </Stack>
        </Stack>
    )
}

export default Request;