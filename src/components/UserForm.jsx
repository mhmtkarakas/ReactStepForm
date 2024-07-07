import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState({});
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
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      setStep((prevStep) => prevStep + 1);
    } else {
      setError(tempErrors);
    }
  };
  // Go back to previous Step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
    setError({ ...error, [input]: "" });
  };

  // validate form fields
  const validate = () => {
    let tempErrorsName = {};
    if (!formData.firstName) {
      tempErrorsName.firstName = "This field is required";
    }
    if (!formData.lastName) {
      tempErrorsName.lastName = "This field is required";
    }
    if (!formData.email) {
      tempErrorsName.email = "This field is required";
    }
    if (!formData.occupation) {
      tempErrorsName.occupation = "This field is required";
    }
    if (!formData.city) {
      tempErrorsName.city = "This field is required";
    }
    if (!formData.bio) {
      tempErrorsName.bio = "This field is required";
    }
    return tempErrorsName;
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
          error={error}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          handeleChange={handleChange}
          error={error}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          handeleChange={handleChange}
          error={error}
        />
      );
    case 4:
      return <Success prevStep={prevStep} />;
    default:
  }
};

export default UserForm;
