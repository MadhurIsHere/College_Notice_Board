# CampusNotice Board System

A glassmorphic, React-based web application designed for streamlined college communication between administration and students.

## 🚀 Features
- **Role-Based Access**: Specialized views for Students and Admins.
- **Dynamic Student Dashboards**: Tailored routes for 1st, 2nd, 3rd, and 4th-year students (`/dashboard/student/:year`).
- **Admin Management**: Capability to upload PDF notices and categorize them (Year-specific or Global).
- **Responsive UI**: Fully optimized for mobile and desktop using Tailwind CSS and Framer Motion-style glassmorphism.

## 🛠️ Tech Stack
- **Frontend**: React.js, React Router DOM
- **Styling**: Tailwind CSS v4 (Glassmorphism)
- **Icons**: React Icons (Fa, Io)

## 📁 Routing Structure
- `/` : Landing Page
- `/login` : Multi-role Login Portal
- `/dashboard/admin` : Admin control panel for notice uploads
- `/dashboard/student/:year` : Dynamic year-specific notice boards

## 🔧 Installation
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`