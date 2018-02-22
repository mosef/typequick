// getLessons actions
export const getLessonsTriggered = 'FETCH_LESSONS_REQUEST_TRIGGERED';
export const getLessonsSuccess = 'FETCH_LESSONS_REQUEST_SUCCESS';
export const getLessonsFailure = 'FETCH_LESSONS_REQUEST_FAILURE';

// startTimer actions
export const startTimerTriggered = 'START_TIMER_REQUEST_TRIGGERED';
export const startTimerSuccess = 'START_TIMER_REQUEST_SUCCESS';
export const startTimerFailure = 'START_TIMER_REQUEST_FAILURE';

// stopTimer actions
export const stopTimerTriggered = 'STOP_TIMER_REQUEST_TRIGGERED';
export const stopTimerSuccess = 'STOP_TIMER_REQUEST_SUCCESS';
export const stopTimerFailure = 'STOP_TIMER_REQUEST_ERROR';

// register actions
export const registerRequestTriggered = 'REGISTER_REQUEST_TRIGGERED';
export const registerRequestSuccess = 'REGISTER_REQUEST_SUCCESS';
export const registerRequestFailure = 'REGISTER_REQUEST_ERROR';

// login actions
export const authRequestTriggered = 'AUTH_REQUEST_TRIGGERED';
export const authRequestSuccess = 'AUTH_REQUEST_SUCCESS';
export const authRequestFailure = 'AUTH_REQUEST_ERROR';

// answerSubmission actions
export const submitRequestSuccessTriggered = 'SUBMIT_REQUEST_TRIGGERED';
export const submitRequestSuccess = 'SUBMIT_REQUEST_SUCCESS';
export const submitRequestSuccessFailure = 'SUBMIT_REQUEST_ERROR';

// challengeForm actions
export const answerWasCorrect = 'ANSWER_WAS_CORRECT';
export const answerWasWrong = 'ANSWER_WAS_INCORRECT';
export const pickNextQuestion = 'PICKING_RANDOM_QUESTION';
export const clearPrev = 'CLEARING_PREVIOUS_STATE';
export const clearState = 'STATE_WAS_CLEARED';
