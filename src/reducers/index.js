const defaultState = {
  grid : [],
  events : [], 
  info : {}
}
var eventId = -1 ;
const getEventId = ( ) => {
  return ++eventId
}
const getLifeWeek = (birthdate , lifespan ) => {
  let Birthdate = new Date(birthdate)
  let Enddate = new Date(birthdate).setFullYear(Birthdate.getFullYear()+lifespan)
  return getWeeks(Birthdate,Enddate)
}
const getWeeks = (date1,date2) => {
  let weeks = (new Date(date1).getTime() - new Date(date2).getTime()) / (1000*60*60*24*7)
  weeks = Math.round(Math.abs(weeks))
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
  let lifeWeeks = getLifeWeek(data.birthdate,data.lifespan)
  let currentWeek = getWeeks(Date.now(),data.birthdate)

  for(i=0;i<lifeWeeks;++i){
    let gridbox = {
      class : 'eventbox tooltip ',
      color : '',
      events : [],
      tooltiptext : 'week : ' + i + ' \n',
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
      let eventid = getEventId();
      let weekno = getWeeks(newState.info.birthdate,action.payload.date)
      
      //adding event in events array
      let event = {
        id : eventid,
        name : action.payload.name,
        date : action.payload.date,
        color : action.payload.color,
        week : weekno
      } 
      newState.events.push(event);
      console.log(weekno);
      
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


