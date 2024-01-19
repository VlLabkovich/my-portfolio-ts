import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";

export const Contacts: React.FC = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <StyledForm>
                    <label>Name</label>
                    <StyledInput placeholder={'Example'}/>
                    <label>Email</label>
                    <StyledInput placeholder={'Value'}/>
                    <label>Message</label>
                    <StyledText placeholder={'Hi, i will ...'}/>
                    <StyledButton>
                        <Button btnType={'secondary'} type={'submit'}>Submit</Button>
                    </StyledButton>
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

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`