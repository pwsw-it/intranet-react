import React from 'react';

import { Grid } from '@material-ui/core';
import Contact   from  "./Contact"
import { connect } from 'react-redux';
import { AppState, Actions, store } from './rdx'
import {ContactsService, ApiContacts, ApiContact } from './api'

type FCProps = {
  rstate? : any,
  index : number
}

class FContacts extends React.Component<FCProps> {

  match = (s : string) => {
    if (this.props.rstate.filter==='') return true;
    return (s.indexOf(this.props.rstate.filter)>=0 ) 
  }


  async getContacts(bindex : number) {
    if (this.props.rstate.branches.length>=bindex)
      ContactsService.getContacts( 
        {bcode: this.props.rstate.branches[bindex].bcode }
        ) 
      .then(
        (res : ApiContacts) => {
          store.dispatch(Actions.setContacts(bindex, res.contacts));
        }
      )        
      .catch( (err : any) => {        
          alert('Błąd odczytu'+JSON.stringify(err) );
         } 
      );
   }   

      

  componentDidMount() {
  }


  render() { 
   if (this.props.rstate.bselected !== this.props.index)
      this.getContacts(this.props.index);
  return (
    <Grid container >
    {this.props.rstate.contacts.map(
         (contact : ApiContact, i : number) => {
             if (this.match(contact.name)) 
             return (
            <Contact 
               key={i}
               id={i}
               nazwisko={contact.name}  
               tel={contact.phone} 
               email={contact.email}   
               link={contact.notes}  
               funkcja={contact.function} /> )
            else return(<></>)
          }
      )
    }
    </Grid>     
  );
  }
}

const mapowanieStanuNaWlasnosc = (state : AppState) => ({
  rstate: state
});

export default connect(mapowanieStanuNaWlasnosc)(FContacts)

