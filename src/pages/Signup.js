import{StyledTextInput,StyledFormButton, Avatar, StyledFormArea, StyledLabel, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from  './../components/Styles'

import Logo from "./../assets/logo.png"
//formik
import { Formik, form } from 'formik';
import { TextInput} from '../components/FormLib';
import * as Yup from 'yup';

//icons
import {FiMail,FiLock, FiUser, FiCalendar} from 'react-icons/fi';

//loader
import { ThreeDots} from 'react-loader-spinner';

//auth & redux
import {connect} from 'react-redux';
import { signupUser
 } from '../auth/actions/userActions';
 import { useHistory } from 'react-router-dom';

const Signup =(signupUser) => {
    const history= useHistory();
    return (  
       <div>
        <StyledFormArea>
            <Avatar image={Logo}></Avatar>
            <StyledTitle color={colors.red} size= {30}>Sign Up</StyledTitle>
            <Formik
            initialValues={{
                email:"",
                password: "",
                repeatPassword: "",
                dateOfBirth: "",
                name:""

            }}
            validationSchema={Yup.object({
                    email: Yup.string().email("Invalid email address")
                    .required("Required"),
                    password: Yup.string()
                    .min(8, "Password is too short")
                    .max(30, "Password is too long")
                    .required("Required"),
                    name: Yup.string().required("Required"),
                    dateOfBirth: Yup.date().required("Required"),
                    repeatPassword: Yup.string().required("Required").
                    oneOf([Yup.ref("password")], "Passwords must match")
                })}
            onSubmit={(values, {setSubmitting, setFieldError}) => {
                signupUser(values, history, setFieldError, setSubmitting)
            }}
            >
                {({isSubmitting}) => (
                        <form>
                            <TextInput
                             name="name"
                             type="text"
                             label="Full Name"
                             placeholder="şeyma Yıldırım"
                             icon={<FiUser/>}
                            >
                            </TextInput>
                            <TextInput
                             name="email"
                             type="text"
                             label="Email Address"
                             placeholder="aviteng@example.com"
                             icon={<FiMail/>}
                            >
                            </TextInput>
                            <TextInput
                             name="dateOfBirth"
                             type="date"
                             label="Email Date Of Birth"
                             icon={<FiCalendar/>}
                            >
                            </TextInput>
                            <TextInput
                             name="password"
                             type="password"
                             label="Password"
                             placeholder="*******"
                             icon={<FiLock/>}
                            >
                            </TextInput>
                            <TextInput
                             name="repeatPassword"
                             type="password"
                             label="Repeat Password"
                             placeholder="*******"
                             icon={<FiLock/>}
                            >
                            </TextInput>
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit">Sign Up</StyledFormButton>}
                                {isSubmitting && (
                                    <ThreeDots
                                    type="ThreeDots"
                                    color={colors.red}
                                    height={49}
                                    width={100}>
                                       
                                    </ThreeDots>
                                )}
                            </ButtonGroup>
                        </form>
                    )}
            </Formik>
            <ExtraText>
                Already have an account? <TextLink to="/Login">Login</TextLink> 
            </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved &copy;2022
        </CopyrightText>
       </div> 
    );
};
export default connect(null, {signupUser})(Signup);