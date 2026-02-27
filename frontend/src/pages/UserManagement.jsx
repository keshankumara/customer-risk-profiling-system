import { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Fraud Analyst',
    password: '',
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: 'John Smith',
      email: 'john.smith@bank.com',
      role: 'Fraud Analyst',
      status: 'Active',
      createdAt: '2026-01-15',
    },
    {
      id: 2,
      fullName: 'Sarah Johnson',
      email: 'sarah.johnson@bank.com',
      role: 'Risk Manager',
      status: 'Active',
      createdAt: '2026-01-10',
    },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generatePassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, password });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement API call to create user
    const newUser = {
      id: users.length + 1,
      ...formData,
      status: 'Active',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, newUser]);
    setShowCreateModal(false);
    setFormData({ fullName: '', email: '', role: 'Fraud Analyst', password: '' });
    alert(`User created!\n\nEmail: ${newUser.email}\nTemporary Password: ${formData.password}\n\nPlease provide these credentials to the user.`);
  };

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case 'Admin':
        return 'role-admin';
      case 'Risk Manager':
        return 'role-manager';
      case 'Fraud Analyst':
        return 'role-analyst';
      default:
        return '';
    }
  };

  return (
    <div className="user-management-page">
      <div className="page-header">
        <div>
          <h1>User Management</h1>
          <p className="page-description">Create and manage system users and their credentials</p>
        </div>
        <button className="create-user-btn" onClick={() => setShowCreateModal(true)}>
          + Create New User
        </button>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="user-id">#{user.id}</td>
                <td className="user-name">{user.fullName}</td>
                <td className="user-email">{user.email}</td>
                <td>
                  <span className={`role-badge ${getRoleBadgeClass(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className="status-active">{user.status}</span>
                </td>
                <td className="user-date">{user.createdAt}</td>
                <td>
                  <div className="action-buttons">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-reset">Reset Password</button>
                    <button className="btn-deactivate">Deactivate</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New User</h2>
              <button className="close-btn" onClick={() => setShowCreateModal(false)}>
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="user-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="user@bank.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="Fraud Analyst">Fraud Analyst</option>
                  <option value="Risk Manager">Risk Manager</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="password">Temporary Password</label>
                <div className="password-input-group">
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Generate or enter password"
                    required
                  />
                  <button
                    type="button"
                    className="generate-btn"
                    onClick={generatePassword}
                  >
                    Generate
                  </button>
                </div>
                <small className="form-hint">
                  This temporary password will be provided to the user for first login
                </small>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
