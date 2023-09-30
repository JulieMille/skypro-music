import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../../App'

export default function AuthPage({ setUser, isLoginMode = false, setIsLoggedin }) {
  const [error, setError] = useState(null);
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    if (validCheck()) {
        setIsDisabled(true);
    fetch("https://skypro-music-api.skyeng.tech/user/login/", {
      method: "POST",
      body: JSON.stringify({
    email: email,
    password: password,
  }),
  headers: {
    "content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    const {detail} = json
    console.log(detail);
    if(detail) {
        setError(detail);
    }
    if (!detail) {
      localStorage.setItem("user", JSON.stringify(json));
      setIsLoggedin(true);
      setUser(json);
      navigate("/");
    }
  })
  .catch((error) => console.log(error, "worked"))
  .finally(() => setIsDisabled(false))
  }
  };

  const validCheck = () => {
    if (!email) {
        setError("Введите почту");
        return false
    }
    if (!password) {
        setError("Введите пароль");
        return false
    }
    if (repeatPassword && (password !== repeatPassword)) {
        setError("Пароли не совпадают");
        return false
    }
    return true
  }

  const handleRegister = async () => {
    if (validCheck()) {
        setIsDisabled(true);
    fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
  method: "POST",
  body: JSON.stringify({
    email: email,
    password: password,
    username: email,
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
  },
})
  .then((response) => {
    return response.json()
})
  .then((json) => {
    console.log(json)
    const {email, password, username} = json
    console.log(email, password, username);
    let string = ""
    if(Array.isArray(email)) {
        email.map((item) => {
            string = string + item + "\n";
        })
    }
    if(Array.isArray(password)) {
        password.map((item) => {
            string = string + item + "\n";
        })
    }
    if(Array.isArray(username)) {
        username.map((item) => {
            string = string + item + "\n";
        })
    }
    setError(string || null);
    if (!string) {
        navigate("/login");
    }
    })
  .catch((error) => console.log(error, "worked"))
  .finally(() => setIsDisabled(false))
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);



  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isDisabled} onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton  disabled={isDisabled} onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}