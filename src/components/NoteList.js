import React, { Component } from 'react';
import NoteItems from './NoteItems';
import { noteData } from './firebaseConnect';


class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DataFirebase: []
        }
    }

    componentWillMount() {
        noteData.on('value', (notes) => {
            var ArrayData = [];
            notes.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                ArrayData.push({
                    Key: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })

            });
            this.setState(
                {
                    DataFirebase:ArrayData
                }
            )
        });    }

    GetDaTa = () => {
        if (this.state.DataFirebase) {
             return this.state.DataFirebase.map((value,key)=>{
                return(
                <NoteItems ID={key} Title={value.noteTitle} Content={value.noteContent} Note={value}/>
                )
            });            
        }
    }
    render() {
        return (
            <div className="col">
                <div id="NoteList" role="tablist" aria-multiselectable="true">
                    {
                        this.GetDaTa()
                    }                    
                </div>
            </div>
        );
    }
}

export default NoteList;