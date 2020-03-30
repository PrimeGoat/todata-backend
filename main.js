/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(entry) {
  return entry.text;
}

const getPriority = function(entry) {
  return entry.priority;
}

const isComplete = function(entry) {
  return entry.complete;
}

const isHighPriority = function(entry) {
  return entry.priority > 1;
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(agenda) {
  let out = [];
  for(entry of agenda) {
    out.push(entry.text);
  }
  return out;
}

const priorities = function(agenda) {
  let out = [];
  for(entry of agenda) {
    out.push(entry.priority);
  }
  return out;
}

const namesAndPriorities = function(agenda) {
  let out = [];

  for(entry of agenda) {
    out.push(entry.text + ' - ' + ((entry.priority == 1) ? 'Low' : 'High'));
  }

  return out;
}

const justNotComplete = function(agenda) {
  return agenda.filter(entry => !entry.complete);
}

const justComplete = function(agenda) {
  return agenda.filter(entry => entry.complete);
}

const priority2Only = function(agenda) {
  return agenda.filter(entry => entry.priority == 2);
}

const priority1Only = function(agenda) {
  return agenda.filter(entry => entry.priority == 1);
}


module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
