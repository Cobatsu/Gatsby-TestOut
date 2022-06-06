import React, { useState } from "react";
import styled from "styled-components";
import { TextField, MenuItem } from "@material-ui/core";
import Circle from "./circle";
import NumberFormat from "react-number-format";
import axios from "axios";
import validator from "email-validator";
import { countryList } from "../../utilities/regions";
import { grades } from "../../utilities/grades";

const checkPhoneNumber = input => {
    return (
        input.split("").filter(item => parseInt(item) || item === "0").length < 10
    );
};

const Notify = styled.div`
 padding: 30px;
 box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.4),
  0 2px 4px -1px rgba(0, 0, 0, 0.02);
 min-width: 200px;
 text-align: center;
 background: #e00543;
 color: white;
`;
const GeneralWrapper = styled.div`
 display: flex;
 margin: 4rem;
 flex-direction: column;
 align-items: center;

`;

const FormBox = styled.form`
 min-width:73%;
 min-height: 30rem;
 border-radius: 6px;
 display: flex;
 flex-direction:column;
 align-items: center;
 justify-content:center;
 padding:20px 0 0 0;
 background: white;
 box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.5),
 0 2px 4px -1px rgba(0, 0, 0, 0.03);

`;

const Description = styled.div`
 border-radius: 6px 6px 0px 0px;
 color: #191970;
 width: 70%;
 display: flex;
 justify-content:center;
 font-size: 1.2rem;
 font-weight:600;
 margin-bottom:50px;
 text-decoration: underline;
`;
const InputBox = styled.div`
 flex: 1;
 width: 64%;
 display: flex;
 padding: 10px;
 align-items: center;
 flex-wrap:wrap;
 justify-content: space-between;
 
`;

const SubmitButton = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 border-radius: 6px;
 outline: none;
 border: none;
 color: white;
 background: #4c4c69;
 opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
 min-height: 3rem;
 min-width: 7rem;
 font-size: 1.1rem;
 align-self: flex-end;
 border-radius: 6px 0 6px 0;
 &:hover {
  cursor: pointer;
 }
