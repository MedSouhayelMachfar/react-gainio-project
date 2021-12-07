import React, { useContext } from "react";
import { ContextLanguage } from "./../../../context/ContextLanguageWrapper";

import Modal from "../../UI/Modal";
import Logo from "./../../UI/Logo";
import Button from "./../../UI/Button";
import { SocialMediaBar } from "./../../Shared";
import closeBtn from "./../../../assets/icons/cancelBtn.svg";

import styles from "./Login.module.css";
function Login(props) {
    // Getting data form our languages context
    let { data, currentLanguage } = useContext(ContextLanguage);
    data = data.loginContent;

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;
    return (
        <Modal onClose={props.onClose}>
            <div className={styles["login-form"]}>
                <div className={styles["login-form-header"]}>
                    <div className={styles["login-form-header-upper"]}>
                        <Logo />
                        <img
                            src={closeBtn}
                            alt="close button"
                            onClick={props.onClose}
                        />
                    </div>
                    <div className={styles["login-form-header-lower"]}>
                        <h5>{data.heading}</h5>
                        <p>
                            {data.paragraph}{" "}
                            <span
                                onClick={() => {
                                    props.onClose();
                                    props.onOpenRegister();
                                }}
                            >
                                {data.loginLink}
                            </span>
                        </p>
                    </div>
                </div>
                <div className={styles["login-form-section"]}>
                    <form className={rtlClass && styles[rtlClass]}>
                        <div className={styles["form-group"]}>
                            <label>{data.email}</label>
                            <input
                                type="email"
                                placeholder={data.emailPlaceholder}
                            />
                        </div>
                        <div className={styles["form-group"]}>
                            <label>{data.pwd}</label>
                            <input
                                type="password"
                                placeholder={data.pwdPlaceholder}
                            />
                        </div>
                        <div className={styles["form-group-checkbox"]}>
                            <input type="checkbox" />
                            <p>
                                {data.agreePart1} <span>{data.agreePart2}</span>
                                {data.agreePart3}
                            </p>
                        </div>
                        <Button
                            type="button"
                            value={data.registerNowBtn}
                            className={styles["custom-btn"]}
                        />
                    </form>
                    <p>{data.socialMediaHeading}</p>
                    <div className={styles["social-media-wrapper"]}>
                        <SocialMediaBar />
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Login;
