// GetLessons actions
export const getLessonsTriggered = 'FETCH_LESSONS_REQUEST_TRIGGERED';
export const getLessonsSuccess = 'FETCH_LESSONS_REQUEST_SUCCESS';
export const getLessonsFailure = 'FETCH_LESSONS_REQUEST_FAILURE';

// StartTimer actions
export const startTimerTriggered = 'START_TIMER_REQUEST_TRIGGERED';
export const startTimerSuccess = 'START_TIMER_REQUEST_SUCCESS';
export const startTimerFailure = 'START_TIMER_REQUEST_FAILURE';

// StopTimer actions
export const stopTimerTriggered = 'STOP_TIMER_REQUEST_TRIGGERED';
export const stopTimerSuccess = 'STOP_TIMER_REQUEST_SUCCESS';
export const stopTimerFailure = 'STOP_TIMER_REQUEST_ERROR';

// Register actions
export const signUpClicked = 'REGISTRATION_WAS_CLICKED';
export const cancelSignUp = 'REGISTRATION_WAS_CANCELED';
export const registerRequestTriggered = 'REGISTER_REQUEST_TRIGGERED';
export const registerRequestSuccess = 'REGISTER_REQUEST_SUCCESS';
export const registerRequestFailure = 'REGISTER_REQUEST_ERROR';

// Login actions
export const authRequestTriggered = 'AUTH_REQUEST_TRIGGERED';
export const authRequestSuccess = 'AUTH_REQUEST_SUCCESS';
export const authRequestFailure = 'AUTH_REQUEST_ERROR';

// Logout actions
export const logout = 'LOGGING_OUT';

// Chart actions
export const getChartDataTriggered = 'GETCHART_DATA_TRIGGERED';
export const getChartDataSuccess = 'GETCHART_DATA_SUCCESS';
export const getChartDataFailure = 'GETCHART_DATA_FAILURE';

// AnswerSubmission actions
export const submitRequestSuccessTriggered = 'SUBMIT_REQUEST_TRIGGERED';
export const submitRequestSuccess = 'SUBMIT_REQUEST_SUCCESS';
export const submitRequestSuccessFailure = 'SUBMIT_REQUEST_ERROR';

// challengeForm actions
export const pickQuestion = 'PICKING_QUESTION';
export const handleData = 'HANDLING_DATA';
export const answerWasCorrect = 'ANSWER_WAS_CORRECT';
export const answerWasWrong = 'ANSWER_WAS_INCORRECT';
export const clearState = 'STATE_WAS_CLEARED';
export const challengeComplete = 'CHALLENGE_COMPLETED';
export const timesUp = 'TIMES_UP';
export const sendResultsTriggered = 'SENDING_RESULTS_TRIGGERED';
export const sendResultsSuccess = 'SENDING_RESULTS_SUCCESS';
export const sendResultsFailure = 'SENDING_RESULTS_FAILURE';