`;

const ClassicText = styled.span`
color: #191970;
font-size: 1.7rem;
font-weight: 700;
margin-bottom: 20px;
text-align:center;
width:70%;
`



const initialState = {

    firstName: "",
    lastName: "",
    email: "",
    countryOfResidence: "",
    countryOfBirth: "",
    highschool: "",
    phone: "(___) ___-____",
    GPA: ""

};

const initialStudent = {
    name: "",
    surname: "",
    phone_number: "",
    e_mail: "",
    date_of_birth: new Date(),
    gender: "Male",
    street: "",
    apartment_and_number: "",
    town: "",
    city: "",
    postal_code: "",
    country_of_birth: "",
    country_of_citizenship: "",
    first_date_of_grade_9: new Date(),
    native_language: "",
    parent_guardian_first_name: "",
    parent_guardian_last_name: "",
    relationship_to_student: "Father",
    parent_guardian_e_mail_address: "",
    parent_guardian_mobile_phone_number: "",
    currently_attending_a_high_school: "Yes",
    currentor_last_attended_school_name: "",
    english_language_proficiency: "TOEFL",
    look_forward_to_study_at_rosedale: "IGCSE Courses",
    desired_university_studies: "Mathematics IGCSE",
};


//hi

const RefferenceNumber = ({ courseApplied, levelApplied, courseFee }) => {
    const [contactForm, setContactForm] = useState(initialState);
    const [responseResult, setResponseResult] = useState("");
    const [loading, setLoading] = useState(false);

    const Submit = e => {
        e.preventDefault();
        setLoading(true);

        axios
            .post(
                "https://study-online.herokuapp.com/api/register/addNewOnlineStudent",
                {
                    scholarShipInfo: contactForm,
                    studentModel: initialStudent,
                    courseApplied,
                    levelApplied,
                    courseFee
                }
            )
            .then(response => {
                const { result } = response.data;
                window.scrollTo(0, 0);
                setResponseResult(result);
                setTimeout(setResponseResult, 30000, "");
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setResponseResult("Error");
                setLoading(false);
            });
    };

    let isPhoneNumberFilled = checkPhoneNumber(contactForm["phone"]);
    console.log(contactForm);
    let isEmailCorrect = validator.validate(contactForm["email"]);

    let result = Object.keys(contactForm).every(key => {
        if (key === "phone" && isPhoneNumberFilled) {
            return false;
        } else if (key === "email" && !isEmailCorrect) {
            return false;
        } else {
            return contactForm[key];
        }
    });

    const OnchangeHandler = type => event => {
        let value = event.target.value;

        setContactForm(prevState => ({ ...prevState, [type]: value }));
    };


    levelApplied = levelApplied.split("   ").length > 1 ? levelApplied.split("   ").join(" + ") : levelApplied;

    return (
        <React.Fragment>
            {responseResult == "Success" && (
                <Notify style={{ background: "#01937c", marginTop: 30 }}>
                    {" "}
                    Your application has been submitted successfully. We will return you as soon as possible. Please check your emails spam folder. {" "}
                </Notify>
            )}
            <GeneralWrapper>
                <ClassicText>{courseApplied}  {levelApplied == "IGCSE" ? null : levelApplied}</ClassicText>
                <Description>
                    Scholarship and Pre-registration Form
                </Description>
                <FormBox onSubmit={Submit}>

                    <InputBox>
                        <TextField
                            style={{ width: "40%", marginBottom: 10 }}
                            onChange={OnchangeHandler("firstName")}
                            label='First Name'
                        />

                        <TextField
                            style={{ width: "40%", marginBottom: 10 }}
                            onChange={OnchangeHandler("lastName")}
                            label='Last Name'
                        />

                        <TextField
                            style={{ width: "40%", marginBottom: 10 }}
                            onChange={OnchangeHandler("email")}
                            label='E-mail Address'
                        />

                        <NumberFormat
                            style={{ width: "40%", marginBottom: 10 }}
                            onChange={OnchangeHandler("phone")}
                            customInput={TextField}
                            format='(###) ###-####'
                            label='Phone Number'
                            allowEmptyFormatting
                            mask='_'
                        />

                        <TextField
                            style={{ width: "40%", marginBottom: 10 }}
                            value={contactForm["region"]}
                            onChange={OnchangeHandler("countryOfResidence")}
                            id='select'
                            label='Country of Residence'
                            select
                        >
                            {countryList.map(item => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            style={{ width: "40%", marginBottom: 10 }}
                            value={contactForm["region"]}
                            onChange={OnchangeHandler("countryOfBirth")}
                            id='select'
                            label='Country of Birth'
                            select
                        >

                            {countryList.map(item => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField>


                        <TextField
                            style={{ width: "40%", marginBottom: 10 }}
                            onChange={OnchangeHandler("highschool")}
                            label='High School'
                        />

                        <TextField
                            style={{ width: "40%", marginBottom: 10 }}
                            value={contactForm["GPA"]}
                            onChange={OnchangeHandler("GPA")}
                            id='select'
                            label='Highschool GPA'
                            select
                        >
                            {grades.map(item => (
                                <MenuItem key={item.letter} value={item.letter}>
                                    {item.letter}
                                </MenuItem>
                            ))}
                        </TextField>


                    </InputBox>

                    <SubmitButton disabled={!result || loading}>
                        {loading ? (
                            <Circle Load width={25} height={25} top={10} />
                        ) : (
                            <React.Fragment>
                                Apply
                            </React.Fragment>
                        )}
                    </SubmitButton>
                </FormBox>
            </GeneralWrapper>
        </React.Fragment>
    );
};

export default RefferenceNumber;
