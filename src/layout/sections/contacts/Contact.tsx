import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Theme} from "../../../styles/Theme";

export const Contacts: React.FC = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <StyledForm>
                    {/*<FlexWrapper direction={'column'} justify={'center'} align={'flex-start'}>*/}
                        <label>Name</label>
                        <StyledInput placeholder={'Example'}/>
                        <label>Email</label>
                        <StyledInput placeholder={'Value'}/>
                        <label>Message</label>
                        <StyledText placeholder={'Hi, i will ...'}/>
                        <StyledButton type={'submit'}>Submit</StyledButton>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    margin-bottom: 190px;
`

const StyledForm = styled.form`
    max-width: 532px;
    width: 100%;
    margin: 0 auto;
`

const StyledInput = styled.input`
    max-width: 532px;
    width: 100%;
    height: 48px;
`

const StyledText = styled.textarea`
    max-width: 532px;
    width: 100%;
    height: 165px;
`

const StyledButton = styled.button`
    text-align: center;
    margin-top: 22px;
    max-width: 532px;
    width: 100%;
    height: 48px;
    padding: 12px 20px;
    border-radius: 6px;
    background-color: ${Theme.colors.accent};
    color: ${Theme.colors.link};
`