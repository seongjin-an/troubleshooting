export const commonStyles = {
  flex: { display: 'flex' },
  flex1: { flex: 1 },
  flexCenter: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
};

export const pageStyles = {
  pageWrap: { ...commonStyles.flexColumn, width: '500px', height: '100vh', overflow: 'hidden', },
  logo: { height: '80px', background: '#f3f3f3', objectFit: 'contain' },
  matchButton: {
    width: '48px',
    height:'48px',
    outline: 'none',
    border: '1px solid #b9b9b9',
    borderRadius: '50%',
  },
  matchCardRoot: {
    ...commonStyles.flexColumn,
    height: 'calc(100vh - 280px)',
    overflow: 'hidden',
  },
  matchCardImageWrap: {
    ...commonStyles.flex1,
    overflow: 'hidden',
  },
  matchCardImage: {
    width: '100%',
    height: '100%',
    // overflow: 'hidden',
    objectFit: 'cover',
  },
  matchLogRoot: {
    height: '200px',
    overflow: 'scroll',
  },
  matchControllerRoot: {
    ...commonStyles.flexCenter,
    margin: '16px 0',
  }
}