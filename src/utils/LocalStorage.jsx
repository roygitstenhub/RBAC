const emp = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "password123",
        "firstName": "Aarav",
        "tasks": [
            {
                "taskNumber": 1,
                "taskTitle": "Complete Report",
                "taskDescription": "Complete the monthly sales report.",
                "taskDate": "2024-11-25",
                "category": "Reporting",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            },
            {
                "taskNumber": 2,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the team meeting to discuss project progress.",
                "taskDate": "2024-11-26",
                "category": "Meeting",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            },
            {
                "taskNumber": 3,
                "taskTitle": "Update Documentation",
                "taskDescription": "Update the technical documentation for the product.",
                "taskDate": "2024-11-28",
                "category": "Documentation",
                "active": false,
                "failed": true,
                "newTask": false,
                "completed": true
            }
        ],
        "taskCount": {
            "active": 2,
            "failed": 1,
            "newTask": 2,
            "completed": 1
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "password456",
        "firstName": "Ishaan",
        "tasks": [
            {
                "taskNumber": 1,
                "taskTitle": "Client Presentation",
                "taskDescription": "Prepare and present the client pitch.",
                "taskDate": "2024-11-25",
                "category": "Presentation",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            },
            {
                "taskNumber": 2,
                "taskTitle": "Market Research",
                "taskDescription": "Conduct market research for the new product launch.",
                "taskDate": "2024-11-27",
                "category": "Research",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            },
            {
                "taskNumber": 3,
                "taskTitle": "Product Testing",
                "taskDescription": "Test the new product features.",
                "taskDate": "2024-11-30",
                "category": "Testing",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            }
        ],
        "taskCount": {
            "active": 3,
            "failed": 0,
            "newTask": 3,
            "completed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "password789",
        "firstName": "Ravi",
        "tasks": [
            {
                "taskNumber": 1,
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest code submitted by team members.",
                "taskDate": "2024-11-24",
                "category": "Development",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            },
            {
                "taskNumber": 2,
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix bugs reported in the latest build.",
                "taskDate": "2024-11-26",
                "category": "Development",
                "active": false,
                "failed": true,
                "newTask": false,
                "completed": true
            },
            {
                "taskNumber": 3,
                "taskTitle": "Feature Implementation",
                "taskDescription": "Implement new feature based on client feedback.",
                "taskDate": "2024-11-28",
                "category": "Development",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            }
        ],
        "taskCount": {
            "active": 2,
            "failed": 1,
            "newTask": 2,
            "completed": 1
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "password101",
        "firstName": "Priya",
        "tasks": [
            {
                "taskNumber": 1,
                "taskTitle": "Task Delegation",
                "taskDescription": "Delegate tasks to team members for the new project.",
                "taskDate": "2024-11-24",
                "category": "Management",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            },
            {
                "taskNumber": 2,
                "taskTitle": "Budget Review",
                "taskDescription": "Review the project budget and expenses.",
                "taskDate": "2024-11-25",
                "category": "Management",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            }
        ],
        "taskCount": {
            "active": 2,
            "failed": 0,
            "newTask": 2,
            "completed": 0
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "password102",
        "firstName": "Saanvi",
        "tasks": [
            {
                "taskNumber": 1,
                "taskTitle": "Design Mockups",
                "taskDescription": "Create design mockups for the new app features.",
                "taskDate": "2024-11-24",
                "category": "Design",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            },
            {
                "taskNumber": 2,
                "taskTitle": "Feedback Collection",
                "taskDescription": "Collect user feedback on the latest version of the app.",
                "taskDate": "2024-11-26",
                "category": "Research",
                "active": true,
                "failed": false,
                "newTask": true,
                "completed": false
            }
        ],
        "taskCount": {
            "active": 2,
            "failed": 0,
            "newTask": 2,
            "completed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "adminPassword",
        "firstName": "Aditi",
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('emp', JSON.stringify(emp))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const empData = JSON.parse(localStorage.getItem('emp'))
    const adminData = JSON.parse(localStorage.getItem('admin'))
    return {empData,adminData}
}