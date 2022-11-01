import {Block} from "shared/classes";
import {Link, Navigation, Sidebar} from "shared/ui";
import {renderDom} from "shared/functions/render-dom";
import {ProfileLayout} from "shared/ui/layouts/profile-layout";
import { ProfileInfoModule } from './modules/profile-info';
import { IProfile } from './types';

class Profile extends Block {
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
  content: 'Назад',
  url: 'chatSelect.html',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const profileInfo = ProfileInfoModule();

const content = new Profile({
  sidebar,
  content: profileInfo,
});

renderDom('#root', content);
