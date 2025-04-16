import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try {
      await axios.post("/user/forgotpassword", data);
      alert("Password reset link sent successfully!");
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #0d0d0d;
          color: #fff;
        }

        .fullscreen-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at center, #111 0%, #000 100%);
        }

        form {
          background-color: #1a1a1a;
          padding: 30px;
          border-radius: 12px;
          width: 100%;
          max-width: 350px;
          border: 1px solid #0ff;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2), 0 0 40px rgba(0, 255, 255, 0.1);
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
          color: #0ff;
          text-shadow: 0 0 5px #0ff, 0 0 10px #0ff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        label {
          display: block;
          margin-bottom: 10px;
          font-weight: bold;
          text-align: center;
          color: #0ff;
          text-shadow: 0 0 3px #0ff;
        }

        input[type="text"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #0ff;
          border-radius: 6px;
          background-color: #000;
          color: #0ff;
          box-shadow: inset 0 0 5px #0ff;
        }

        input[type="text"]::placeholder {
          color: #0ff;
          opacity: 0.6;
        }

        input[type="submit"] {
          width: 100%;
          padding: 12px;
          background-color: #000;
          border: 1px solid #0ff;
          color: #0ff;
          border-radius: 6px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 0 10px #0ff, 0 0 20px #0ff inset;
        }

        input[type="submit"]:hover {
          background-color: #0ff;
          color: #000;
          box-shadow: 0 0 15px #0ff, 0 0 25px #0ff inset;
        }

        @media (max-width: 400px) {
          form {
            padding: 20px;
          }

          h1 {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="fullscreen-container">
        <form onSubmit={handleSubmit(submitHandler)}>
          <h2>Forget Password</h2>
          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Send Reset Link" />
          </div>
        </form>
      </div>
    </>
  );
};
