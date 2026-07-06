import { useEffect, useState } from "react";
import { IconPosCafe } from "../Helper/icons";
import { getAllUsers, deleteUser, toggleUserStatus, createUser } from "../api/api";
import type { User, CreateUserRequest } from "../Types/Types";
import Popup from "../shared/popup";
import TableComponent, { type Column } from "../shared/Table";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addUserError, setAddUserError] = useState("");
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

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
    setUserToDelete(userId);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = async () => {
    if (userToDelete !== null) {
      try {
        await deleteUser(userToDelete);
        setUsers(users.filter(user => user.userId !== userToDelete));
        setShowDeletePopup(false);
        setUserToDelete(null);
      } catch (err) {
        setError("Failed to delete user");
        console.error("Error deleting user:", err);
        setShowDeletePopup(false);
        setUserToDelete(null);
      }
    }
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
    setUserToDelete(null);
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

  const columns: Column<User>[] = [
    {
      header: "ID",
      key: "userId",
      sortable: true,
      render: (user) => <div className="p-1">{user.userId}</div>,
    },
    {
      header: "Full Name",
      key: "fullName",
      sortable: true,
      className: "text-gray-500",
      render: (user) => <div className="p-1">{user.fullName}</div>,
    },
    {
      header: "Username",
      key: "username",
      sortable: true,
      render: (user) => <div className="p-1">{user.username}</div>,
    },
    {
      header: "Email",
      key: "email",
      sortable: true,
      className: "text-gray-500",
      render: (user) => <div className="p-1">{user.email}</div>,
    },
    {
      header: "Role",
      key: "role",
      sortable: true,
      render: (user) => <div className="p-1">{user.role}</div>,
    },
    {
      header: "Status",
      key: "isActive",
      sortable: true,
      render: (user) => (
        <div className={`p-1 px-2 ${user.isActive ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"} rounded-sm flex items-center w-fit`}>
          {user.isActive ? "Active" : "Inactive"}
        </div>
      ),
    },
    {
      header: "Created",
      key: "createdAt",
      sortable: true,
      className: "text-gray-500",
      render: (user) => <div className="p-1">{new Date(user.createdAt).toLocaleDateString()}</div>,
    },
    {
      header: "Actions",
      render: (user) => (
        <div className="p-1 flex gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); handleToggleStatus(user.userId); }}
            className="p-1.5 hover:bg-gray-100 rounded-sm text-gray-600 hover:text-gray-800 cursor-pointer"
            title={user.isActive ? "Deactivate" : "Activate"}
          >
            <IconPosCafe icon={user.isActive ? "disable" : "check"} size={14} color={user.isActive ? "red" : "green"}/>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handleDeleteUser(user.userId); }}
            className="p-1.5 hover:bg-red-50 rounded-sm text-gray-600 hover:text-red-600 cursor-pointer"
            title="Delete"
          >
            <IconPosCafe icon="delete" size={14} color="red"/>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white rounded-sm shadow-sm shadow-gray-200 p-4">

        {addUserError && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-sm mb-4 text-sm">
            {addUserError}
          </div>
        )}

        <div className="bg-white text-ss-55 rounded-sm shadow-sm shadow-gray-200 scrollbar-none flex items-center p-2 justify-between gap-2 mb-4">
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Full Name</div>
            <input
              type="text"
              name="fullName"
              value={newUser.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="border rounded-sm border-gray-200 p-2 w-full text-ss-50 lg:text-ss-55"
            />
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Username</div>
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleInputChange}
              placeholder="Enter username"
              className="border rounded-sm border-gray-200 p-2 w-full text-ss-50 lg:text-ss-55"
            />
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Email</div>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="border rounded-sm border-gray-200 p-2 w-full text-ss-50 lg:text-ss-55"
            />
          </div>
          <div className="border-0 w-full">
            <div className="text-ss-50 text-gray-500">Password</div>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className="border rounded-sm border-gray-200 p-2 w-full text-ss-50 lg:text-ss-55"
            />
          </div>
          <div className="flex h-full items-end">
            <button 
              onClick={handleAddUser}
              disabled={isAddingUser}
              className="bg-gpurple flex p-4 rounded-md aspect-16/6 h-1/2 items-center justify-center border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IconPosCafe color="white" icon="add" />
              <span className="text-white">{isAddingUser ? "Adding..." : "Add User"}</span>
            </button>
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
          <div className="overflow-x-hidden">
            <TableComponent
              columns={columns}
              data={users}
              emptyMessage="No users found"
              className="w-full"
            />
          </div>
        )}
      </div>

      <Popup
        show={showDeletePopup}
        navigateTo="/users"
        message="user"
        type="delete"
        onSubmit={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
}
