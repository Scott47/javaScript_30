

const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

//listen for submit and run addItem function that will take the item value as text and put that item in the items array.

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    //puch item name from input into items array
    items.push(item)
    populateList(items, itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    //clear Item Name input fields
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        </li>
          `
    }).join('')
}

function toggleDone(e) {
    //event delegation: we listen for a click and then decide
    if (!e.target.matches('input')) return; //skip this unless it's an input
    const el = e.target
    const index = el.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)

    console.log(el.dataset.index)
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items, itemsList)



