import React, { Component } from 'react';
import './App.css';
// import { noteData } from './firebaseConnect';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';
import Notification from './Notification';
class App extends Component {
  // pushData = () =>{
  //   var connectData= firebase.database().ref('DataForNote/');
  //   connectData.push({
  //     title:'Ghi Chu So 3',
  //     content:"Noi Dung Ghi Chu So 3"
  //   })
  //   console.log('extra succes');
  // }
  // DeleteData = (id)=>{
  //   var connectData = firebase.database().ref('DataForNote/');
  //    connectData.child(id).remove();
  //    console.log("Remove Succes ID: "+id);
  // }
  // addData=(item) =>{
  //   noteData.push(item);
  //   } 
  ShowFormEdit =()=>{    
    if(this.props.Check)   {      
    return ( <NoteForm/> )
    }
  }  
  render() { 
    console.log(this.props);    
    return (
      <div>
        <Nav/>        
        <div className="container">
          <div className="row">
            <NoteList />            
            {
              this.ShowFormEdit()                
            }
             <Notification/>                                   
          </div>
        </div>

      </div>
    );
  }  
}
const mapStateToProps = (state, ownProps) => {
  return {
    Check: state.Editstate,
    isNotification: state.AlertShow
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ChangeForm: () => {
      dispatch({type:"CHANGE_STATE"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)        
