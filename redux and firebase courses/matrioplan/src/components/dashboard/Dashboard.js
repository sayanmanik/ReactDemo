import React, { Component } from 'react'
import Notifications from './Notification';
import ProjectList from './../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';


class Dashboard extends Component{
    render(){
        //console.log(this.props)
        const { projects,auth } = this.props;
        if(!auth.uid){
            return <Redirect to='/signin'></Redirect>
        }


        console.log("auth", auth);
        //if(!auth.uId) return <Redirect to='/signin'></Redirect>

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={ projects }/>
                    </div>
                        
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                        
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects:  state.project.projects || state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         { collection: 'projects' }
//     ])
// )(Dashboard)


//export default connect(mapStateToProps)(Dashboard)


export default compose(
    firestoreConnect(() => ['projects']),
    connect(mapStateToProps)
    )(Dashboard)