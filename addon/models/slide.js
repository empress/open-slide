import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  content: DS.attr(),
  html: DS.attr(),
  notes: DS.attr(),
});
