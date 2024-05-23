import React, { useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o9sycbm", "template_iunixjn", form.current, {
        publicKey: "-PbVKxFtW9pdwmAi7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.elipse}></div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Lets talk</h1>
        </div>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your name" />
          <input type="email" name="user_email" placeholder="Your email" />
          <textarea name="message" placeholder="What do you have in mind?" />
          <input type="submit" value="Send" className={styles.sendEmail} />
        </form>
      </div>
    </section>
  );
};
