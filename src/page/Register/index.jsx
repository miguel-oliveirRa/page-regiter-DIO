import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
    PersonOutlineOutlined as IconPerson,
    EmailOutlined as IconEmail,
    LockOutlined as IconPassword
} from '@mui/icons-material/';
import { Container, Section, TextContent, FormContainer, Wrapper, Column } from './styles';

const Register = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Container>
                    <Section>
                        <TextContent>
                            <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h1>
                        </TextContent>
                    </Section>
                    <Section>
                        <Column>
                            <h1>Comece agora grátis</h1>
                            <p className='sec' >Crie sua conta e make the change._</p>

                            <FormContainer>
                                <Input lefticon={ <IconPerson/> } placeholder="Nome Completo" />
                                <Input lefticon={ <IconEmail /> } placeholder="E-mail" />
                                <Input lefticon={ <IconPassword /> } placeholder="Password" type="password" />
                            </FormContainer>
                            <Button label="Criar minha conta" variant="secondary" />
                            <TextContent small="secondary" >
                                <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                                <p>Já tenho conta. <a href='noreferrer' className='login' >Fazer login</a>.</p>
                            </TextContent>



                        </Column>
                    </Section>
                </Container>
            </Wrapper>
        </>
    );
}

export default Register;