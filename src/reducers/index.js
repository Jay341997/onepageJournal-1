const defaultState = {
  grid : [],
  events : [], 
  info : {}
}
var eventId = -1 ;
const getEventId = ( ) => {
  return ++eventId
}
const getWeeks = (date,birthdate) => {
  let newDate = new Date(date)
  let Birthdate = new Date(birthdate)
  let weeks = (newDate.getFullYear() - Birthdate.getFullYear())*52
  Birthdate.setFullYear(newDate.getFullYear())
  weeks +=  Math.floor((newDate.getTime() - Birthdate.getTime())/(1000*60*60*24*7))
  return weeks
}
const generateBasicState = (data) => {
  let basicState = {
    grid : [],
    events : [],
    info : data
  }
  //Generating grid 
  let i;
  let lifeWeeks = data.lifespan*52;
  basicState.info.lastweek = lifeWeeks
  let currentWeek = getWeeks(Date.now(),data.birthdate)

  for(i=0;i<lifeWeeks;++i){
    let gridbox = {
      class : 'eventbox tooltip ',
      color : '',
      events : [],
      tooltiptext : 'week : ' + i + ' \n',
    }
  
    if(i==currentWeek){
      gridbox.class += 'present '
    }
    if(i<currentWeek){
      gridbox.class += 'past '
    }
    else if(i>currentWeek){
      gridbox.class += 'future '
    }
    

    if(i%52 === 0){
      gridbox.class += 'birthday '
      if(i<currentWeek){
        gridbox.tooltiptext += 'you became ' + i/52 + '\n'
      }
      else{
        gridbox.tooltiptext += 'you will be ' + i/52 + '\n'
      }
    }
    basicState.grid.push(gridbox)
  }

  return basicState
}
const events = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      let newState = {...state}
      if(state === defaultState){
        console.log('complete registration');
        return state
      }
      let weekno = getWeeks(action.payload.date,newState.info.birthdate)
      if(weekno >= state.info.lastweek || weekno < 0 ){
        console.log('haha you cant hack me')
        return state
      }
      //adding event in events array
      let event = {
        id : getEventId(),
        name : action.payload.name,
        date : action.payload.date,
        color : action.payload.color,
        week : weekno
      } 
      newState.events.push(event);
      console.log('event added', event)
      //updating gridbox based on the event 
      let gridbox = newState.grid[weekno]
      gridbox.events.push(eventId);
      return newState
    case 'CREATE_GRID':
      const basicState = generateBasicState(action.payload)
      return basicState
    default:
      return state
  }
}
export default events


