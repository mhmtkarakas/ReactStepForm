import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
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
    const tempErrors = validate(step);
    if (Object.keys(tempErrors).length === 0) {
      setStep((prevStep) => prevStep + 1);
      setErrors({});
    } else {
      setErrors(tempErrors);
    }
  };

  // Go back to previous Step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
    setErrors({ ...errors, [input]: "" }); // Clear error on change
  };

  // Validate form fields based on the current step
  const validate = (step) => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.firstName) {
        tempErrors.firstName = "This field is required";
      }
      if (!formData.lastName) {
        tempErrors.lastName = "This field is required";
      }
      if (!formData.email) {
        tempErrors.email = "This field is required";
      }
    } else if (step === 2) {
      if (!formData.occupation) {
        tempErrors.occupation = "This field is required";
      }
      if (!formData.city) {
        tempErrors.city = "This field is required";
      }
      if (!formData.bio) {
        tempErrors.bio = "This field is required";
      }
    }
    return tempErrors;
  };

  const { firstName, lastName, email, occupation, city, bio } = formData;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          values={values}
          handleChange={handleChange}
          errors={errors}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          handleChange={handleChange}
          errors={errors}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success prevStep={prevStep} />;
    default:
      return null;
  }
};

export default UserForm;
