import React, {Component, useState, useRef} from 'react';

import {createMockCard, checkIsMatched} from '../../utils';
import {commonStyles, pageStyles} from '../../styles';

// class MatchPageContainer extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             currentCard: createMockCard(),
//             matches: [],
//         };
//
//         // this.next = this.next.bind(this);
//         // this.like = this.like.bind(this);
//     }
//
//     // next() {
//     //   this.setState({
//     //     ...this.state,
//     //     currentCard: createMockCard(),
//     //   });
//     // }
//     //
//     // like() {
//     //   this.next();
//     //
//     //   checkIsMatched().then(({ data: { isMatched } }) => {
//     //     if (isMatched) {
//     //       this.setState({
//     //         ...this.state,
//     //         matches: [this.state.currentCard, ...this.state.matches],
//     //       });
//     //     }
//     //   });
//     // }
//
//
//     render() {
//         // const { state: { currentCard, matches }, next, like } = this;
//         // const matchControllerProps = { next, like };
//         const {state: {currentCard, matches}} = this;
//
//
//         const next = () => {
//             this.setState({
//                 ...this.state,
//                 currentCard: createMockCard(),
//             });
//         }
//
//         const like = () => {
//             next();
//
//             checkIsMatched().then(({data: {isMatched}}) => {
//                 if (isMatched) {
//                     this.setState({
//                         ...this.state,
//                         matches: [currentCard, ...this.state.matches],
//                     });
//                 }
//             });
//         }
//         const matchControllerProps = {next, like};
//         // return (
//         //     <main style={commonStyles.flexCenter}>
//         //       <section style={pageStyles.pageWrap}>
//         //         <img src='logo.png' alt='logo' style={pageStyles.logo} />
//         //         <MatchCard style={commonStyles.flex1} card={currentCard} />
//         //         <MatchController {...matchControllerProps} />
//         //         <MatchList matches={matches}/>
//         //       </section>
//         //     </main>
//         // );
//         const props = {currentCard, matches, next, like};
//         return <MatchPage {...props}/>
//     }
// }
const useForceUpdate = () => {
    const [, render] = useState(0);
    return () => render(i=>i+1);
}
const MatchPage = () => {
    const forceUpdate = useForceUpdate();
    const [currentCard, setCurrentCard] = useState(createMockCard())
    const [matches, setMatches] = useState([])
    // const {current: matches} = useRef([])

    const next = () => setCurrentCard(createMockCard());
    const like = () => {
        next();
        checkIsMatched().then(({data: {isMatched}}) => {
            if(isMatched){
                // setMatches([currentCard, ...matches]);
                matches.push(currentCard)
                setMatches(prev => [...prev, currentCard])
                // forceUpdate();
                console.log(matches)
            }
        })
    }
    return (
        <main style={commonStyles.flexCenter}>
            <section style={pageStyles.pageWrap}>
                <img src='logo.png' alt='logo' style={pageStyles.logo}/>
                <MatchCard style={commonStyles.flex1} card={currentCard}/>
                <MatchController next={next} like={like}/>
                <MatchList matches={matches}/>
            </section>
        </main>
    )
}

// class MatchCard extends Component {
//   render() {
//     const { card: { name, image, age, company, education } } = this.props;
//
//     return (
//       <div style={pageStyles.matchCardRoot}>
//         <div style={pageStyles.matchCardImageWrap}>
//           <img style={pageStyles.matchCardImage} src={image} alt='profile' />
//         </div>
//         <div style={commonStyles.flex}>
//           <div style={commonStyles.flex1}>Name: {name}</div>
//           <div style={commonStyles.flex1}>Age: {age}</div>
//         </div>
//         <div style={commonStyles.flex}>
//           <div style={commonStyles.flex1}>Company: {company}</div>
//           <div style={commonStyles.flex1}>Education: {education}</div>
//         </div>
//       </div>
//     );
//   }
// }
const MatchCard = ({card: {image, name, age, company, education}}) => {
    return (
        <div style={pageStyles.matchCardRoot}>
            <div style={pageStyles.matchCardImageWrap}>
                <img style={pageStyles.matchCardImage} src={image} alt='profile'/>
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
    )
}
// class MatchList extends Component {
//   render() {
//     const listItems = this.props.matches.map((matchedCard) => (
//       <div key={matchedCard.id}>
//         {matchedCard.name} ({matchedCard.age}) also liked your pictur!
//       </div>
//     ))
//
//     return (
//       <div style={pageStyles.matchLogRoot}>{listItems}</div>
//     )
//   }
// }
const MatchList = ({matches}) => (
    <div style={pageStyles.matchLogRoot}>
        {matches.map((matchedCard) => (
            <div key={matchedCard.id}>
                {matchedCard.name} ({matchedCard.age}) also liked your pictur!
            </div>
        ))}
    </div>
)

// class MatchController extends Component {
//   render() {
//     return (
//       <div style={pageStyles.matchControllerRoot}>
//         <button style={pageStyles.matchButton} onClick={this.props.next}>skip</button>
//         &nbsp;
//         <button style={pageStyles.matchButton} onClick={this.props.like}>Like</button>
//       </div>
//     );
//   }
// }
const MatchController = ({like, next}) => (
    <div style={pageStyles.matchControllerRoot}>
        <button style={pageStyles.matchButton} onClick={next}>skip</button>
        &nbsp;
        <button style={pageStyles.matchButton} onClick={like}>Like</button>
    </div>
)

export default MatchPage;
