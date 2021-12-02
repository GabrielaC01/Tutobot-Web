import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Title from './Title';

const kind = 'alumno';
function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

      <div className='navbar'>
            <h1 style={{color:"#fff"}}>
            <Switch>
                <Route exact path='/perfil'>
                    <h1 style={{marginTop:"1rem"}}>PERFIL</h1>
                </Route>
                <Route path='/start'>
                    <h1 style={{marginTop:"1rem"}}>START</h1>
                </Route>
                {/* <Route path='/question'>
                    <h1 style={{marginTop:"1rem"}}>PREGUNTAS</h1>
                </Route> */}
                <Route path='/tutos'>
                    <h1 style={{marginTop:"1rem"}}>TUTORIALES</h1>
                </Route>
                <Route path='/mistutos'>
                    <h1 style={{marginTop:"1rem"}}>MIS TUTORIALES</h1>
                </Route>
                <Route path='/creartutos'>
                    <h1 style={{marginTop:"1rem"}}>CREAR TUTORIAL</h1>
                </Route>
                <Route path='/misSesiones'>
                    <h1 style={{marginTop:"1rem"}}>MIS SESION</h1>
                </Route>
                <Route path='/tutoscreados'>
                    <h1 style={{marginTop:"1rem"}}>TUTORIALES CREADOS</h1>
                </Route>
                {/*<Route exact path='/'>
                    <h1 style={{marginTop:"1rem"}}>HOME</h1>
              </Route>*/}

                
            </Switch>
            </h1>
        </div>

        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
          <Title/>

            {Sidebar.map((item, index) => {
              if(item.kind == kind || item.kind == ''){
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;