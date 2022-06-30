import { StyledButton, ButtonGroup } from "./../components/Styles";

const Home = () => {
    return (
        <div>
            <div
            style={{
                position: "absolute",
                top:0,
                left:0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display:"flex",
                justifyContent:"flex-start",
            }}
            >
                <ButtonGroup>
                <StyledButton to = "/login">LOGIN</StyledButton>
                <StyledButton to = "/signup">SIGN UP</StyledButton>
                </ButtonGroup>
            
            </div>
            
            
            
            
        </div>
    );
};
export default Home;