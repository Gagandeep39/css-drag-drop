const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Adding listerner to image
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Added istener to cntainer
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  // Ensures this get executed after previous line
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

// Prevents reset after event was completed
function dragOver(e) {
  e.preventDefault();
}

// Drag event starts
// Shows dotted border on all boxes
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

// Set class o empty as soon as drag complet is completed from one element
// Prevent dotte border ones the drag event as ended
function dragLeave() {
  this.className = 'empty';
}

// Add the 'fill' element inside th container where drop event ccurs
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
