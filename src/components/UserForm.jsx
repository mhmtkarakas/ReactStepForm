import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });
  // Proceed to next Step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  // Go back to previous Step
  const prevStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const { firstName, lastName, email, occupation, city, bio } = formData;
  const values = { firstName, lastName, email, occupation, city, bio };
  
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          values={values}
          handeleChange={handleChange}
        />
      );
    case 2:
      return <h1>FormPersonalDetails</h1>;
    case 3:
      return <h1>Confirm</h1>;
    case 4:
      return <h1>Success</h1>;
    default:
  }
};

export default UserForm;
