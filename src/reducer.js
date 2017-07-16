import events from "./events"

let currentDate = new Date();
let initialState = {
    selectedDate: currentDate,
    viewMonth: {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth()
    }
}
export default function CalendarReducer(state = initialState, action) {

    if (action.type === events.SELECTED_DATE_CHANGED) {
        let newState = Object.assign({}, state);
        newState.selectedDate = action.payload;
        return newState;
    }

    if (action.type === events.VIEW_MONTH_CHANGED) {
        let newState = Object.assign({}, state);
        newState.viewMonth.month = action.payload.month;
        newState.viewMonth.year = action.payload.year;
        return newState;
    }

    return state;
}