import React, { useState } from "react";
import Contacts from "./contacts/contacts";
import { contactsItem } from "../../../config/data.config";
import "../../../styles/components/transfer/sendMoney.scss";
export default function SendMoney() {
  const [persons] = useState(contactsItem);
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(persons);

  const handleChange = (e) => {
    let oldList = persons.map((person) => {
      return { name: person.name, image: person.image };
    });

    if (e !== "") {
      let newList = [];
      setWord(e);
      newList = oldList.filter((person) => person.name.includes(word));
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(persons);
    }
  };

  return (
    <div className="Send-Money">
      <header>Send money</header>
      <div className="Send-Money__Input-Con">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => handleChange(e.target.value)}
        />
        <p>or choose from list</p>
      </div>

      <header>Contacts</header>
      <div className="Send-Money__Contacts-Con">
        {filterDisplay.map((person, i) => (
          <ul key={i}>
            <li className="Contacts-Item">
              <img
                className="listImg"
                src={require(`../../../../img/${person.image}`)}
                alt=""
              />
              <p>{person.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
