import { mockCustomers } from '../data/mockCustomers';
import RiskBadge from '../components/RiskBadge';
import './Customers.css';

const Customers = () => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'blocked':
        return 'status-blocked';
      case 'review':
        return 'status-review';
      default:
        return '';
    }
  };

  return (
    <div className="customers-page">
      <div className="page-header">
        <h1>Customer Management</h1>
        <p className="page-description">Monitor and manage customer risk profiles</p>
      </div>

      <div className="customers-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search customers..." />
        </div>
        <div className="filter-buttons">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">High Risk</button>
          <button className="filter-btn">Medium Risk</button>
          <button className="filter-btn">Low Risk</button>
        </div>
      </div>

      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Risk Score</th>
              <th>Risk Level</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="customer-id">{customer.id}</td>
                <td className="customer-name">{customer.name}</td>
                <td>
                  <div className="risk-score-cell">
                    <span className="score-value">{customer.riskScore}</span>
                    <div className="score-bar">
                      <div
                        className="score-fill"
                        style={{ width: `${customer.riskScore}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>
                  <RiskBadge level={customer.riskLevel} />
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(customer.status)}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
