# UAF LMS - Test Accounts & Mock Data Reference

## 🔐 Test Login Credentials

### Student Accounts (All use password: `password123`)

1. **Ali Khan** (Primary Test Account)
   - Email: `ali.khan@uaf.edu.pk`
   - Reg ID: 2021-ag-1234
   - Has: 5 attendance records, 5 grade subjects, 3 fee vouchers

2. **Fatima Bibi**
   - Email: `fatima.bibi@uaf.edu.pk`
   - Reg ID: 2021-ag-5678
   - Has: 4 attendance records, 4 grade subjects, 2 fee vouchers

3. **Ahmed Hassan**
   - Email: `ahmed.hassan@uaf.edu.pk`
   - Reg ID: 2022-ag-2345
   - Has: 3 attendance records, 3 grade subjects, 3 fee vouchers (2 pending)

4. **Ayesha Malik**
   - Email: `ayesha.malik@uaf.edu.pk`
   - Reg ID: 2022-ag-3456
   - Has: 3 attendance records, 4 grade subjects, 2 fee vouchers

5. **Usman Ali**
   - Email: `usman.ali@uaf.edu.pk`
   - Reg ID: 2023-ag-4567
   - Has: No attendance/grades yet, 2 fee vouchers (both pending)

### Admin Account

6. **Admin User**
   - Email: `admin@uaf.edu.pk`
   - Password: `admin`
   - Reg ID: ADMIN-001
   - Reg ID: ADMIN-001
   - Access: Admin Dashboard at `/admin/dashboard`
   - Access: Admin Panel at `/admin/panel`

---

## 📚 Library Categories

The library now contains **20 items** across 7 categories:

### Computer Science (8 items)
- Introduction to Algorithms
- Clean Code
- Design Patterns
- The Pragmatic Programmer
- Artificial Intelligence: A Modern Approach
- Database System Concepts (E-Book)
- Operating System Concepts (E-Book)
- Computer Networks (E-Book)

### Mathematics (3 items)
- Calculus Early Transcendentals
- Linear Algebra and Its Applications
- Discrete Mathematics

### Agriculture (3 items)
- Principles of Agronomy
- Soil Science Fundamentals
- Modern Crop Production

### Research Journals (3 items)
- UAF Research Journal 2023
- Journal of Agricultural Sciences
- Pakistan Journal of Computer Science

### Other Categories
- Language: English Grammar in Use
- Social Sciences: Pakistan Studies
- Islamic Studies: Islamic Studies

---

## 📊 Sample Data Overview

### Attendance Statistics
- **Highest:** 100% (Ali Khan - Physics, Fatima Bibi - English)
- **Lowest:** 70% (Ahmed Hassan - Data Structures)
- **Average:** ~86%

### Grade Distribution
- **A+ Grades:** 3 subjects
- **A Grades:** 8 subjects
- **A- Grades:** 3 subjects
- **B+ Grades:** 3 subjects
- **B Grades:** 1 subject

### Fee Information
- **Semester Fee:** Rs. 45,000 (standard)
- **Lab Fee:** Rs. 5,000
- **Hostel Fee:** Rs. 15,000
- **Library Fine:** Rs. 500
- **Sports Fee:** Rs. 2,000
- **Transport Fee:** Rs. 8,000
- **Examination Fee:** Rs. 3,000

---

## 🧪 Quick API Test Commands

### Test Login
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/auth/login -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"email":"ali.khan@uaf.edu.pk","password":"password123"}'
```

### Get Dashboard Data
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/student/dashboard -Headers @{"x-user-id"="1"}
```

### Get Attendance
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/student/attendance -Headers @{"x-user-id"="1"}
```

### Get Grades
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/student/grades -Headers @{"x-user-id"="1"}
```

### Get Library Items
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/library
```

### Get Admin Stats
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/admin/stats
```

### Get Enhanced Grades
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/student/grades-enhanced -Headers @{"x-user-id"="1"}
```

### Get Detailed Marks
```powershell
Invoke-WebRequest -Uri http://localhost:5000/api/student/marks -Headers @{"x-user-id"="1"}
```

---

## 🚀 Running the Application

### Start Backend
```bash
cd backend
node server.js
```
Server runs on: http://localhost:5000

### Start Frontend
```bash
cd frontend
npm run dev
```
App runs on: http://localhost:3000

---

## 📝 Notes

- All student passwords are `password123` for easy testing
- Admin password is `admin`
- The system uses mock JWT tokens (not real authentication)
- Data is stored in memory and resets on server restart
- Library items have placeholder links (#)
- Avatars are generated using DiceBear API

---

**Last Updated:** December 13, 2024
