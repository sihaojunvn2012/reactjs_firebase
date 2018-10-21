import { noteData } from './firebaseConnect';
var redux = require('redux');
const NoteInitialState = {
    Editstate: false,
    Item: {},
    isAdd: false,
    AlertShow: false,
    AlertContent:'',
    Type:''
        
}
const allReducer = (state = NoteInitialState, action) => { 
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.Getitems);
            return state
        case "CHANGE_STATE":
            return { ...state, Editstate: !state.Editstate }
        case "CHANGE_STATE_TITLE":
            return { ...state, isAdd: !state.isAdd }
        case "GET_EDIT_DATA":
            return { ...state, Item: action.Items}
        case "EDIT_DATA":
            noteData.child(action.Getitems.ID).update({
                noteTitle: action.Getitems.NoteTitle,
                noteContent: action.Getitems.NoteContent
            });
            console.log("Du Lieu Can Sua Ma Store Nhan Duoc La:" + JSON.stringify(action.Getitems));
            return { ...state, Item: {} }       
        case "TURN_ON" : 
            return {...state, AlertShow: true,AlertContent:action.AlertContents,Type: action.Types }
        case "TURN_OFF":
            return {...state,AlertShow:false}                
        case "REMOVE_DATA":
            noteData.child(action.Items).remove();
            return state        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    console.log(JSON.stringify(store.getState()));
})

export default store;
