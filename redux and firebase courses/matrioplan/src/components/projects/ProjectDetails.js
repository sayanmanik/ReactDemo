import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux' 
import { Redirect } from 'react-router-dom';
import firebase from './../../config/fbConfig';


const ProjectDetails = (props) => {
    //const id = props.match.paramas.id;
    //console.log("props", props)
    const { project,auth } = props;
    
    if(!auth.uid){
        return <Redirect to='/signin'/>
    }

    if(project){
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                        <p>{ project.content }</p>
                </div>

                <div className="card-action great lighten-4 grey-text">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>27th August,2020</div>
                </div>
            </div>
        </div>
    )
    }else{
        return(
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }

}

const mapStateToProps = (state,ownProps) => {
    console.log("State",state);
    console.log("Props",ownProps)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project  = projects ? projects[id] : null
    
    return {
        project : project,
        auth : state.firebase.auth 
    }
}

export default compose(
    connect(mapStateToProps),
     firestoreConnect([
         { collection: 'projects' }
     ])
)(ProjectDetails)