import { useEffect, useState } from "react";
import { IconPosCafe } from "../Helper/icons";
import { getAllUsers, deleteUser, toggleUserStatus } from "../api/UserManagementApi";
import type { User } from "../Types/Types";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
      setError("");
    } catch (err) {
      setError("Failed to fetch users");
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(userId);
        setUsers(users.filter(user => user.userId !== userId));
      } catch (err) {
        setError("Failed to delete user");
        console.error("Error deleting user:", err);
      }
    }
  };

  const handleToggleStatus = async (userId: number) => {
    try {
      const updatedUser = await toggleUserStatus(userId);
      setUsers(users.map(user => user.userId === userId ? updatedUser : user));
    } catch (err) {
      setError("Failed to toggle user status");
      console.error("Error toggling user status:", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white rounded-sm shadow-sm shadow-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">User Management</h2>
          <button className="bg-gpurple text-white px-4 py-2 rounded-sm text-sm font-semibold hover:brightness-105 flex items-center gap-2">
            <IconPosCafe icon="add" size={16} />
            Add User
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-sm mb-4 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading users...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">ID</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Full Name</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Username</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Email</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Role</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Created</th>
                  <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-8 text-gray-500">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.userId} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-600">{user.userId}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">{user.fullName}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.username}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.role}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.isActive 
                            ? "bg-green-100 text-green-700" 
                            : "bg-red-100 text-red-700"
                        }`}>
                          {user.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            className="p-1.5 hover:bg-gray-100 rounded-sm text-gray-600 hover:text-gray-800"
                            title="Edit"
                          >
                            <IconPosCafe icon="edit" size={14} />
                          </button>
                          <button 
                            onClick={() => handleToggleStatus(user.userId)}
                            className="p-1.5 hover:bg-gray-100 rounded-sm text-gray-600 hover:text-gray-800"
                            title={user.isActive ? "Deactivate" : "Activate"}
                          >
                            <IconPosCafe icon={user.isActive ? "disable" : "check"} size={14} />
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(user.userId)}
                            className="p-1.5 hover:bg-red-50 rounded-sm text-gray-600 hover:text-red-600"
                            title="Delete"
                          >
                            <IconPosCafe icon="delete" size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
