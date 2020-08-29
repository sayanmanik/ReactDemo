export const createProject = (project) => {
// import { getFirebase } from 'react-redux-firebase';
// import { getFirestore } from 'redux-firestore';
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'Sayan',
            authorLastName : 'Manik',
            authorId: 12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type: 'CREATE_PROJECT', project});
        }).catch((err)=>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
        
    }
}
 