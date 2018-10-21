import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    FormADD = (event) => {
        event.preventDefault()
        this.props.ChangeHidden();
        // this.props.ChangeStatusTitle();
    }
    render() {
        return (
            <div>
                {/* Head Menu */}
                <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'black' }}>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(event) => this.FormADD(event)} >ADD LIST</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Change: state.Editstate
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ChangeHidden: () => {
            dispatch({
                type: "CHANGE_STATE"
            })
        },
        ChangeStatusTitle: () => {
            dispatch({
                type: "CHANGE_STATE_TITLE"
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav) 
  