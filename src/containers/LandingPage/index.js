import React, {Component} from "react"
import SearchGame from "../../components/SearchGame"
import config from "../../config"
import Error from "../../components/Error"
import Loading from "../../components/Loading"
import games from "../../backend/games"
import Game from "../../components/Game"

export class LandingPage extends Component {
   constructor(props) {
      super(props);
      this.mockBackend = this.mockBackend.bind(this);
      this.fetchData = this.fetchData.bind(this);
      this.searchGameFormSubmit = this.searchGameFormSubmit.bind(this);
      this.change = this.change.bind(this);
      window.fetch = this.mockBackend
   }

   state = {
      data: null,
      loading: false,
      error: null,
      gameId: ''
   };

   mockBackend() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(games), 1000)
      })
   }

   searchGameFormSubmit(e) {
      e.preventDefault();
      this.fetchData('V4');
   }

   change(e) {
      this.setState({
         gameId: e.target.value
      })
   };

   fetchData(gameId) {
      this.setState({loading: true});
      fetch(`${config.server}/services/racinginfo/v1/api/products/${gameId}`, {
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
      const {gameId, error, loading, data} = this.state;
      if (error) {
         return <Error error={error}/>
      }

      if (loading) {
         return <Loading/>
      }

      return <div>
         <h1>landing page</h1>
         <SearchGame gameId={gameId} change={this.change} searchGameFormSubmit={this.searchGameFormSubmit}/>
         {
            (data) && (<Game data={data}/>)
         }
      </div>
   }
}

export default LandingPage