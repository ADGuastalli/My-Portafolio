"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validate from "../../helpers/herpers";
import { IErrors } from "../../interface/interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserData {
  user_name: string;
  user_email: string;
  message: string;
}

function ContactMail() {
  const [userData, setUserData] = useState<UserData>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const todosLosCamposCompletos = (): boolean => {
    return (
      userData.user_name !== "" &&
      userData.user_email !== "" &&
      userData.message !== ""
    );
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
    setErrors(validate(newUserData, ["user_name", "user_email", "message"]));
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && todosLosCamposCompletos()) {
      emailjs
        .sendForm(
          "service_xszqxlh",
          "template_dvwlsnk",
          form.current,
          "T2_Vw0sS7A68-dQPw"
        )
        .then(
          () => {
            toast.success("Email Enviado Exitosamente", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            toast.error("Error al subir el archivo", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            console.log(error.text);
          }
        );
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold m-10 text-center">
        Queres enviarme un mensajito ?
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Nombre/s y Apellido/s:</label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="user_name"
            id="name"
            onChange={handleInputChange}
          />
          {errors.user_name && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.user_name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="email"
            name="user_email"
            id="email"
            onChange={handleInputChange}
          />
          {errors.user_email && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.user_email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            id="message"
            name="message"
            onChange={handleInputChange}
          />
          {errors.message && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.message}
            </p>
          )}
        </div>
        {!todosLosCamposCompletos() && (
          <p
            style={{
              color: "red",
              fontSize: "15px",
              marginTop: "10px",
              textShadow: "1px 1px 1px black",
            }}
          >
            * Todos los campos son obligatorios
          </p>
        )}
        <div className="flex justify-center mt-4">
          <input
            disabled={!todosLosCamposCompletos()}
            className="disabled:opacity-50 disabled:cursor-not-allowed bg-gray-400 border-none rounded-lg text-black py-4 px-8 text-center no-underline inline-block text-sm cursor-pointer hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactMail;
