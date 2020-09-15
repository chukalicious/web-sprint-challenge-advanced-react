// write your custom hook here to control your checkout form

import React, { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    e.persist();
    console.log("change handled");
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    setShowSuccessMessage(true);
  };
  return [values, showSuccessMessage, handleChange, handleSubmit];
};
/* const [values, handleChange, handleSubmit] = useForm({}); */

/* export default  */
