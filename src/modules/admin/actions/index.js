/**
 * Created by joshoy on 2017/3/26.
 */

import { message } from 'antd';
import ApiUtil from 'src/utils/api-util';
import ActionTypes from './types';

export const AT = ActionTypes;

export default class Actions {

  static fetchAssignmentListAsync = () => (dispatch) => {
    const asyncFn = async () => {
      dispatch({
        type: AT.FETCH_ASSIGNMENT_LIST.pending,
      });
      const respObj = await ApiUtil.tokenGet('/api/assignment');
      dispatch({
        type: AT.FETCH_ASSIGNMENT_LIST.success,
        payload: respObj,
      });
      return Promise.resolve();
    };
    return asyncFn();
  };

  /**
   * @param {string} name
   * @param {moment} beginAt
   * @param {moment} endAt
   * @param {bool} visible
   */
  static createAssignmentAsync = (name, beginAt, endAt, visible) => (dispatch) => {
    const asyncFn = async () => {
      dispatch({
        type: AT.CREATE_ASSIGNMENT.pending,
      });
      const respObj = await ApiUtil.tokenPost(
        '/api/manage/create/assignment',
        {
          name,
          begin_at: `${beginAt.format('YYYY-MM-DD')}T00:00:00`,
          end_at: `${endAt.format('YYYY-MM-DD')}T23:59:59`,
          visible,
        },
      );
      if (respObj.code !== 200) {
        message.error(respObj.msg);
        return respObj;
      }
      message.success('Assignment created.');
      dispatch({
        type: AT.CREATE_ASSIGNMENT.success,
        payload: respObj,
      });
      return Promise.resolve();
    };
    return asyncFn();
  };

  /**
   * @param {string} assignmentId
   */
  static fetchAssignmentDetailAsync = assignmentId => (dispatch) => {
    const asyncFn = async () => {
      dispatch({
        type: AT.MANAGE_ASSIGNMENT.pending,
      });
      const respObj = await ApiUtil.tokenGet(`/api/assignment/${assignmentId}`);
      if (respObj.code === 200) {
        dispatch({
          type: AT.MANAGE_ASSIGNMENT.success,
          payload: respObj.data,
        });
      } else {
        message.error(respObj.msg);
        dispatch({
          type: AT.MANAGE_ASSIGNMENT.failed,
          payload: respObj,
        });
      }
      // console.log(respObj);
      return Promise.resolve(respObj);
    };
    return asyncFn();
  };

  /**
   * @param {string} assignmentId
   * @param {number} order
   * @param {string} ptext
   * @param {Array<string>} qtexts
   */
  static createProblemAsync = (assignmentId, order, ptext, qtexts) => (dispatch) => {
    const asyncFn = async () => {
      dispatch({
        type: AT.CREATE_ASSIGNMENT.pending,
      });
      const respObj = await ApiUtil.tokenPost(
        `/api/manage/create/problem/${assignmentId}`,
        {
          order,
          ptext,
          qtexts,
        },
      );
      if (respObj.code === 200) {
        message.success('Create success!');
        dispatch({
          type: AT.CREATE_ASSIGNMENT.success,
          payload: respObj.data,
        });
      } else {
        message.error(respObj.msg);
        dispatch({
          type: AT.CREATE_ASSIGNMENT.failed,
          payload: respObj,
        });
      }
      // console.log(respObj);
      return Promise.resolve(respObj);
    };
    return asyncFn();
  };

  static resetNewProblemCreator = () => ({
    type: AT.INIT_PROBLEM_CREATOR,
  });

  static updateProblemCreatorState = (qNum, pText, qTexts) => ({
    type: AT.UPDATE_PROBLEM_CREATOR,
    payload: {
      qNum,
      pText,
      qTexts,
    },
  });
}