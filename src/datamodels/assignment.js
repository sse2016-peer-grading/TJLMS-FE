/**
 * Created by joshoy on 2017/3/27.
 */

import _ from 'lodash';
import moment from 'moment';

import Problem from './problem';

export default class Assignment {

  constructor(initObj) {
    this.id = initObj.id;
    this.name = initObj.name;
    this.begin_at = initObj.begin_at;
    this.end_at = initObj.end_at;
    this.problems = _.map(initObj.problems, p => new Problem(p)) || [];
  }

  getBeginAtMoment() {
    return moment(this.begin_at);
  }

  getEndAtMoment() {
    return moment(this.end_at);
  }

}