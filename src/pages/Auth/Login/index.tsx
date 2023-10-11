import { Background, ButtonRegister, Container, ContentForm, FormContent, FormInputAndLabel, LabelLogin, Title } from "./styles";
import { HiMail } from 'react-icons/hi'
import { BsShieldLockFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'

export function LoginForm() {
    return (
        <Container>
            <ContentForm id="fadeIn">
                <div className="row" >
                  
                    <div className="col-6" style={{padding: '80px 20px 80px 20px'}}>
                        <FormContent id="fadeTop">
                            <Title>Entrar na Lista de Presentes</Title>
                            <FormInputAndLabel>
                                <HiMail size={18} color={'#eb8a21'} />
                                <input type="email" placeholder="Ex: email@email.com" required />
                            </FormInputAndLabel>
                            <FormInputAndLabel>
                                <BsShieldLockFill size={16} color={'#eb8a21'} />
                                <input type="password" placeholder="Senha" required />
                            </FormInputAndLabel>
                            <ButtonRegister>Entrar</ButtonRegister>
                            <LabelLogin>Não possui uma conta? <Link to={'/register'}>Registre-se.</Link></LabelLogin>

                        </FormContent>
                    </div>
                    <Background id="fadeIn" className="col-6" style={{borderRadius: '28px'}}>
                    </Background>
                </div>
            </ContentForm>
        </Container>
    )
}