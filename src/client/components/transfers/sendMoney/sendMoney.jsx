import React, { useState } from "react";
import "../../../styles/components/transfer/sendMoney.scss";

export default function SendMoney(props) {
  const [persons] = useState(props.contactsItem);
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
    <section className="send-money">
      <h4>Send money</h4>
      <div className="send-money__input-con">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => handleChange(e.target.value)}
        />
        <label>or choose from list</label>
      </div>
      <h4>Contacts</h4>
      <div className="send-money__contacts">
        {filterDisplay.map((person, i) => (
          <ul key={i}>
            <li className="send-money__contacts-item">
              <img src={require(`../../../../img/${person.image}`)} alt="" />
              <p>{person.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}
