import React, { Component } from 'react';
import './App.css'

const Ninjas = ({ninjas, deleteNinjas})=>{

        // const { name, age, belt } = this.props
         //  const { ninjas } = this.props;
           const ninjaList = ninjas.map(ninja => {
                return ninja.age>20 ? (
                    <div className="ninja" key={ninja.id}>
                    <div>Name: { ninja.name }</div> 
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                    <button onClick={ ()=>deleteNinjas(ninja.id) }>Delete ninjas</button>
                    <div>------------</div>
              </div> 
                ) : null
                // : null
           }
        )
        //console.log(this.props)


        return(
            <div className = 'ninja-list'>
                { ninjaList }
            </div>
        )
    }



export default Ninjas