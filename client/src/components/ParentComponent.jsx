import React, { useState } from "react";
import EmployeeCard from "./EmployeeCards";
import EmployeeFormDialog from "../pages/EmployeeFormDialog";

function ParentComponent() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEditClick = (employeeData) => {
    setSelectedEmployee(employeeData);
    setOpenDialog(true);
  };

  const handleFormSubmit = (formData) => {
    // Logic to handle form submission (e.g., API call to register or update employee)
    console.log(formData);
    // Close the dialog after form submission
    setOpenDialog(false);
  };

  return (
    <>
      <EmployeeCard onEditClick={handleEditClick} />
      <EmployeeFormDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleFormSubmit}
        employee={selectedEmployee}
      />
    </>
  );
}

export default ParentComponent;
