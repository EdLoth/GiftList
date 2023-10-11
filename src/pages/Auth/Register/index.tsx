import { Background, ButtonRegister, Container, ContentForm, FormContent, FormInputAndLabel, LabelLogin, Title } from "./styles";
import { HiMail } from 'react-icons/hi'
import { BsShieldLockFill } from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom";


export function RegisterForm() {
    return (
        <Container>
            <ContentForm id="fadeIn">
                <div className="row" >
                    <Background id="fadeIn" className="col-6" style={{borderRadius: '28px'}}>
                    </Background>
                    <div className="col-6" style={{padding: '80px 20px 80px 20px'}}>
                        <FormContent id="fadeTop">
                            <Title>Registrar-se</Title>
                            <FormInputAndLabel>
                                <FaUser size={16} color={'#eb8a21'} />
                                <input type="text" placeholder="Ex:João da Silva" required />
                            </FormInputAndLabel>
                            <FormInputAndLabel>
                                <HiMail size={18} color={'#eb8a21'} />
                                <input type="email" placeholder="Ex: email@email.com" required />
                            </FormInputAndLabel>
                            <FormInputAndLabel>
                                <BsShieldLockFill size={16} color={'#eb8a21'} />
                                <input type="password" placeholder="Senha" required />
                            </FormInputAndLabel>
                            <ButtonRegister>Registrar-se</ButtonRegister>
                            <LabelLogin>Já possui uma conta?<Link to={'/'}> Faça Login.</Link></LabelLogin>

                        </FormContent>
                    </div>
                </div>
            </ContentForm>
        </Container>
    )
}