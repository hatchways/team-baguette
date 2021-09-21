import useStyles from './useStyles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Settings from '@material-ui/icons/Settings';
import { useState, MouseEvent } from 'react';
import { getRequests, updateReqs } from '../../helpers/APICalls/requests';
import { ReqValue } from '../../interface/Request';
import { Dispatch, SetStateAction } from 'react';

type MenuProps = {
  ind: number | string;
  eleId: string;
  setDateReqs: Dispatch<SetStateAction<ReqValue[]>>;
  setNextReq: Dispatch<SetStateAction<ReqValue>>;
  selectedDate: Date;
};

const RequestMenu = ({ ind, eleId, setDateReqs, selectedDate, setNextReq }: MenuProps): JSX.Element => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

  const handleUpdate = (reqId: string, status: string) => {
    updateReqs(reqId, status);
    setAnchorEl(null);
    getRequests().then((data) => {
      setDateReqs(data);
      if (data) {
        const nearestReq = data.find((ele) => new Date(ele.start).getTime() >= selectedDate.getTime() && ele.accepted);
        nearestReq ? setNextReq(nearestReq) : null;
      }
    });
  };

  const openMenu = (evnt: MouseEvent<SVGSVGElement>) => {
    console.log(evnt.currentTarget);
    setAnchorEl(evnt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Settings focusable key={ind} className={classes.iconSettings} onClick={openMenu} />
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleUpdate(eleId, 'accepted')}>Accept</MenuItem>
        <MenuItem onClick={() => handleUpdate(eleId, 'declined')}>Deny</MenuItem>
      </Menu>
    </>
  );
};

export default RequestMenu;
