import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
  matches: stores.matchesStore.matches,
  getMatches: stores.matchesStore.getMatches
}))

@observer
class Match extends Component {

  componentDidMount(){
    const { getMatches } = this.props;
    getMatches();
  }

  render() {

    const { matches } = this.props;

    return (
      <div className="Match">
        <ul>
          { matches.map((e, idx)=>{
            return (
              <li key={idx}>
                { e.name }
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Match;
