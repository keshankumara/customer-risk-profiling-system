# Frontend

This frontend is a React + Vite application for the Customer Risk Profiling System. It provides an analyst portal UI with routing, mock authentication, and placeholder pages for upcoming features.

## Tech Stack

- React 19
- React Router 7
- Vite (via rolldown-vite)
- ESLint 9

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## App Routes

Public routes:

- /login
- /register

Protected routes (require mock auth):

- /dashboard
- /customers
- /alerts
- /user-management
- /risk-policies (placeholder)
- /settings (placeholder)

Mock authentication is stored in `localStorage` (`isAuthenticated` and `userRole`). Logging in sets these values, and logout clears them.

## Key Screens

- Dashboard: summary metrics from mock data and placeholder panels.
- Customers: searchable table with risk badges and status indicators, using mock data.
- Alerts: placeholder view describing planned alert workflow features.
- User Management: in-memory user list with create user modal and password generator.
- Login/Register: mock forms for analyst/admin entry points.

## Project Structure

```
src/
	components/         # shared layout and UI elements
	data/               # mock data
	pages/              # route screens
	App.jsx             # routing and protected layout
	main.jsx            # app bootstrap
```

## Notes

- This UI currently uses mock data and local state only. Wire up real APIs in the backend integration phase.
- Alerts, risk policies, and settings are placeholders and should be implemented in future sprints.
