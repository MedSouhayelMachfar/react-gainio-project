import React, { useRef } from "react";

import downArrow from "./../../assets/icons/down_arrow.svg";
/* Custom hook */
import useClickOutside from "./../../hooks/useClickOutside";

import styles from "./LanguagesDropdown.module.css";
function LanguagesDropdown() {
  const [isOpenLanguagesDropdown, setIsOpenLanguagesDropdown] =
    React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState("EN");
  const wrapperRef = useRef(null);

  const handleItemClick = (language) => {
    setIsOpenLanguagesDropdown(!isOpenLanguagesDropdown);
    setCurrentLanguage(language);
  };

  useClickOutside(wrapperRef, setIsOpenLanguagesDropdown);
  return (
    <div className={styles["navbar-custom-language-dropdown"]} ref={wrapperRef}>
      <div
        className={styles["navbar-custom-language-dropdown-header"]}
        onClick={() => setIsOpenLanguagesDropdown(!isOpenLanguagesDropdown)}
      >
        <span>{currentLanguage}</span>
        <img
          src={downArrow}
          alt="down arrow for pages dropdown"
          className={styles["animated-arrow"]}
        />
      </div>

      <ul
        className={`${styles["navbar-custom-language-list"]} ${
          isOpenLanguagesDropdown &&
          styles["navbar-custom-language-list-toggle"]
        }`}
      >
        <li onClick={() => handleItemClick("EN")}>EN</li>
        <li
          onClick={() => {
            handleItemClick("FR");
          }}
        >
          FR
        </li>
        <li
          onClick={() => {
            handleItemClick("TN");
          }}
        >
          TN
        </li>
      </ul>
    </div>
  );
}

export default LanguagesDropdown;
