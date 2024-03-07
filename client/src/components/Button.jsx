import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"; // Import axios for making API calls

function Button({ employeeId }) {
  const history = useHistory();

  const handleEditClick = () => {
    // Redirect the user to the Register page with the employee data
    history.push("/Reg", { employeeData: employeeId }); // Pass employee ID as data
  };

  const handleDeleteClick = () => {
    // Prompt the user for confirmation before deleting the employee
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      // Make an API call to delete the employee data
      // Example API call using Axios:
      axios
        .delete(`http://localhost:3000/employees/${employeeId}`)
        .then((response) => {
          console.log("Employee deleted successfully:", response.data);
          // Optionally, update the UI to reflect the changes
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
        });
    }
  };

  return (
    <div>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Button;
