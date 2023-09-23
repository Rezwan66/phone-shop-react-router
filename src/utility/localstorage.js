import swal from "sweetalert";

const getItemsFromLS = () => {
    const items = localStorage.getItem('phones');
    if (items) {
        return JSON.parse(items);
    } else {
        return [];
    }
}

const addToLS = id => {
    const storedItems = getItemsFromLS();
    const exists = storedItems.find(storedId => storedId === id);
    if (!exists) {
        storedItems.push(id);
        localStorage.setItem('phones', JSON.stringify(storedItems));
        swal('Success!', 'Added to favorites!', 'success');
    } else {
        swal("Sorry!", "Already added to favorites!", "error");
    }
}

export { getItemsFromLS, addToLS }