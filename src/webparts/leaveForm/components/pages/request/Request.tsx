import * as React from 'react';
import {
    TextField,
    Dropdown,
    DatePicker,
    PrimaryButton,
    DefaultButton,
    Stack,
    Label,
    Icon,
    MessageBar,
    MessageBarType
} from '@fluentui/react';
import { useState } from 'react';
import './Request.css'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { submitLeave } from '../../../redux/leaveSlice';
import { useNavigate } from 'react-router-dom';
import { SPFI } from "@pnp/sp";


interface RequestProps {
    sp: SPFI; // ✅ receive SPFI from props
}

const leaveTypeOptions = [
    { key: 'sick', text: 'Sick Leave' },
    { key: 'casual', text: 'Casual Leave' },
    { key: 'earned', text: 'Earned Leave' },
];

export interface LeaveFormData {
    leaveType?: string;
    startDate?: Date;
    endDate?: Date;
    reason: string;
    attachments: File[];
}

const Request = ({ sp }: RequestProps) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const { loading, success, error } = useSelector((state: RootState) => state.leave)
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState<LeaveFormData>({
        leaveType: undefined,
        startDate: undefined as Date | undefined,
        endDate: undefined as Date | undefined,
        reason: "",
        attachments: [] as File[]
    })

    const handlechange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    // Handle File Selection
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            // Convert FileList to Array
            const files = Array.from(e.target.files);

            // Validate file size (<= 5MB)
            const validFiles = files.filter(file => file.size <= 5 * 1024 * 1024);

            if (validFiles.length < files.length) {
                alert('Some files were too large (max 5MB). They were not added.');
            }

            handlechange('attachments', validFiles);
        }
    };

    const handleSubmit = async () => {
        setFormSubmitted(true);
        // Basic validation
        if (!formData.leaveType || !formData.startDate || !formData.endDate || !formData.reason) {
            return;
        }
        if (formData.attachments.some(file => file.size > 5 * 1024 * 1024)) {
            alert('One or more files exceed the 5MB limit');
            setFormSubmitted(false);
            return;
        }
        try {
            // Just pass formData - sp is now available through Redux middleware
            await dispatch(submitLeave(formData)).unwrap();
            console.log("Form Datas", formData);
            setFormData({
                leaveType: undefined,
                startDate: undefined,
                endDate: undefined,
                reason: "",
                attachments: [] as File[]
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setFormSubmitted(false);
        }
    }
    return (
        <Stack tokens={{ childrenGap: 20, padding: 20 }} styles={{ root: { width: 600 } }}>
            {/* Leave Type */}
            <Dropdown
                label="Leave Type"
                placeholder="Select leave type"
                options={leaveTypeOptions}
                selectedKey={formData.leaveType}
                onChange={(e, options) => handlechange('leaveType', options?.key)}
                errorMessage={formSubmitted && !formData.leaveType ? "Leave Type is required" : undefined}
            />

            {/* Start & End Date */}
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <Stack styles={{ root: { flex: 1 } }}>
                    <DatePicker
                        label="Start Date"
                        placeholder="Pick a date"
                        value={formData.startDate}
                        onSelectDate={(date) => handlechange('startDate', date)}
                        ariaLabel="Select a start date"
                        formatDate={(date) => (date ? date.toLocaleDateString() : '')}
                    />
                    {formSubmitted && !formData.startDate && (
                        <span style={{ color: 'red', fontSize: 12 }}>Start Date is required</span>
                    )}
                </Stack>
                <Stack styles={{ root: { flex: 1 } }}>
                    <DatePicker
                        label="End Date"
                        placeholder="Pick a date"
                        value={formData.endDate}
                        onSelectDate={(date) => handlechange('endDate', date)}
                        ariaLabel="Select an end date"
                        formatDate={(date) => (date ? date.toLocaleDateString() : '')}
                    />
                    {formSubmitted && !formData.endDate && (
                        <span style={{ color: 'red', fontSize: 12 }}>End Date is required</span>
                    )}
                </Stack>
            </Stack>

            {/* Reason */}
            <TextField
                label="Reason"
                multiline
                rows={3}
                placeholder="Please provide a brief reason for your leave..."
                value={formData.reason}
                onChange={(e, newValue) => handlechange('reason', newValue)}
                errorMessage={formSubmitted && !formData.reason ? "Reason is required" : undefined}
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
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <Icon
                            iconName="Upload"
                            styles={{ root: { fontSize: 32, color: '#0078D4', marginBottom: 10 } }}
                        />
                        <Label>Click to upload or drag and drop</Label>
                        <span style={{ fontSize: 12, color: '#666' }}>
                            PDF, DOC, JPG, PNG files up to 5MB
                        </span>
                    </Stack>
                    <input
                        id="fileUpload"
                        type="file"
                        accept=".pdf,.doc,.jpg,.png"
                        multiple
                        style={{ display: 'none' }}
                        onChange={handleFileSelect}
                    />
                </label>

                {/* Show selected file names */}
                {formData.attachments.length > 0 && (
                    <Stack tokens={{ childrenGap: 4 }}>
                        {formData.attachments.map((file, idx) => (
                            <span key={idx} >
                                📎 {file.name} ({(file.size / 1024).toFixed(1)} KB)
                            </span>
                        ))}
                    </Stack>
                )}
            </Stack>



            {/* Buttons */}
            <Stack horizontal tokens={{ childrenGap: 10 }}>
                <PrimaryButton
                    text={loading ? "Submitting..." : "Submit Request"}
                    onClick={handleSubmit}
                    disabled={loading}
                />
                <DefaultButton text="Cancel" onClick={() => navigate('/')} />
            </Stack>

            {/* Show success or error message */}
            {success && (
                <MessageBar messageBarType={MessageBarType.success} isMultiline={false}>
                    Leave request submitted successfully!
                </MessageBar>
            )}
            {error && (
                <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>
                    {error}
                </MessageBar>
            )}
        </Stack>
    )
}

export default Request;