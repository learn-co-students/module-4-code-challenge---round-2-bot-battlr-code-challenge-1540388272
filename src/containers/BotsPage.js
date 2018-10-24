import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botCollection: [],
    botArmy: []
  }

  componentWillMount() {
    fetch(' https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(robotData =>{
      this.setState({
        botCollection: robotData
      // }, () => console.log(this.state.botCollection))
      })
    })
  }

  enlistRobot = (botID) => {
    const foundRobot = this.state.botCollection.find(robot => {
      return robot.id == botID
    })
    this.setState(previousState => ({
      botArmy: [...previousState.botArmy, foundRobot]
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
        />
        <br />
        <BotCollection
          botCollection={this.state.botCollection}
          enlistRobot={this.enlistRobot}
        />
      </div>
    );
  }

}

export default BotsPage;
