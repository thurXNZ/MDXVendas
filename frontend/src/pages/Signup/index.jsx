import { Link, useRoutes } from "react-router-dom";
import './SignUp.css'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FiEye, FiEyeOff } from "react-icons/fi"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const TgbLogo = () => (
    <div className="logo">
        <Link to="/">
            <span className="logo-1">T</span>
            <span className="logo-2">G</span>
            <span className="logo-3">B</span>
        </Link>
    </div>
)

export default function SignUpPage() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Lógica para validar a senha em tempo real
    const validations = {
        lenght: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[@!$&_]/.test(password),
    }

    const PasswordCriterion = ({ isValid, text }) => (
        <li className={`criterion ${isValid ? 'valid' : ''}`}>
            {isValid ? <FaCheckCircle /> : <FaTimesCircle />}
            <span>{text}</span>
        </li>
    )

    return (
        <div className="container">
            <div className="formWrapper">
                <TgbLogo />
                <h1 className="title">Crie a sua conta. É grátis!</h1>

                <div className="socialLogin">
                    <button className="google">
                        <FcGoogle size={24} />
                    </button>
                    <button className="facebook">
                        <FaFacebookF size={24} />
                    </button>
                </div>

                <div className="separator">OU</div>

                <p className="subtitle">
                    Nos informe alguns dados para que possamos melhorar a sua experiência na TGB
                </p>

                <form>
                    <div className="formGroup">
                        <label htmlFor="cpf">
                            CPF <IoInformationCircleOutline />
                        </label>
                        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="fullname">Nome completo</label>
                          <input type="text" id="fullname" name="fullname" required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="nickname">Como você quer ser chamado(a)?</label>
                        <input type="text" id="nickname" name="nickname" placeholder="Exemplo: João S." />
                        <small>Aparecerá em seu perfil, anúncios e chats.</small>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="birthdate">Data de aniversário</label>
                        <input type="text" id="birthdate" name="birthdate" placeholder="dd/mm/aaaa"/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" required/>
                        <small>Enviaremos um e-mail de confirmação</small>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="password">Senha</label>
                        <div className="passwordWrapper">
                            <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="eyeIcon">{showPassword ? <FiEyeOff/> : <FiEye/>}</button>
                        </div>
                    </div>

                    <div className="passwordCritearia">
                        <p>Para sua segurança, crie uma senha com no mínimo:</p>
                        <ul>
                            <PasswordCriterion isValid={validations.lenght} text='8 ou mais caracteres'/>
                            <PasswordCriterion isValid={validations.uppercase} text='Uma letra maiuscula'/>
                            <PasswordCriterion isValid={validations.lowercase} text='Uma letra minúscula'/>
                            <PasswordCriterion isValid={validations.number} text='Um número'/>
                            <PasswordCriterion isValid={validations.special} text='Um caracter especial (Exemplo: @!$&_)'/>
                        </ul>
                    </div>

                    <button type="submit" className="submitButton">Cadastre-se</button>
                </form>

                <p className="loginLink">Já tem uma conta? <Link to='/signin'>Entrar</Link></p>
            </div>
        </div>
    )
}