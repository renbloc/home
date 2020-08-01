import React, { useState } from 'react';
import { FormUserDetails } from './UserDetails';
import { FormPersonalDetails } from './PersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';
import { signupAction } from '../../../actions/signupAction';
import { useDispatch, useSelector } from 'react-redux';

export const WorkerForm = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  });
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  const submitData = () => {
    dispatch(signupAction(formData));
    setStep(prev => prev + 1);
  }
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm formData={formData} nextStep={submitData} prevStep={prevStep} />
      );
    default:
      return <Success />;
  }
};