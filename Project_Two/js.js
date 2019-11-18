
// add text if there is text in the item field add that to the list
document.getElementById('add').addEventListener('click', function () {
    let value = document.getElementById('item').value;

    // empty string = false
    if (value) {
        addItem(value);
    }
});

function addItem (value) {
    addItemToDOM(value);
    document.getElementById('item').value = '';
  
    data.todo.push(value);
    dataObjectUpdated();
  }