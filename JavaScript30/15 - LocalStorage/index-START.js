

const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = [];

//listen for submit and run addItem function that will take the item value as text and put that item in the items array.
addItems.addEventListener('submit', addItem)

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
//puch item name from input into items array
    items.push(item)
//clear Item Name input fields
    this.reset();
}

function populateList(plates=[], platesList) {
    plates.map((plate, i) => {
        return `
        <label for="">${plate.text}</label>
        `
    }).join('')

}