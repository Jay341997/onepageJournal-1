export const addEvent = (name,date,color,week,eventclass) => ({
  type: 'ADD_EVENT',
  name,
  date,
  color,
  week,
  eventclass
})
