import React, { useState } from "react";
import axios from "axios";
import Loading from "../../Rolling-1s-200px.svg";

import { Link } from "react-router-dom";

import "./Form.css";

const Form: React.FC = () => {
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupations, setOccupations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleOccupationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const occupationValue = event.target.value;
    setOccupations((prevOccupations) => {
      if (prevOccupations.includes(occupationValue)) {
        return prevOccupations.filter((occ) => occ !== occupationValue);
      } else {
        return [...prevOccupations, occupationValue];
      }
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const user = {
        password,
        fullName,
        age,
        gender,
        occupations,
      };
      await axios.post("http://localhost:8080/users", user);

      setIsLoading(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="Load">
          <img src={Loading} alt="Loading" />
        </div>
      ) : (
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Пароль:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Имя и фамилия:
              <input
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Возраст:
              <input type="number" value={age} onChange={handleAgeChange} />
            </label>
          </div>
          <div className="form-group">
            <p>Пол:</p>
            <label>
              Мужской
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
            </label>
            <label>
              Женский
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
            </label>
          </div>
          <div className="form-group">
            <p>Род деятельности:</p>
            <label>
              Менеджер
              <input
                type="checkbox"
                value="manager"
                checked={occupations.includes("manager")}
                onChange={handleOccupationChange}
              />
            </label>
            <label>
              Разработчик
              <input
                type="checkbox"
                value="developer"
                checked={occupations.includes("developer")}
                onChange={handleOccupationChange}
              />
            </label>
            <label>
              Дизайнер
              <input
                type="checkbox"
                value="designer"
                checked={occupations.includes("designer")}
                onChange={handleOccupationChange}
              />
            </label>
          </div>
          <button type="submit">Зарегистрироваться</button>
          <Link to="/login">авторизоваться </Link>
          {isSubmitted ? (
            <div className="result">The user successfully registered!</div>
          ) : (
            ""
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
