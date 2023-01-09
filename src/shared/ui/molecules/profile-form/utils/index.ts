import {Avatar} from 'shared/ui';
import { Indexed } from 'shared/types';
import { staticUrl } from 'shared/classes';
import profilePicture from '../../../../../../static/images/profilePicture.png';


const mapStateToProfileForm = ({ user }: Indexed) => {
  const avatar = new Avatar({
    source: user && user.avatar ? `${staticUrl}${user.avatar}` : profilePicture,
  });

  return {
    avatar,
  };
};

export default mapStateToProfileForm;
