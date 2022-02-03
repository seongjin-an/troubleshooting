import { useState } from 'react';

import { createMockCard, checkIsMatched } from '../../utils';
import { commonStyles, pageStyles } from '../../styles';


const MatchPage = () => {
  const [currentCard, setCurrentCard] = useState(createMockCard());
  const [matches, setMatches] = useState([]);

  const next = () => setCurrentCard(createMockCard());
  const like = () => {
    next();

    checkIsMatched().then(({ data: { isMatched } }) => {
      if (isMatched) setMatches((matches) => [...matches, currentCard]);
    });
  };

  return (
    <main style={commonStyles.flexCenter}>
      <section style={pageStyles.pageWrap}>
        <img src='logo.png' alt='logo' style={pageStyles.logo} />
        <MatchCard style={commonStyles.flex1} card={currentCard} />
        <MatchController next={next} like={like} />
        <MatchList matches={matches}/>
      </section>
    </main>
  );
};

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

export default MatchPage;
