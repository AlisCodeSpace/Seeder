import React, { useState } from 'react';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { ViewIcon, ViewOffSlashIcon } from '../../assets/icons/Icons'
import { PasswordValidation, EmailValidation, NameValidation } from '../../utils/Validations';

const RegisterForm = ({ formData, placeholders, formErrors, handleInputChange, setErrors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const validatedName = NameValidation(formData.name);
    const validatedEmail = EmailValidation(formData.email);
    const validatedPass = PasswordValidation(formData.password);

    // Set errors if validation fails
    const errors = {
      name: validatedName !== true ? validatedName : '',
      email: validatedEmail !== true ? validatedEmail : '',
      password: validatedPass !== true ? validatedPass : '',
    };

    // Update errors in the parent state
    setErrors(errors);

    // If there are no errors, handle the form submission
    if (Object.values(errors).every((error) => !error)) {
      console.log('Form Submitted:', formData);
    }
  };

  const fields = [
    {
      name: 'name',
      placeholder: placeholders.name,
      type: 'text',
      value: formData.name,
      error: formErrors.name,
    },
    {
      name: 'email',
      placeholder: placeholders.email,
      type: 'email',
      value: formData.email,
      error: formErrors.email,
    },
    {
      name: 'password',
      placeholder: placeholders.password,
      type: showPassword ? 'text' : 'password',
      value: formData.password,
      error: formErrors.password,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5">
      {fields.map((field, index) => (
        <div key={index} className="w-full relative">
          <Input
            type={field.type}
            placeholder={field.placeholder}
            value={field.value}
            handleChange={(e) => handleInputChange(field.name, e.target.value)}
            error={field.error}
            name={field.name}
            id={field.name}
          />
          {field.name === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-3 right-5 text-primary"
            >
              {showPassword ? <ViewIcon /> : <ViewOffSlashIcon />}
            </button>
          )}
          {field.error && <p className="text-red-700 text-xs mt-2">{field.error}</p>}
        </div>
      ))}
      <Button type="submit" text="Register" className="button w-full" />
    </form>
  );
};

export default RegisterForm;
