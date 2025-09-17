📋 Leave Management System (SPFx Web Part)
A modern, integrated solution for leave requests, approvals, and tracking built with SharePoint Framework, React, Redux, and Power Automate.

🚀 Project Overview
As a SharePoint Support Specialist, I developed this SPFx web part to streamline leave management processes in organizations. This solution replaces manual email/spreadsheet tracking with an automated, user-friendly system integrated directly into SharePoint.

Key Workflow:

Users submit leave requests via a React-based form.
Data is stored in a SharePoint list with a "Pending" status.
Power Automate triggers approval workflows:
First-level approver notified via email.
If approved, escalates to next approver.
If rejected, initiator receives notification.
Dashboard displays real-time leave stats (pending/approved/rejected).
History page allows filtering by leave type/status.
🎯 Core Features
Feature	Description
Leave Request Form	Intuitive Fluent UI form for submitting leave details (type, dates, reason).
Real-Time Dashboard	Homepage shows pending/approved/rejected leave counts & recent requests.
Approval Workflow	Multi-stage approvals via Power Automate with email notifications.
History & Filtering	Track all leave requests with filters for type/status (e.g., "Sick Leave" + "Approved").
SharePoint Integration	Data stored in a SharePoint list for auditability and reporting.
Responsive Design	Works seamlessly across desktop/mobile SharePoint experiences.
🛠️ Technologies Used
Category	Tools & Frameworks
Frontend	React, Redux (State Management), Fluent UI (UI Components)
SharePoint	SPFx v1.16+, SharePoint Lists, Power Automate (Workflow Automation)
Backend	SharePoint REST API, Power Automate Cloud Flows
DevOps	GitHub (Code Hosting), Azure DevOps (Optional CI/CD)
Styling	Fluent UI Theming, CSS Modules
📸 Screenshots
Visual walkthrough of the solution:

Section	Screenshot
Home Dashboard	Home PagePending/Approved/Rejected leave stats
Leave Request Form	Request FormFluent UI form with validation
History Page	HistoryFilterable leave history table
SharePoint List	SP ListData stored in SharePoint
Power Automate Flow	Power AutomateApproval workflow execution
(Add your screenshots in an /assets folder and reference them here)

⚙️ Setup & Installation
Prerequisites:

Node.js v16+
SharePoint Framework (SPFx) v1.16+
Power Automate License
SharePoint Admin/Owner Permissions
Steps to Deploy:

Clone Repository:

Bash

git clone https://github.com/your-username/leave-management-spfx.git
cd leave-management-spfx
Install Dependencies:

Bash

npm install
Build & Bundle:

Bash

gulp build
gulp bundle --ship
gulp package-solution --ship
Deploy to SharePoint App Catalog:

Upload the generated .sppkg file to your SharePoint App Catalog.
Trust the solution when prompted.
Configure Power Automate Flow:

Create a new Cloud Flow in Power Automate.
Trigger: "When an item is created or modified" in your SharePoint list.
Actions:
Send approval email to first-level approver.
Conditional logic for approval/rejection.
Update item status in SharePoint list.
Send notifications to initiator/approvers.
Test flow with sample data.
Add Web Part to SharePoint Page:

Edit a modern SharePoint page.
Add the "Leave Management" web part.
Configure properties (e.g., target SharePoint list).
🔮 Future Enhancements
Reporting & Analytics: Add Power BI integration for leave trends.
Mobile Push Notifications: Use Microsoft Graph API for real-time alerts.
Multi-Language Support: Internationalize UI for global teams.
Calendar Integration: Sync approved leaves with Outlook/Teams calendars.
Advanced Approval Rules: Dynamic approvers based on department/leave type.
🤝 Contribution & Support
Report Issues: Use GitHub Issues for bugs/feature requests.
Pull Requests: Welcome contributions! Follow code standards & add tests.
Contact: [LinkedIn Profile] | [Email]
