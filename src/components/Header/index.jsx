import React from 'react';
import Button from '../Button';
import logo from '../../assets/logo-dio.png'
import { Container, Row, Wrapper } from './styles';

const Header = () => {
    return (
            <Wrapper>
                <Container>
                    <Row>
                        <img src={ logo } alt='logo-dio' />
                    </Row>
                    <Row>
                        <a href='noreferrer'  className='home' >Home</a>
                        <Button label="Entrar" />
                        <Button label="Cadastrar" />
                    </Row>
                </Container>
            </Wrapper>
    );
}

export default Header;