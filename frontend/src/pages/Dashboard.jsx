import { mockDashboardStats } from '../data/mockCustomers';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Customers',
      value: mockDashboardStats.totalCustomers.toLocaleString(),
      icon: '👥',
      color: '#3b82f6',
    },
    {
      title: 'High Risk Customers',
      value: mockDashboardStats.highRiskCustomers,
      icon: '⚠️',
      color: '#ef4444',
    },
    {
      title: 'Alerts Today',
      value: mockDashboardStats.alertsToday,
      icon: '🚨',
      color: '#f59e0b',
    },
    {
      title: 'Transactions Today',
      value: mockDashboardStats.transactionsToday.toLocaleString(),
      icon: '💳',
      color: '#10b981',
    },
  ];

  return (
    <div className="dashboard">
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p className="page-description">Monitor customer risk and fraud activity</p>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15` }}>
              <span style={{ color: stat.color }}>{stat.icon}</span>
            </div>
            <div className="stat-content">
              <p className="stat-title">{stat.title}</p>
              <h2 className="stat-value">{stat.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <div className="activity-placeholder">
            <p>Activity feed will be implemented in future sprints</p>
          </div>
        </div>
        
        <div className="dashboard-card">
          <h3>Risk Distribution</h3>
          <div className="chart-placeholder">
            <p>Risk charts will be implemented in future sprints</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
