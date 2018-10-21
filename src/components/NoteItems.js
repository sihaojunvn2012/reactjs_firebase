import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItems extends Component {
    ActionTwoButton = () =>{
        this.props.ChangEditStatus();       
        this.props.GetEditData(this.props.Note);
        // this.props.ChangeStatusTitle();        
    }
    RemoveData = ()=>{
        
        this.props.GetRemoveData(this.props.Note.Key);
        this.props.TurnOn("Remove '"+this.props.Note.noteTitle+"' Success","danger");
    }    
    render() {
        
        return (
            <div className="card">
                <div className="card-header" role="tab" id="Note">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#NoteList" href={"#number"+this.props.ID} aria-expanded="true" aria-controls="section1ContentId">
                            {this.props.Title}
                        </a>
                    </h5>
                </div>
                <div id={"number"+this.props.ID} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                       {this .props.Content}
                    </div>
                </div>
                <div className="btn-group float-right ">        
                    <button className="btn btn-outline-info" onClick={()=>this.ActionTwoButton()}>Edit</button>
                    <button className="btn btn-outline-secondary" onClick={()=>this.RemoveData()}>Remove</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      EditStatus: state.EditState,     
    }
  }
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      ChangEditStatus: () => {
        dispatch({
            type:"CHANGE_STATE"
        })
      },
      GetEditData: (Items) => {
        dispatch({
            type:"GET_EDIT_DATA",Items        
        })
    },
    GetRemoveData :(Items) =>{
        dispatch({
            type:"REMOVE_DATA",Items

        })
    },
    ChangeStatusTitle: () => {
        dispatch({
            type: "CHANGE_STATE_TITLE"
        })
    },
    TurnOn :(AlertContents,Types)=>{
        dispatch({
            type:"TURN_ON",AlertContents,Types
        })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItems);