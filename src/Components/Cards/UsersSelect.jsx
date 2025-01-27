import React from "react";
import Select from "../Form/Select";
import { fetchUsers } from "../API/Api";

const UsersSelect = ({ onChange }) => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        const transformedUsers = data.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
        }));
        setUsers(transformedUsers);
      } catch (error) {
        console.error("Failed to load users:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadUsers();
  }, []);

  return (
    <div>
      <Select
        options={users}
        onChange={(value) => onChange(value)}
        placeholder={isLoading ? "Loading users..." : "Select a user"}
        disabled={isLoading}
      />
    </div>
  );
};
export default UsersSelect;
