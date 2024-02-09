import React from "react";
import "./Accordion.css";
import UserContext from "../../UserContext";

const Accordion = ({ activityList, achievementsList }) => {
  const { data } = React.useContext(UserContext);
  function handleClick({ target }) {
    let accordion = target.parentElement.parentElement.parentElement;
    let accordionItens = accordion.querySelectorAll(".accordionItem");
    let accordionItem = target.parentElement.parentElement;

    if (accordionItem.classList.contains("is-active")) {
      accordionItem.classList.remove("is-active");
    } else {
      accordionItens.forEach((item) => {
        item.classList.remove("is-active");
      });
      accordionItem.classList.add("is-active");
    }
  }

  return (
    <div className="accordion">
      <div className="accordionItem">
        <div className="accordionTitle" onClick={handleClick}>
          <h4>{data.journey.card[0].activities.title}</h4>
        </div>
        <div className="accordionContent">
          <ul>
            {activityList &&
              activityList.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="accordionItem">
        <div className="accordionTitle" onClick={handleClick}>
          <h4>{data.journey.card[0].achievements.title}</h4>
        </div>
        <div className="accordionContent">
          <ul>
            {achievementsList &&
              achievementsList.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
