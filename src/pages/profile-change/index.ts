import Block from 'shared/classes/block';
import {connect} from 'shared/functions';
import { ProfileFormModule, Navigation, Sidebar, Link, ProfileLayout } from 'shared/ui';
import { IProfileChange } from './types';
import mapStateToProfileChange from './utils';

class ProfileChange extends Block<IProfileChange> {
  constructor(props: IProfileChange) {
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
  content: 'Назад к профилю',
  url: 'profile',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const profileChange = connect<IProfileChange>(mapStateToProfileChange);

const ProfileChangeHoc = profileChange(ProfileChange);

const passwordForm = ProfileFormModule([], 'profile');

export default new ProfileChangeHoc({
  sidebar,
  content: passwordForm,
});
