import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteTitle: '',
            noteContent: '',
            id:''
        }
    }
    componentWillMount = () => {
        if (this.props.Getitems) {
            this.setState({
                noteTitle: this.props.Getitems.noteTitle,
                noteContent: this.props.Getitems.noteContent, 
                id:this.props.Getitems.Key             
            });
        }
    }
        
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }   
    EditFormOrAdd = (title, content) => {       
        if(this.state.id){            
            var Object ={};
            Object.NoteTitle = this.state.noteTitle;
            Object.NoteContent = this.state.noteContent;
            Object.ID=this.state.id;
            this.props.EditData(Object);
            this.props.TurnOn("Edit content success","info");        

        }
        else {
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            //    item = JSON.stringify(item);        
            this.props.addDataStore(item);            
            this.props.TurnOn("Add content success","info");
            
        }
        this.props.ChangEditStatus();           
    }
    ChangeTitle =()=>{
        if(this.props.ChangeStateTitle === true){
            return (
                <h3> ADD</h3>
            )          

        }
        else {
            return (
                <h3> EDIT</h3>
            )          
        }

    }
    render() {

        return (

            <div className="col-4">
                     <h3> ADD OR EDIT NOTE</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Title Note</label>
                        <input defaultValue={this.props.Getitems.noteTitle} onChange={(event) => this.isChange(event)} type="text" name="noteTitle" id="noteTitle" className="form-control" placeholder="Title Note" aria-describedby="helpId" />
                        <small id="helpNoteTitleId" className="text-muted">Fill in title note</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteCotent">Content Note</label>
                        <input defaultValue={this.props.Getitems.noteContent} onChange={(event) => this.isChange(event)} type="text" name="noteContent" id="noteContent" className="form-control" placeholder="Content Note" aria-describedby="helpId" />
                        <small id="helpContentId" className="text-muted">Fill in title note</small>
                    </div>
                    <button onClick={() => this.EditFormOrAdd(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Test: state.Editstate,
        Getitems: state.Item,       
        ChangeStateTitle : state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (Getitems) => {
            dispatch({ type: "ADD_DATA",Getitems })

        },
        EditData : (Getitems)=>{
            dispatch({
                type:"EDIT_DATA",
                Getitems
            })
        },
        ChangEditStatus: () => {
            dispatch({
                type:"CHANGE_STATE"
            })
          },
        TurnOn :(AlertContents,Types)=>{
            dispatch({
                type:"TURN_ON",AlertContents,Types
            })
        },
        TurnOff :()=>{
            dispatch({
                type:"TURN_OFF"
            })
        },
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)        
