import useStyles from './useStyles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Settings from '@material-ui/icons/Settings';
import { useState, MouseEvent } from 'react';
import { updateReqs } from '../../helpers/APICalls/requests';
import { ReqValue } from '../../interface/Request';
import { Dispatch, SetStateAction } from 'react';

type MenuProps = {
  ind: number | string;
  eleId: string;
  setDateReqs: Dispatch<SetStateAction<ReqValue[]>>;
  setNextReq: Dispatch<SetStateAction<ReqValue>>;
  selectedDate: Date;
  dateReqs: ReqValue[];
};

const RequestMenu = ({ ind, eleId, setDateReqs, selectedDate, setNextReq, dateReqs }: MenuProps): JSX.Element => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);

  const handleUpdate = (reqId: string, status: string) => {
    updateReqs(reqId, status).then((res) => {
      if (res.hasOwnProperty('message')) {
        const dateReqsCopy = [...dateReqs];
        const foundRequest = dateReqsCopy.map((ele) => ele._id).indexOf(reqId);
        if (status === 'declined') {
          dateReqsCopy[foundRequest].accepted = false;
          dateReqsCopy[foundRequest].declined = true;
        } else {
          dateReqsCopy[foundRequest].accepted = true;
          dateReqsCopy[foundRequest].declined = false;
        }
        const nearestReq = dateReqsCopy.find(
          (ele) => new Date(ele.start).getTime() >= selectedDate.getTime() && ele.accepted,
        );
        nearestReq
          ? setNextReq(nearestReq)
          : setNextReq({
              _id: '-',
              user: {
                username: 'No Accepted Requests',
                _id: '-',
              },
              sitterId: '-',
              accepted: false,
              declined: false,
              dogType: '-',
              end: new Date(),
              paid: false,
              specialNotes: '-',
              start: new Date(),
            });
        setDateReqs(dateReqsCopy);
      } else {
        console.error({ error: 'Update unsuccessful.' });
      }
    });
    setAnchorEl(null);
  };

  const openMenu = (evnt: MouseEvent<SVGSVGElement>) => {
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
