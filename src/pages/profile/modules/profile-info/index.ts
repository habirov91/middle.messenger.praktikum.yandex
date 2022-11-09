import { Block } from 'shared/classes';
import { Link, Avatar } from 'shared/ui';
import { template } from './profile-info.tmpl';
import { IProfileInfo } from './types';
import { profileLinks, profileData } from './utils';
import profilePicture from '../../../../../static/images/profile-picture.png';

export class ProfileInfo extends Block<IProfileInfo> {
  constructor(props: IProfileInfo) {
    super(template, props);
  }

  render() {
    const { avatar, username, profileFields, links } = this.props;

    return this.compile({
      avatar,
      username,
      profileFields,
      links,
    });
  }
}

export function ProfileInfoModule(): ProfileInfo {
  const links = profileLinks.map(({ url, content }) => new Link({ url, content }));

  const avatar = new Avatar({
    source: profilePicture,
  });

  return new ProfileInfo({
    avatar,
    links,
    username: 'Ильдус',
    profileFields: profileData,
  });
}
