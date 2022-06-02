import React, {useState} from 'react';
import './App.css';
import Logo from './logo.svg'
//import Header from './components/header/Header';
import LeaveCalendar from './components/leave-calendar/LeaveCalendar';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton'


function App() {
  return (
    <div className="App">
      
      <HeaderBar>
        <Button className='menu-button'> <MenuIcon className='menu'></MenuIcon> </Button>
        <a href="/" className="logo">
          <img src={Logo} alt="logo"></img>
        </a>

        <HeaderItem>
          <DropDownMenu/>
        </HeaderItem>
      </HeaderBar>

      <LeaveCalendar/>
      
    </div>

  );
}

function DropDownMenu() {

  function DropDownItem(props){
    return (
      <a href='#' className='remarks-item'>
        <span className='icon-button'> {props.leftIcon} </span>
          {props.children}
        <span className='icon-right'> {props.rightIcon} </span>
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <DropDownItem><p className='remark-text' id='current-day'> CURRENT DAY </p></DropDownItem>
      <DropDownItem> <p className='remark-text' id='leave-taken'> LEAVE :: TAKEN </p></DropDownItem>
      <DropDownItem> <p className='remark-text' id='leave-pending'> LEAVE :: PENDING APPROVAL </p> </DropDownItem>
      <DropDownItem><p className='remark-text' id='leave-approved'> LEAVE :: APPROVED </p> </DropDownItem>
      <DropDownItem> <p className='remark-text' id='holiday'> PUBLIC HOLIDAY </p> </DropDownItem>
    </div>
  )
}

function HeaderBar(props) {
  return (
    <nav className="headerbar">
      <ul className='headerbar-nav'> {props.children}</ul>
    </nav>
  )
}

function HeaderItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className='header-item'>
      <a href='#' className='item' onClick={() => setOpen(!open)}>
        <Button className='remark-button'> Remarks <ArrowDropDownIcon></ArrowDropDownIcon> </Button>
      </a>

      {open && props.children}
    </li>
  )
}

export default App;
