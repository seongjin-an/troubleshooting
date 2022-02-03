import { Component } from 'react';

import { createMockCard, checkIsMatched } from '../../utils';
import { commonStyles, pageStyles } from '../../styles';

class MatchPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: createMockCard(),
      matches: [],
    };
  }

  render() {
    // edge-case! `matches` 사용 시 3초 내 연속 클릭시 맨 마지막 card 만 로그에 추가됩니다
    // eslint-disable-next-line no-unused-vars
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

    const props = { ...this.state, next, like };
    console.log(props);

    return <MatchPage {...props} />;
  }
}

const MatchPage = ({ matches, currentCard, next, like }) => (
  <main style={commonStyles.flexCenter}>
    <section style={pageStyles.pageWrap}>
      <img src='logo.png' alt='logo' style={pageStyles.logo} />
      <MatchCard style={commonStyles.flex1} card={currentCard} />
      <MatchController next={next} like={like} />
      <MatchList matches={matches}/>
    </section>
  </main>
);

const MatchCard = ({ card: { name, image, age, company, education } }) => (
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

const MatchList = ({ matches }) => (
  <div style={pageStyles.matchLogRoot}>
    {matches.map((matchedCard) => (
      <div key={matchedCard.id}>
        {matchedCard.name} ({matchedCard.age}) also liked your pictur!
      </div>
    ))}
  </div>
);

const MatchController = ({ next, like }) => (
  <div style={pageStyles.matchControllerRoot}>
    <button style={pageStyles.matchButton} onClick={next}>skip</button>
    &nbsp;
    <button style={pageStyles.matchButton} onClick={like}>Like</button>
  </div>
);

export default MatchPageContainer;
