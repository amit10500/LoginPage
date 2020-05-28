import { createStore } from 'redux';

const users = [
    {
        name: 'Brad',
        address: 'California',
        typeOfCustomer: 'Retail',
        orderHistory: ['Bulb', 'TubeLight'],
        mobile: 9837098371,
        notes: ''
    },
    {
        name: 'Andrew',
        address: 'philedelphia',
        typeOfCustomer: 'Corporate',
        orderHistory: ['Fan', 'Mouse'],
        mobile: 9837098372,
        notes: ''
    },
    {
        name: 'Amit',
        address: 'Pune',
        typeOfCustomer: "Retail",
        orderHistory: ['keyBoard', 'Mouse'],
        mobile: 9837098373,
        notes: ''
    },
    {
        name: 'Sujit',
        address: 'Pune',
        typeOfCustomer: 'Retail',
        orderHistory: ['BedSheet', 'Pillow'],
        mobile: 9837098374,
        notes: ''
    }
]

function loginReducer(state = users, action) {
    switch (action.type) {
        case 'save_notes':
            return state.map(user => user.mobile !== action.payload.mobile ? user : { ...user, notes: action.payload.notes })
        default: return state
    }
}

let store = createStore(loginReducer);
console.log(store.getState())

store.subscribe(() => console.log('Store Subscribe' + JSON.stringify(store.getState())));


export default store;