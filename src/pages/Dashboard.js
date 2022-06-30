import { StyledButton, ButtonGroup,
StyledFormArea, StyledSubTitle, StyledTitle, Avatar, colors } from "./../components/Styles";

const Dashboard = () => {
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
                <StyledFormArea bg={colors.dark1}>
                    <StyledTitle size={65}> Welcome!</StyledTitle>
                    <ButtonGroup>
                    <StyledButton to ="/">LOGOUT</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
                
            
            </div>
            
            
            
            
        </div>
    );
};
export default Dashboard;