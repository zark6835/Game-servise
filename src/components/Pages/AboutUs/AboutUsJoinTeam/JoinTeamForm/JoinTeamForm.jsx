import { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import "./join-team-form.scss";
import {InputForm, JoinTeamSignupSchema} from "../../../../../helpers/form/InputForm";

const JoinTeamForm = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Отримуємо посилання на DOM елемент за допомогою useRef
    const element = elementRef.current;

    // додаємо таймаут до додавання класу
    const addClassTimeout = setTimeout(() => {
      element.classList.add("open");
    }, 10);

    // Прибираємо таймаут при видаленні компонента, щоб уникнути виконання зайвих дій
    return () => {
      clearTimeout(addClassTimeout);
    };
  }, []);

  //функція закриття форми
  const cross = () => {
    // Отримуємо посилання на DOM елемент за допомогою useRef
    const element = elementRef.current;
    // видвляємо клас open
    element.classList.remove("open");
    //робимо setTimeout щоб відпрацювала анімація після чого натискається кнопка з силкою
    setTimeout(() => {
      document.getElementById("link-form").click();
    }, 500);
  };
  //по натисканю на кнопку додавання файлу викликає випадок click у <input type="file"/>
  const handleClick = () => {
    document.getElementById("input_file").click();
  };

  /*const [fileName, setFileName] = useState("");

  //додає у поле назву файлу
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };*/

  // відсилає дані в консоль і очищює її
  const dataSending = (value, {resetForm}) => {
    console.log(value);
    resetForm({value: ''})
  };

  return (
    <section className="team-form" ref={elementRef}>
      <div className="team-form__wrapper">
        <button className="form__cross" alt="" onClick={cross} />
        <Link to="/aboutUs-join-team" id="link-form" />
        <div className="form__content">
          <h3 className="header3">join the team</h3>
          <p className="body">Unity Developer</p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            portfolio: "",
            file: "",
            message: "",
          }}
          validationSchema={JoinTeamSignupSchema}
          onSubmit={dataSending}
        >
          {({ errors, touched, handleChange, values}) => (
            <Form className="form__input">
              <label className="form__input-label">
                <p className="form__input-error">{errors.name && touched.name && errors.name}</p>
                <InputForm
                  name={"name"}
                  className={`form__input-line ${errors.name && touched.name ? 'error' : ''}`}
                  type={"text"}
                  placeholder={"Full Name"}
                  onChange={handleChange}
                  value={values.name}
                />
              </label>
              <label className="form__input-label">
                <p className="form__input-error">{errors.email && touched.email && errors.email}</p>
                <InputForm
                  name={"email"}
                  className={`form__input-line ${errors.email && touched.email ? 'error' : ''}`}
                  type={"email"}
                  placeholder={"Email"}
                  onChange={handleChange}
                  value={values.email}
                />
              </label>
              <label className="form__input-label">
                <p className="form__input-error">{errors.portfolio && touched.portfolio && errors.portfolio}</p>
                <InputForm
                  name={"portfolio"}
                  className={`form__input-line ${errors.portfolio && touched.portfolio ? 'error' : ''}`}
                  type={"text"}
                  placeholder={"Portfolio link"}
                  onChange={handleChange}
                  value={values.portfolio}
                />
              </label>
              <label className="form__input-wrapper">
                <input
                  className="form__input-line"
                  disabled
                  value={values.file}
                  type="text"
                  placeholder="Please Attach your CV File..."
                  name=""
                  id=""
                />
                <InputForm
                  name={"file"}
                  className={"form__input-file"}
                  id="input_file"
                  //onChange={handleFileChange}
                  type={"file"}
                  placeholder={"Portfolio link"}
                  value={values.file}
                />
                <button
                  className="button__green-white"
                  onClick={handleClick}
                  type="button"
                >
                  select file
                </button>
              </label>
              <InputForm
                name={"message"}
                className={"form__input-message"}
                type={"text"}
                placeholder={"Message"}
                onChange={handleChange}
                value={values.message}
              />
              <button className="form__input-button button-form" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default JoinTeamForm;
