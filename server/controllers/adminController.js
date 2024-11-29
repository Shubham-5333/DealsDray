import Employee from "../models/empSchema.js";

const adminCredentials = {
    adminName: "admin",
    password: "1234",
  };
  
  // Admin Login function
  const adminLogin = async (req, res) => {
    console.log("hi");
    
    const { adminName, password } = req.body;
  
    // Check if the provided credentials match the stored ones
    if (adminName === adminCredentials.adminName && password === adminCredentials.password) {
      return res.status(200).json({ message: "Login successful", success: true });
    } else {
      return res.status(401).json({ message: "Invalid credentials", success: false });
    }
  };

  const getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employees', error });
    }
  };
  
  // Create a new employee
  const createEmployee = async (req, res) => {
    const { name, email, mobile, designation, gender, course } = req.body;
  
    try {
      const newEmployee = new Employee({
        name,
        email,
        mobile,
        designation,
        gender,
        course,
      });
      await newEmployee.save();
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: 'Error creating employee', error });
    }
  };
  
  // Update an employee
  const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, mobile, designation, gender, course } = req.body;
  
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { name, email, mobile, designation, gender, course },
        { new: true }
      );
      res.status(200).json(updatedEmployee);
    } catch (error) {
      res.status(500).json({ message: 'Error updating employee', error });
    }
  };
  
  // Delete an employee
  const deleteEmployee = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Employee.findByIdAndDelete(id);
      res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting employee', error });
    }
  };

  
  export { adminLogin,updateEmployee,deleteEmployee,createEmployee,getEmployees };
  