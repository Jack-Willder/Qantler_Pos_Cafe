import { useEffect, useState } from "react";
import { IconPosCafe } from "../Helper/icons";
import { getAllUsers, deleteUser, toggleUserStatus, createUser } from "../api/UserManagementApi";
import type { User, CreateUserRequest } from "../Types/Types";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addUserError, setAddUserError] = useState("");
  const [isAddingUser, setIsAddingUser] = useState(false);

  const [newUser, setNewUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: ""
  });

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

  const validateUserForm = () => {
    if (!newUser.fullName.trim()) {
      setAddUserError("Full name is required");
      return false;
    }
    if (!newUser.username.trim()) {
      setAddUserError("Username is required");
      return false;
    }
    if (newUser.username.length < 3) {
      setAddUserError("Username must be at least 3 characters");
      return false;
    }
    if (!newUser.email.trim()) {
      setAddUserError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUser.email)) {
      setAddUserError("Please enter a valid email address");
      return false;
    }
    if (!newUser.password) {
      setAddUserError("Password is required");
      return false;
    }
    if (newUser.password.length < 6) {
      setAddUserError("Password must be at least 6 characters");
      return false;
    }
    setAddUserError("");
    return true;
  };

  const handleAddUser = async () => {
    if (!validateUserForm()) return;

    setIsAddingUser(true);
    try {
      const userData: CreateUserRequest = {
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      };

      const createdUser = await createUser(userData);
      setUsers([...users, createdUser]);
      
      // Reset form
      setNewUser({
        fullName: "",
        username: "",
        email: "",
        password: ""
      });
      setAddUserError("");
    } catch (err) {
      setAddUserError("Failed to create user. Please try again.");
      console.error("Error creating user:", err);
    } finally {
      setIsAddingUser(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (addUserError) {
      setAddUserError("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white rounded-sm shadow-sm shadow-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">User Management</h2>
          <button 
            onClick={handleAddUser}
            disabled={isAddingUser}
            className="bg-gpurple text-white px-4 py-2 rounded-sm text-sm font-semibold hover:brightness-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IconPosCafe icon="add" size={16} />
            {isAddingUser ? "Adding..." : "Add User"}
          </button>
        </div>

        {addUserError && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-sm mb-4 text-sm">
            {addUserError}
          </div>
        )}

        <div className="bg-gray-50 rounded-sm p-3 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex flex-col">
              <label className="text-ss-50 text-gray-500 mb-1">Full Name</label>
              <div className="flex items-center border rounded-sm border-gray-200 bg-white">
                <span className="flex h-8 w-8 items-center justify-center bg-[#f7f6ff]">
                  <IconPosCafe icon="person" color="purple" size={14} />
                </span>
                <input
                  type="text"
                  name="fullName"
                  value={newUser.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  className="h-8 min-w-0 flex-1 px-2 text-ss-55 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-ss-50 text-gray-500 mb-1">Username</label>
              <div className="flex items-center border rounded-sm border-gray-200 bg-white">
                <span className="flex h-8 w-8 items-center justify-center bg-[#f7f6ff]">
                  <IconPosCafe icon="person" color="purple" size={14} />
                </span>
                <input
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  className="h-8 min-w-0 flex-1 px-2 text-ss-55 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-ss-50 text-gray-500 mb-1">Email</label>
              <div className="flex items-center border rounded-sm border-gray-200 bg-white">
                <span className="flex h-8 w-8 items-center justify-center bg-[#f7f6ff]">
                  <IconPosCafe icon="mail" color="purple" size={14} />
                </span>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className="h-8 min-w-0 flex-1 px-2 text-ss-55 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-ss-50 text-gray-500 mb-1">Password</label>
              <div className="flex items-center border rounded-sm border-gray-200 bg-white">
                <span className="flex h-8 w-8 items-center justify-center bg-[#f7f6ff]">
                  <IconPosCafe icon="lock" color="purple" size={14} />
                </span>
                <input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className="h-8 min-w-0 flex-1 px-2 text-ss-55 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
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
                            <IconPosCafe icon="edit" size={14} color="violet"/>
                          </button>
                          <button 
                            onClick={() => handleToggleStatus(user.userId)}
                            className="p-1.5 hover:bg-gray-100 rounded-sm text-gray-600 hover:text-gray-800"
                            title={user.isActive ? "Deactivate" : "Activate"}
                          >
                            <IconPosCafe icon={user.isActive ? "disable" : "check"} size={14} color={user.isActive ? "red" : "green"}/>
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(user.userId)}
                            className="p-1.5 hover:bg-red-50 rounded-sm text-gray-600 hover:text-red-600"
                            title="Delete"
                          >
                            <IconPosCafe icon="delete" size={14} color="red"/>
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
