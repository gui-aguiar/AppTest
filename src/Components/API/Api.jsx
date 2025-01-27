//export const API_BASE_URL = import.meta.env.VITE_APP_API_URL ||'http://localhost:5019/api';
export const API_BASE_URL ='http://localhost:5019/api';

const handleApiResponse = async (response) => {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An unknown error occurred");
    }
    return response.json();
  };

  export const fetchComputers = async (limit = 10, offset = 0) => {
    try {
      const response = await fetch(`${API_BASE_URL}/computer?limit=${limit}&offset=${offset}`);
      if (!response.ok) throw new Error("Failed to fetch computers");
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error fetching computers:", error);
      throw error;
    }
  };

  export const fetchUsers = async () => {  
    try {
      const response = await fetch(`${API_BASE_URL}/user`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };
  

export const createComputer = async (computerData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/computer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(computerData),
    });
    return await handleApiResponse(response);
  } catch (error) {
    console.error("Error creating computer:", error);
    throw error;
  }
};

export const updateComputer = async (computerId, computerData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/computer/${computerId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(computerData),
    });
    return await handleApiResponse(response);
  } catch (error) {
    console.error(`Error updating computer ${computerId}:`, error);
    throw error;
  }
};

export const deleteComputer = async (computerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/computer/${computerId}`, {
      method: "DELETE",
    });
    await handleApiResponse(response);    
    return true;
  } catch (error) {
    console.error("Error deleting computer:", error);
    return false;
  }
};

export const removeUserFromComputer = async (computerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/computer/${computerId}/user`, {
      method: "DELETE",      
    });
    await handleApiResponse(response);
    return true;
  } catch (error) {
    console.error("Error removing user:", error);
    return false;
  }
};

export const assignUserToComputer = async (computerId, userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/computer/${computerId}/user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    await handleApiResponse(response);
    return true;
  } catch (error) {
    console.error("Error assigning user:", error);
    return false;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const getStatusById = async (statusId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/status/${statusId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch status");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching status:", error);
    return null;
  }
};

export const getManufacturerById = async (manufacturerId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/manufacturer/${manufacturerId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch manufacturer");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching manufacturer:", error);
    return null;
  }
};

export const getManufacturers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/manufacturer`);
    if (!response.ok) {
      throw new Error("Failed to fetch manufacturers");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching manufacturers:", error);
    return [];
  }
};