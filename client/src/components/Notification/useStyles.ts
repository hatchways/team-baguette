import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  customBadge: {
    backgroundColor: '#00FF00',
  },
  dropDownContent: {
    position: 'absolute',
    minWidth: '180px',
    // TODO add once navbar is implemented and notification component is moved
    // left: '50%',
    // transform: 'translateX(-50%)',
    zIndex: 1,
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '24rem',
    margin: '25px',
  },
  avatar: {
    width: '4rem',
    height: '4rem',
  },
  description: { fontWeight: 1000, fontSize: 14 },
  title: {
    color: 'gray',
    fontSize: 11,
    marginTop: '-2px',
  },
  date: {
    fontWeight: 1000,
    fontSize: 14,
    marginTop: '8px',
  },
}));
export default useStyles;
