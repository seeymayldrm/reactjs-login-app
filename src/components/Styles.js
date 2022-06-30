
import styled from 'styled-components';

//background
import background from './../assets/banner1.png';

//React router
import {Link} from 'react-router-dom';

export const colors ={
    primary:'#fff',
    theme: '#BE185D',
    light1: '#F3F4F6',
    light2: '#E5E7EB',
    dark1: '#1F2937',
    dark2: '#9CA3AF',
    dark3: '#BE185D',
    red: '#DC2626'

}

//Styled components
export const StyledContainer =styled.div`

    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg,rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;

`;

export const StyledTitle =styled.h2`
font-size: ${(props) => props.size}px;
text-align:center;
color: ${(props) => props.color ? props.color: colors.primary};
padding:5px;
margin-bottom:20px
`;

export const StyledSubTitle =styled.p`
font-size: ${(props) => props.size}px;
text-align:center;
color: ${(props) => props.color ? props.color: colors.primary};
padding:5px;
margin-bottom:25px
`;

export const Avatar =styled.div`
width: 300px;
height: 58px;
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
margin: auto;
`;

export const StyledButton = styled(Link)`
    padding: 20px;
    width:300px;
    background-color: transparent;
    font-size: 20px;
    border:3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    margin: 0px 500px  ;
    margin-top: 80px;
    outline:0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.red};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
margin: 20px;
display: flex;
justify-content: space-around;
flex-direction: column;
margin-top: 75px
`;

//Input
export const StyledTextInput =styled.input`
width: 400px;
padding:15px;
padding-left: 45px;
font-size: 18px;
letter-spacing: 1px;
color: ${colors.dark1};
background-color: ${colors.light2};
border:0;
outline:0;
display: block;
margin: 5px auto 10px ;
transition: ease-in-out 0.3s;

${(props)=> props.invalid && `background-color: ${colors.red}; color: {colors.primary};`}

&:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
}
`;

export const StyledLabel =styled.p`
text-align: left;
font-size:15px;
font-weight:bold;
`;

export const StyledFormArea = styled.div`
background-color: ${props => props.bg || colors.light1};
text-align: center;
padding:45px 55px;
margin-right: 550px;
margin-left: 200px;
margin-top: 100px;
`;

export const StyledFormButton =styled.button`
padding: 20px;
    width:300px;
    margin-left: 30px;
    background-color: transparent;
    font-size: 20px;
    border:3px solid ${colors.red};
    border-radius: 25px;
    color: ${colors.red};
    transition: ease-in-out 0.3s;
    outline:0;
    
    &:hover{
        background-color: ${colors.red};
        color: ${colors.primary};
        cursor: pointer;
    }
    `;

    export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
    `;

    export const ExtraText = styled.p`
    font-size:${(props) => props.size}px;
    text-align: center;
    colort: ${(props) => (props.color? props.color : colors.dark2)}
    padding:2px;
    margin-top:10px;
    `;

    export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.red};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
    `;

    //icons
    export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top:35px;
    ${(props) => props.right && `right: 15px; `}
    ${(props) => !props.right && `left: 15px; `}
    `;

    //copyright
    export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.light2};
    `;