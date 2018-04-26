import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPerson(person) {
      alert('you clicked ' + person);
    }
  }
});
