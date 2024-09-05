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

  const form = useRef<HTMLFormElement>(null);

  const todosLosCamposCompletos = (): boolean => {
    return Object.values(userData).every((value) => value.trim() !== "");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
    setErrors(validate(newUserData, ["user_name", "user_email", "message"]));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && todosLosCamposCompletos()) {
      try {
        await emailjs.sendForm(
          "service_xszqxlh",
          "template_dvwlsnk",
          form.current,
          "T2_Vw0sS7A68-dQPw"
        );
        toast.success("Email Enviado Exitosamente", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
        });
      } catch (error) {
        toast.error("Error al enviar el email", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        console.error(error);
      }
    }
  };

  const renderInputField = (
    id: string,
    name: keyof UserData,
    type: string,
    label: string
  ) => (
    <div>
      <label htmlFor={id} className="text-[#402158] dark:text-[#E2E9FF]">
        {label}
      </label>
      <input
        className="block py-2.5 px-0 w-full text-sm text-[#402158] dark:text-[#E2E9FF] bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        type={type}
        name={name}
        id={id}
        onChange={handleInputChange}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div>
      <h2 className="text-3xl font-bold m-10 text-center text-[#402158] dark:text-[#E2E9FF]">
        ¿Quieres enviarme un mensaje?
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        {renderInputField("name", "user_name", "text", "Nombre/s y Apellido/s")}
        {renderInputField("email", "user_email", "email", "Email")}
        <div>
          <label
            htmlFor="message"
            className="text-[#402158] dark:text-[#E2E9FF]"
          >
            Mensaje:
          </label>
          <textarea
            className="block py-2.5 px-0 w-full text-sm text-[#402158] dark:text-[#E2E9FF] bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            id="message"
            name="message"
            onChange={handleInputChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        {!todosLosCamposCompletos() && (
          <p className="text-red-500 text-sm mt-2">
            * Todos los campos son obligatorios
          </p>
        )}
        <div className="flex justify-center mt-4">
          <input
            disabled={!todosLosCamposCompletos()}
            className="disabled:opacity-50 disabled:cursor-not-allowed m-4 text-xl rounded-full border-2 text-[#e2E9ff] dark:text-[#140e36] border-[#C9bfb5] dark:border-[#7d5683] bg-[#7d5683] dark:bg-[#C9bfb5] px-6 py-2 font-bold uppercase leading-normal transition duration-150 ease-in-out hover:bg-[#402158] dark:hover:bg-[#d0b69b]"
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
