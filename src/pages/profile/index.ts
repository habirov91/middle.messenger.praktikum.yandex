import Block from 'shared/classes/block';
import {Navigation, Sidebar, Link, ProfileLayout} from 'shared/ui';
import { ProfileInfoModule } from './modules/profile-info';
import { IProfile } from './types';

class Profile extends Block<IProfile> {
  constructor(props: IProfile) {
    super(ProfileLayout.template, props);
  }

  render() {
    const { sidebar, content } = this.props;

    return this.compile({
      sidebar,
      content,
    });
  }
}

const link = new Link({
  content: 'Назад к чатам',
  url: '/',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const profileInfo = ProfileInfoModule();

export default new Profile({
  sidebar,
  content: profileInfo,
});
