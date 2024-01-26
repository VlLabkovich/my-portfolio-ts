import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import emailjs from '@emailjs/browser';
import React, {ElementRef, useRef} from "react";

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_zh5706d', 'template_sizd1je', form.current, 'tVItyV9JUCLRn7nSk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
        return (
            <StyledContacts id={"contacts"}>
                <Container>
                    <SectionTitle>Contact Me</SectionTitle>
                    <FlexWrapper justify={'center'}>
                        <StyledForm ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <StyledInput placeholder={'What’s your name?'} name={'user_name'}/>
                            <label>Email</label>
                            <StyledInput placeholder={'Your email'} name={'email'}/>
                            <label>Message</label>
                            <StyledText placeholder={'Tell me about your project . . .'} as={'textarea'} name={'message'}/>
                            <Button btnType={'secondary'} type={'submit'}>Submit</Button>
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

        label {
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
        font-family: 'Montserrat', sans-serif;
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
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
    `