import Model, { attr } from '@ember-data/model';

export default class SlidesModel extends Model {
  @attr content;
  @attr html;
  @attr notes;
}
