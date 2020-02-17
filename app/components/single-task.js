import Component from '@glimmer/component';

export default
  class SingleTaskComponent extends Component {
  isPinned = false

  @action
  moveUp() {
    this.toggleProperty('isPinned');
  }
}
