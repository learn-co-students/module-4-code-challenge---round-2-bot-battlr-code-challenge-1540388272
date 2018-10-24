import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = (props) => {
  // console.log(props)

  if (!props.botCollection){
    return <p>Loading...</p>
  }

  const mappedBots = props.botCollection.map( bot => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        id={bot.id}
        enlistRobot={props.enlistRobot}
      />
    )
  })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {mappedBots}
    		</div>
  	  </div>
  	);


};

export default BotCollection;
