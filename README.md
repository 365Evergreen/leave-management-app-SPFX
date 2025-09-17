# Leave Management System

A comprehensive leave management solution built with SharePoint Framework (SPFx), featuring automated approval workflows and modern React-based UI components.

## 🚀 Overview

This Leave Management System streamlines the entire leave request and approval process within SharePoint environments. Built as a custom SPFx web part, it provides an intuitive interface for employees to submit leave requests and managers to review and approve them efficiently.

## ✨ Key Features

- **Modern React Interface**: Built with React and Redux for state management
- **Fluent UI Design**: Consistent Microsoft design language for seamless SharePoint integration
- **Automated Approval Workflow**: Multi-level approval process using Power Automate
- **Real-time Dashboard**: View pending, approved, and rejected leave requests
- **Advanced Filtering**: Filter leave history by type and status
- **Email Notifications**: Automated notifications for approvers and requestors
- **Mobile Responsive**: Optimized for all devices

## 🛠️ Technology Stack

- **Framework**: SharePoint Framework (SPFx)
- **Frontend**: React with TypeScript
- **State Management**: Redux
- **UI Components**: Fluent UI (Office UI Fabric React)
- **Backend**: SharePoint Lists
- **Workflow Engine**: Power Automate
- **Version Control**: Git/GitHub

## 📋 System Architecture

### Components
1. **Leave Request Web Part**: Custom SPFx web part with three main pages
   - Home Dashboard
   - Request Form
   - History/Filtering Page

2. **SharePoint Lists**: Data storage with automated status management
3. **Power Automate Flow**: Multi-level approval workflow with email notifications

### Workflow Process
1. **Request Submission**: User submits leave request via the web part
2. **Data Storage**: Request stored in SharePoint List with "Pending" status
3. **Workflow Trigger**: Power Automate flow automatically triggered
4. **First Level Approval**: Email sent to first-level approver
5. **Escalation**: Upon approval, request moves to next approver level
6. **Rejection Handling**: Rejected requests send notifications back to initiator
7. **Status Updates**: Real-time status updates reflected in the dashboard

## 🎯 Features Breakdown

### Home Dashboard
- **Leave Statistics**: Visual overview of total pending, approved, and rejected leaves
- **Quick Actions**: Easy access to submit new requests
- **Recent Activity**: Latest leave request updates

### Request Form
- **User-friendly Interface**: Intuitive form design with validation
- **Leave Type Selection**: Multiple leave categories support
- **Date Range Picker**: Easy date selection with conflict checking
- **Comment Section**: Additional notes and justification

### History & Filtering
- **Comprehensive History**: Complete record of all leave requests
- **Advanced Filters**: Filter by leave type, status, date range
- **Search Functionality**: Quick search through requests

## 📸 Screenshots

### Home Dashboard
Home Dashboard ![home](https://github.com/user-attachments/assets/1aed18bc-cca6-48aa-83a3-f298862035a5)

*Overview of leave statistics and recent activities*

### Leave Request Form
Request Form ![reaquest](https://github.com/user-attachments/assets/71b124d2-7bf3-4afe-a0c7-a4ee7fc02b93)![request](https://github.com/user-attachments/assets/d06edb7c-a505-47af-8637-f31f5f996adf)

*User-friendly leave request submission form*

### History Page
History Page ![history](https://github.com/user-attachments/assets/c1a0d44c-6f5a-45fa-86a3-e0d760d54bbc)

*Advanced filtering and search capabilities*

### SharePoint List
![SharePoint List ![leaveList](https://github.com/user-attachments/assets/05c5f30f-66a2-4dba-a591-bd354706e0af)

*Backend data storage and management*

### Power Automate Flow
Power Automate Success ![PA](https://github.com/user-attachments/assets/81838221-1e11-49fe-9b7d-5220c240598c)

*Automated approval workflow execution*

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/[your-username]/leave-management-system.git
   cd leave-management-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure SharePoint Connection**
   ```bash
   gulp serve --nobrowser
   ```

4. **Deploy to SharePoint**
   ```bash
   gulp bundle --ship
   gulp package-solution --ship
   ```

### SharePoint List Setup
Create a SharePoint list with the following columns:
- **Employee Name** (Person/Group)
- **Leave Type** (Choice)
- **Start Date** (Date)
- **End Date** (Date)
- **Reason** (Multiple lines of text)
- **Status** (Choice: Pending, Approved, Rejected)
- **Approver Level** (Number)
- **Comments** (Multiple lines of text)

### Power Automate Configuration
1. Import the provided Power Automate template
2. Configure connection to your SharePoint list
3. Set up approver email addresses
4. Test the workflow with sample data

## 📱 Usage

1. **Navigate to SharePoint site** where the web part is deployed
2. **Add the Leave Management web part** to your page
3. **Submit leave requests** using the Request Form
4. **Monitor status** via the Home dashboard
5. **Review history** and filter past requests

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**MURALI.R**
- SharePoint Support Specialist
- LinkedIn: https://www.linkedin.com/in/muraliram728/
- Email: muraliraman728@gmail.com


## 📚 Learn More

- [SharePoint Framework Documentation](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Fluent UI React Components](https://developer.microsoft.com/en-us/fluentui#/controls/web)
- [Power Automate Documentation](https://docs.microsoft.com/en-us/power-automate/)

---

⭐ **Star this repository** if you find it helpful for your SharePoint development journey!
