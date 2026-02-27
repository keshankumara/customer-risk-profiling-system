import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="page-title">Fraud Monitoring System</h1>
        </div>
        <div className="header-right">
          <button className="notification-btn">
            🔔 <span className="notification-badge">3</span>
          </button>
          <div className="user-profile">
            <span className="user-avatar">FA</span>
            <span className="user-name">Fraud Analyst</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
