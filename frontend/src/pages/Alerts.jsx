import './Alerts.css';

const Alerts = () => {
  return (
    <div className="alerts-page">
      <div className="page-header">
        <h1>Fraud Alerts</h1>
        <p className="page-description">Monitor and investigate fraud alerts in real-time</p>
      </div>

      <div className="alerts-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search alerts..." />
        </div>
        <div className="filter-buttons">
          <button className="filter-btn active">All Alerts</button>
          <button className="filter-btn">Critical</button>
          <button className="filter-btn">High Priority</button>
          <button className="filter-btn">Resolved</button>
        </div>
      </div>

      <div className="alerts-placeholder">
        <div className="placeholder-icon">🚨</div>
        <h3>Alerts Queue</h3>
        <p>The alerts monitoring system will be implemented in future sprints.</p>
        <div className="placeholder-features">
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Real-time alert notifications</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Alert investigation workflow</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Automated risk scoring</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Alert history and analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
