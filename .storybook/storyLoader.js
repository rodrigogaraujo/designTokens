function loadStories() {
  require('../src/components/Button/Button.stories');
  require('../src/components/Label/Label.stories');
  require('../src/components/Shape/Shape.stories');
  require('../src/components/Card/Card.stories');
}

const stories = [
  '../src/components/Button/Button.stories',
  '../src/components/Label/Label.stories',
  '../src/components/Shape/Shape.stories',
  '../src/components/Card/Card.stories'
];

module.exports = {
  loadStories,
  stories,
};