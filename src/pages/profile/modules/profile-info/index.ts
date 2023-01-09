import Block from 'shared/classes/block';
import {connect} from 'shared/functions/connect';
import { Link, ContentBlock, Avatar, Modal } from 'shared/ui';
import {Store} from 'shared/store';
import ProfileController from './controller';
import template from './profile-info.tmpl';
import { IProfileInfo } from './types';
import { profileLinks, mapStateToProfile } from './utils';
import profilePicture from '../../../../../static/images/profilePicture.png';

export class ProfileInfo extends Block<IProfileInfo> {
  constructor(props: IProfileInfo) {
    super(template, props);
  }

  render() {
    const { avatar, modal, username, profileFields, links } = this.props;

    const { user } = Store.getState();

    if (!user) {
      ProfileController.getUser();
    }

    return this.compile({
      avatar,
      modal,
      username,
      profileFields,
      links,
    });
  }
}

const profileInfo = connect<IProfileInfo>(mapStateToProfile);

const ProfileInfoHoc = profileInfo(ProfileInfo);

export function ProfileInfoModule(): ProfileInfo {
  const links = profileLinks.map(
    ({ url, content }, index) =>
      new Link({
        url,
        content,
        events:
          index === profileLinks.length - 1
            ? {
                click: ProfileController.logout,
              }
            : undefined,
      }),
  );

  const modal = new Modal({
    content: new ContentBlock({
      title: 'Upload a file',
      content: '',
    }),
    isModalOpen: false,
  });

  const avatar = new Avatar({
    source: profilePicture,
    events: {
      click: () => modal.setProps({ isModalOpen: true }),
    },
  });

  return new ProfileInfoHoc({
    avatar,
    modal,
    links,
    username: '',
    profileFields: [{ label: '', value: '' }],
  });
}
