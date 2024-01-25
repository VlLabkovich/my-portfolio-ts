import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contacts: React.FC = () => {
    return (
        <StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <FlexWrapper justify={'center'}>
                    <StyledForm>
                        <span>Name</span>
                        <StyledInput placeholder={'Enter your name'}/>
                        <span>Email</span>
                        <StyledInput placeholder={'Enter your email'}/>
                        <span>Message</span>
                        <StyledText placeholder={'Hi, i will ...'} as={'textarea'}/>
                        <Button width={'532px'} height={'48px'} padding={'12px 20px'} btnType={'secondary'} type={'submit'}>Submit</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
    padding-bottom: 190px;
`

const StyledForm = styled.form`
    max-width: 532px;
    width: 100%;

    span {
        display: block;
        margin: 25px 0 6px;
    }

    textarea {
        resize: none;
        height: 165px;
    }

     input:first-of-type {
        color: ${Theme.colors.first_input};
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
    }
`

const StyledInput = styled.input`
    border: 1px solid ${Theme.colors.accent};
    max-width: 532px;
    width: 100%;
    padding: 15px 0 15px 18px;
    border-radius: 6px;
    border: 1px solid ${Theme.colors.border_input};

    color: ${Theme.colors.text};
    font-family: 'Montserrat',sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
`

const StyledText = styled.textarea`
    max-width: 532px;
    width: 100%;
    padding: 15px 0 0 18px;
    border-radius: 6px;
    border: 2px solid ${Theme.colors.accent};
    margin-bottom: 22px;
    
    color: ${Theme.colors.text};
    font-family: 'Montserrat',sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
`

