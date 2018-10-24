import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = (props) => {
console.log(props.botArmy)

const mappedBotArmy = props.botArmy.map( bot => {
  return (
    <BotCard
      key={bot.id}
      bot={bot}
      id={bot.id}
    />
  )
})

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {mappedBotArmy}
          </div>
        </div>
      </div>
    );
};

export default YourBotArmy;
