import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1-852x584.jpg"
    },
    {
      name: "Jeff Bezos",
      url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142"
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (personName) => {
    console.log(personName + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;