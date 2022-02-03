import { Component } from 'react';

import { createMockCard, checkIsMatched } from '../../utils';
import { commonStyles, pageStyles } from '../../styles';

class MatchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: createMockCard(),
      matches: [],
    };
  }

  render() {
    const { state: { currentCard, matches } } = this;

    const next = () => {
      this.setState({
        ...this.state,
        currentCard: createMockCard(),
      });
    };
    const like = () => {
      next();
  
      checkIsMatched().then(({ data: { isMatched } }) => {
        if (isMatched) {
          this.setState({
            ...this.state,
            matches: [currentCard, ...this.state.matches],
          });
        }
      });
    };

    const matchControllerProps = { next, like };

    return (
      <main style={commonStyles.flexCenter}>
        <section style={pageStyles.pageWrap}>
          <img src='logo.png' alt='logo' style={pageStyles.logo} />
          <MatchCard style={commonStyles.flex1} card={currentCard} />
          <MatchController {...matchControllerProps} />
          <MatchList matches={matches}/>
        </section>
      </main>
    );
  }
}

class MatchCard extends Component {
  render() {
    const { card: { name, image, age, company, education } } = this.props;

    return (
      <div style={pageStyles.matchCardRoot}>
        <div style={pageStyles.matchCardImageWrap}>
          <img style={pageStyles.matchCardImage} src={image} alt='profile' />
        </div>
        <div style={commonStyles.flex}>
          <div style={commonStyles.flex1}>Name: {name}</div>
          <div style={commonStyles.flex1}>Age: {age}</div>
        </div>
        <div style={commonStyles.flex}>
          <div style={commonStyles.flex1}>Company: {company}</div>
          <div style={commonStyles.flex1}>Education: {education}</div>
        </div>
      </div>
    );
  }
}
class MatchList extends Component {
  render() {
    const listItems = this.props.matches.map((matchedCard) => (
      <div key={matchedCard.id}>
        {matchedCard.name} ({matchedCard.age}) also liked your pictur!
      </div>
    ))

    return (
      <div style={pageStyles.matchLogRoot}>{listItems}</div>
    )
  }
}

class MatchController extends Component {
  render() {
    return (
      <div style={pageStyles.matchControllerRoot}>
        <button style={pageStyles.matchButton} onClick={this.props.next}>skip</button>
        &nbsp;
        <button style={pageStyles.matchButton} onClick={this.props.like}>Like</button>
      </div>
    );
  } 
}

export default MatchPage;
