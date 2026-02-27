import './RiskBadge.css';

const RiskBadge = ({ level }) => {
  const getLevelClass = () => {
    switch (level?.toLowerCase()) {
      case 'high':
        return 'risk-high';
      case 'medium':
        return 'risk-medium';
      case 'low':
        return 'risk-low';
      default:
        return 'risk-unknown';
    }
  };

  return (
    <span className={`risk-badge ${getLevelClass()}`}>
      {level || 'Unknown'}
    </span>
  );
};

export default RiskBadge;
