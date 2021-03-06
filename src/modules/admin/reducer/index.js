/**
 * Auth related reducer
 * @author JoshOY
 * Created on 2017-03-25
 */

import _ from 'lodash';

import Assignment from 'src/datamodels/assignment';
import { AT } from '../actions';

const initState = {
  asyncActionIdsInObserve: [],
  // admin - assignment list
  assignmentList: [],
  assignmentListIsLoading: true,
  // create problem related
  creatingProblemTotalQuestionNum: 1,
  creatingProblemText: '',
  creatingProblemQuestionTexts: [''],
  creatingProblemVisible: true,
  // editing assignment related
  manageAssignmentObj: null,
  // editing problem related
  editingProblem: null,
};

const handleDispatches = {
  [AT.FETCH_ASSIGNMENT_LIST.pending]: state => _.assign({}, state, {
    assignmentListIsLoading: true,
  }),
  [AT.FETCH_ASSIGNMENT_LIST.success]: (state, action) => {
    const resp = action.payload;
    return _.assign({}, state, {
      assignmentListIsLoading: false,
      assignmentList: resp.data,
    });
  },
  [AT.MANAGE_ASSIGNMENT.success]: (state, action) => {
    const data = action.payload;
    return _.assign({}, state, {
      manageAssignmentObj: new Assignment(data),
    });
  },
  [AT.INIT_PROBLEM_CREATOR]: state => _.assign({}, state, {
    creatingProblemTotalQuestionNum: 1,
    creatingProblemText: '',
    creatingProblemQuestionTexts: [''],
  }),
  [AT.UPDATE_PROBLEM_CREATOR]: (state, action) => {
    const { qNum, pText, qTexts, visible } = action.payload;
    return _.assign({}, state, {
      creatingProblemTotalQuestionNum: qNum,
      creatingProblemText: pText,
      creatingProblemQuestionTexts: qTexts,
      creatingProblemVisible: visible,
    });
  },
  [AT.LOAD_EDITING_PROBLEM]: (state, action) => {
    const newEditingProblem = action.payload;
    return _.assign({}, state, {
      editingProblem: newEditingProblem,
    });
  },
  [AT.UPDATE_EDITING_PROBLEM]: (state, action) => {
    const newEditingProblemState = action.payload;
    return _.assign({}, state, {
      editingProblem: newEditingProblemState,
    });
  },
  [AT.UPDATE_EDITING_ASSIGNMENT]: (state, action) => {
    const newEditingAssignmentState = action.payload;
    return _.assign({}, state, {
      manageAssignmentObj: newEditingAssignmentState,
    });
  },
};

/**
 * Export reducer function
 * @param state: last state
 * @param action: dispatched action
 * @return {*}
 */
function reducerFn(state = initState, action) {
  if (
    (typeof action.actionId !== 'undefined') &&
    (_.includes(state.asyncActionIdsInObserve, action.actionId) === false)
  ) {
    // Overdue async action will be ignored
    return state;
  }
  const handler = handleDispatches[action.type || ''] ||
    (stateParam => stateParam);
  return handler(state, action);
}

export default reducerFn;

