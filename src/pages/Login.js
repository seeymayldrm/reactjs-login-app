
import{StyledTextInput,StyledFormButton, Avatar, StyledFormArea, StyledLabel, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from  './../components/Styles'

import Logo from "./../assets/logo.png"
//formik
import { Formik, form } from 'formik';
import { TextInput} from '../components/FormLib';
import * as Yup from 'yup';

//icons
import {FiMail,FiLock, FiLoader} from 'react-icons/fi';

//loader
import { ThreeDots} from 'react-loader-spinner';

//auth & redux
import {connect} from 'react-redux';
import { loginUser
 } from '../auth/actions/userActions';
 import { useHistory } from 'react-router-dom';

const Login =({loginUser}) => {
    const history = useHistory();
    return (  
       <div>
        <StyledFormArea>
            <Avatar image={Logo}></Avatar>
            <StyledTitle color={colors.red} size= {30}>Login</StyledTitle>
            <Formik
            initialValues={{
                email:"",
                password: "",
            }}
            validationSchema={Yup.object({
                    email: Yup.string().email("Invalid email address")
                    .required("Required"),
                    password: Yup.string()
                    .min(8, "Password is too short")
                    .max(30, "Password is too long")
                    .required("Required"),
                })}
            onSubmit={(values, {setSubmitting, setFieldError}) => {
                console.log(values);
                loginUser(values, history, setFieldError, setSubmitting);
            }}
            >
                {({isSubmitting}) => (
                        <form>
                            <TextInput
                             name="email"
                             type="text"
                             label="Email Address"
                             placeholder="aviteng@example.com"
                             icon={<FiMail/>}
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
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit">Login</StyledFormButton>}
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
                New Here? <TextLink to="/signup">Signup</TextLink> 
            </ExtraText>
        </StyledFormArea>
        <CopyrightText>
            All rights reserved &copy;2022
        </CopyrightText>
       </div> 
    );
};
export default connect(null, {loginUser})(Login);