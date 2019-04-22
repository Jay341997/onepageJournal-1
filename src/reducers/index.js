const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          name: action.name,
          date: action.date,
          color: action.color,
          week :action.week,
          eventclass : action.eventclass
        }
      ]
    default:
      return state
  }
}

export default events