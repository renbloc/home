import React from 'react'
import { useState, useEffect } from "react";
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails'
import ConfirmPage from './ConfirmPage';
import FormProf from './FormProf';
import FormPref from './FormPref'
import FormExp from './FormExp';
import FormDetails from './FormDetails';



export default function Form() {
    const [Step, setStep] = useState(1);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [Education, setEducation] = useState('');
    const [Speciality, setSpeciality] = useState('');
    const [Region1, setRegion1] = useState('');
    const [Region2, setRegion2] = useState('');
    const [Region3, setRegion3] = useState('');
    const [Employer, setEmployer] = useState('');
    const [Role, setRole] = useState('');


    function nextStep() {
        setStep(Step + 1)
    }

    function prevStep() {
        setStep(Step - 1)
    }

    function form() {
        switch (Step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={nextStep}
                        Data={FirstName}
                        setData={setFirstName}
                        header="Before we jump in, what's your first name?"
                        placeholder="First Name"

                    />
                )
            case 2:
                return (
                    <FormDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
                        Data={LastName}
                        setData={setLastName}
                        header={"Nice to meet you " + FirstName + " what is your last name?"}
                        placeholder="Last Name"
                    />
                )
            case 3:
                return (
                    <FormPersonalDetails
                        nextStep={nextStep}
                        prevStep={prevStep}
                        Data1={Email}
                        setData1={setEmail}
                        Data2={PhoneNumber}
                        setData2={setPhoneNumber}
                        header={"Now for some contact information"}
                        placeholder1="Email"
                        placeholder2="Phone Number"
                    />
                )
            case 4:
                return (
                    <FormProf
                        nextStep={nextStep}
                        prevStep={prevStep}
                        header="Lets talk about your previous experience"
                        Data1={Education}
                        setData1={setEducation}
                        Data2={Speciality}
                        setData2={setSpeciality}
                    />
                )
            case 5:
                return (
                    <FormPref
                        nextStep={nextStep}
                        prevStep={prevStep}
                        header="Lets talk about your previous experience"
                        Data1={Region1}
                        setData1={setRegion1}
                        Data2={Region2}
                        setData2={setRegion2}
                        Data3={Region3}
                        setData3={setRegion3}
                    />
                )
            case 6:
                return (
                    <FormExp
                        nextStep={nextStep}
                        prevStep={prevStep}
                        header="Lets talk about your previous experience"
                        Data1={Employer}
                        setData1={setEmployer}
                        Data2={Role}
                        setData2={setRole}
                    />
                )
            case 7:
                return (
                    <ConfirmPage
                        header="Lets talk about your previous experience"
                        nextStep={nextStep}
                        prevStep={prevStep}
                        FirstName={FirstName}
                        LastName={LastName}
                        PhoneNumber={PhoneNumber}
                        Email={Email}
                        Education={Education}
                        Speciality={Speciality}
                        Region1={Region1}
                        Region2={Region2}
                        Region3={Region3}
                        Employer={Employer}
                        Role={Role}

                    />
                )
            case 8:
                return (
                    <ConfirmPage
                        FirstName={FirstName}
                        LastName={LastName}
                        Email={Email}
                        PhoneNumber={PhoneNumber}
                    />
                )
        }
    }

    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '35%'
            }}
        >
            {form()}
        </div>
    );

}
