import React, {useState} from "react";
import styled from "styled-components";
import {TextField, MenuItem} from "@material-ui/core";
import Circle from "../components/common/circle";
import NumberFormat from "react-number-format";
import axios from "axios";
import validator from "email-validator";
import Layout from "../components/layoutelements/layout";
import {countryList} from "../utilities/regions";

const checkPhoneNumber = input => {
 return (
  input.split("").filter(item => parseInt(item) || item === "0").length < 10
 );
};

const ErrorCapsule = styled.div`
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
 margin-top: 20px;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;

const FormBox = styled.form`
 min-width: 30rem;
 min-height: 40rem;
 border-radius: 6px;
 display: flex;

 flex-flow: column;
 align-items: center;
 background: white;
 box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.5),
  0 2px 4px -1px rgba(0, 0, 0, 0.03);
`;

const Description = styled.div`
 border-radius: 6px 6px 0px 0px;
 background: #01937c;
 min-height: 60px;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 color: white;
 font-size: 18px;
`;
const InputBox = styled.div`
 flex: 1;
 width: 80%;
 display: flex;
 padding: 10px;
 flex-flow: column;

 align-items: center;
 justify-content: space-evenly;
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
 opacity: ${({disabled}) => (disabled ? "0.5" : "1")};
 min-height: 40px;
 min-width: 150px;
 font-size: 12px;
 align-self: flex-end;
 border-radius: 6px 0 6px 0;
 &:hover {
  cursor: pointer;
 }
`;

const initialState = {
 name: "",
 surname: "",
 e_mail: "",
 phoneNumber: "(___) ___-____",
 region: "",
 message: "",
};

const RefferenceNumber = props => {
 const [contactForm, setContactForm] = useState(initialState);
 const [responseResult, setResponseResult] = useState("");
 const [loading, setLoading] = useState(false);

 const Submit = e => {
  e.preventDefault();

  const finalState = {
   relatedPersonName: contactForm.name + " " + contactForm.surname,
   relatedPersonPhoneNumber: contactForm.phoneNumber,
   relatedPersonEmail: contactForm.e_mail,
   region: contactForm.region,
   message: contactForm.message,
  };

  setLoading(true);

  axios
   .post(
    "http://study-online.herokuapp.com/api/profile/contactReport/add",
    finalState
   )
   .then(response => {
    const {result} = response.data;
    window.scrollTo(0, 0);
    setResponseResult(result);
    setTimeout(setResponseResult, 10000, "");
    setLoading(false);
   })
   .catch(error => {
    console.log(error);
    setResponseResult("Error");
    setLoading(false);
   });
 };

 let isPhoneNumberFilled = checkPhoneNumber(contactForm["phoneNumber"]);
 console.log(contactForm);
 let isEmailCorrect = validator.validate(contactForm["e_mail"]);

 let result = Object.keys(contactForm).every(key => {
  if (key === "phoneNumber" && isPhoneNumberFilled) {
   return false;
  } else if (key === "e_mail" && !isEmailCorrect) {
   return false;
  } else {
   return contactForm[key];
  }
 });

 const OnchangeHandler = type => event => {
  let value = event.target.value;

  setContactForm(prevState => ({...prevState, [type]: value}));
 };

 //  if (responseResult === "Success") {
 //   return (
 //    <Layout title='Contact Us'>
 //     <div
 //      style={{
 //       display: "flex",
 //       justifyContent: "center",
 //       alignItems: "center",
 //       width: "100%",
 //       height: "100%",
 //      }}
 //     >
 //      <ErrorCapsule style={{background: "#42b883"}}>
 //       {" "}
 //       İletişim Formunuz Gönderilmiştir . En Kısa Sürede Size Geri Dönüş
 //       Yapılacaktır.{" "}
 //      </ErrorCapsule>
 //     </div>
 //    </Layout>
 //   );
 //  } else if (responseResult === "Error") {
 //   return (
 //    <Layout title='Contact Us'>
 //     <div
 //      style={{
 //       display: "flex",
 //       justifyContent: "center",
 //       alignItems: "center",
 //       width: "100%",
 //       height: "100%",
 //      }}
 //     >
 //      <ErrorCapsule>Bir Hata Oluştu , Formunuz Gönderilmedi !</ErrorCapsule>
 //     </div>
 //    </Layout>
 //   );
 //  }

 console.log(contactForm);

 return (
  <Layout title='Contact Us'>
   {responseResult == "Success" && (
    <ErrorCapsule style={{background: "#01937c"}}>
     {" "}
     Your contact form has been sent. We will return you as soon as possible.{" "}
    </ErrorCapsule>
   )}
   <GeneralWrapper>
    <h5 style={{color: "#01937c", fontSize: "1rem", width: "28rem"}}>
     {" "}
     We will be in contact with you within 24 hours after filling up the form
     below{" "}
    </h5>
    <FormBox onSubmit={Submit}>
     <Description>
      Contact Form{" "}
      <i style={{marginLeft: 15, fontSize: 16}} className='fas fa-envelope'></i>
     </Description>

     <InputBox>
      <TextField
       style={{width: "100%", marginBottom: 10}}
       onChange={OnchangeHandler("name")}
       label='Name'
      />

      <TextField
       style={{width: "100%", marginBottom: 10}}
       onChange={OnchangeHandler("surname")}
       label='Surname'
      />

      <TextField
       style={{width: "100%", marginBottom: 10}}
       onChange={OnchangeHandler("e_mail")}
       label='E-mail Address'
      />

      <NumberFormat
       style={{width: "100%", marginBottom: 10}}
       onChange={OnchangeHandler("phoneNumber")}
       customInput={TextField}
       format='(###) ###-####'
       label='Phone Number'
       allowEmptyFormatting
       mask='_'
      />
      <TextField
       style={{width: "100%", marginBottom: 10}}
       value={contactForm["region"]}
       onChange={OnchangeHandler("region")}
       id='select'
       label='Country'
       select
      >
       {countryList.map(item => (
        <MenuItem key={item} value={item}>
         {item}
        </MenuItem>
       ))}
      </TextField>

      <TextField
       style={{width: "100%", marginTop: 7}}
       value={contactForm["message"]}
       label='Your Message'
       onChange={OnchangeHandler("message")}
       id='select'
       multiline
       rows={8}
       rowsMax={10}
      />
     </InputBox>

     <SubmitButton disabled={!result || loading}>
      {loading ? (
       <Circle Load width={25} height={25} top={10} />
      ) : (
       <React.Fragment>
        SUBMİT <i style={{marginLeft: 10}} className='fas fa-arrow-right'></i>
       </React.Fragment>
      )}
     </SubmitButton>
    </FormBox>
   </GeneralWrapper>
  </Layout>
 );
};

export default RefferenceNumber;
