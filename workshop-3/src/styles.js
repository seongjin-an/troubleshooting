export const styles = {
  block: { display: 'block', width: '100%' },
  textCenter: { textAlign: 'center' },
  flex: { display: 'flex' },
  flex1: { flex: 1 },
  flexCenter: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  CommentOverlayRoot: {
    zIndex: 10, 
    position: 'fixed',
    right: 0, bottom: 0,
    width: '200px', height: '360px',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    background: 'white',
  },
  AppRoot: {
    zIndex: 10,
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'white',
  },
  MapRoot: { width: '100vw', height: '100vh' },
  CommentList: {
    flex: 1,
    fontSize: '12px',
  }
};
