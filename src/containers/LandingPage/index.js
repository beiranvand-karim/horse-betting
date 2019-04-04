import React, {Component} from "react"
import SearchGame from "../../components/SearchGame"
import config from "../../config"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import schedule from "../../backend/games"
import Game from "../../components/Game"
import game from "../../backend/game"

export class LandingPage extends Component {
   constructor(props) {
      super(props);
      this.mockSchedule = this.mockSchedule.bind(this);
      this.fetchSchedule = this.fetchSchedule.bind(this);
      this.searchGameFormSubmit = this.searchGameFormSubmit.bind(this);
      this.change = this.change.bind(this);
      this.mockGame = this.mockGame.bind(this);
      this.fetchGame = this.fetchGame.bind(this);
      this.expandGame = this.expandGame.bind(this)
   }

   state = {
      data: null,
      loading: false,
      error: null,
      gameType: '',
      gameError: null,
      gameLoading: false,
      gameData: null,
      gameId: null
   };

   mockSchedule() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(schedule), 1000)
      })
   }

   mockGame() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(game), 1000)
      })
   }

   searchGameFormSubmit(e) {
      e.preventDefault();
      window.fetch = this.mockSchedule;
      this.fetchSchedule('V4');
   }

   change(e) {
      this.setState({
         gameType: e.target.value
      })
   };

   expandGame(gameId) {
      this.setState({gameId});
      window.fetch = this.mockGame;
      this.fetchGame(gameId)
   }

   fetchGame(gameId) {
      this.setState({gameLoading: true});
      fetch(`${config.server}/services/racinginfo/v1/api/games/${gameId}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json"
         }
      })
         .then(gameData => {
            if (gameData.status !== 200) {
               this.setState({gameLoading: false});
               this.setState({gameData})
            } else {
               this.setState({gameLoading: false});
               this.setState({gameError: gameData.error})
            }
         })
         .catch(gameError => {
            this.setState({gameLoading: false});
            this.setState({gameError})
         })
   }

   fetchSchedule(gameType) {
      this.setState({loading: true});
      fetch(`${config.server}/services/racinginfo/v1/api/products/${gameType}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json"
         }
      })
         .then(data => {
            if (!data.status) {
               this.setState({loading: false});
               this.setState({data})
            } else {
               this.setState({loading: false});
               this.setState({error: data.error})
            }
         })
         .catch(error => {
            this.setState({loading: false});
            this.setState({error})
         })
   }

   render() {
      const {gameType, error, loading, data, gameData, gameError, gameLoading, gameId} = this.state;
      if (error) {
         return <Error error={error}/>
      }

      if (loading) {
         return <Loading/>
      }

      return <div>
         <SearchGame gameType={gameType} change={this.change} searchGameFormSubmit={this.searchGameFormSubmit}/>
         {
            (data) && (<Game gameId={gameId}
                             gameError={gameError}
                             gameLoading={gameLoading}
                             gameData={gameData}
                             expandGame={this.expandGame}
                             data={data}/>)
         }
      </div>
   }
}

export default LandingPage