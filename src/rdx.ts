/*
 Redux (z użyciem redux-compact)
 https://github.com/maciekwawro/redux-compact
*/
import { createStore, Store
        //, applyMiddleware 
       } from 'redux';
import { definition, create, StateOf } from 'redux-compact';
//import logger from 'redux-logger';

export type  AddrState = {
    tab : number;
    filter : string;
};

const appDef = definition<AddrState>()
.setDefault( { 
    tab : 0,
    filter : ''
  })
.addReducers({
  selectTab: (aState : AddrState, newTab: number) => 
   ({...aState, tab: newTab}),
  setFilter : (aState : AddrState, newFilter  : string='') => 
               ({...aState, filter : newFilter }),
});

const { Actions, reduce } = create(appDef);
export { Actions }
export type AppState = StateOf<typeof appDef>;
export const store: Store<AppState> = createStore(  
    reduce,
//    applyMiddleware(logger),
);


/*
import { connect } from 'react-redux';
import { AppState, Actions, store, AddrState } from './rdx'


// połączenie z Redux
// wstrzykiwanie store.pageState do props.rstate
const mapStateToProps = (state : AppState) => ({
  rstate: state
});

export  default connect(mapStateToProps)( ... );

let btnClick = () => {
  store.dispatch(Actions.setFilter(????));
}

<span>{ this.props.rstate.filter }</span>

*/
/*

Error: Could not find "store" in the context of "Connect(WithStyles(Contacts))". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(WithStyles(Contacts)) in connect options.

import { Provider } from 'react-redux'
import { store } from './rdx';

<Provider store={store}>

</Provider>

*/