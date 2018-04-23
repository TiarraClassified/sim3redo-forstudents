import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

 function Navbar(props){
    return(
    <section id='nav'>
    {console.log(props)}
    <Link to='/dashboard'><button>Home</button></Link><br/>
    <Link to='/new'><button>New Post</button></Link>
    <p>Username: {props.username}</p>
    <img src={props.picture} alt={props.picture}/>
    <Link to='/'><button>Logout</button></Link>
    </section>
    )
}

function mapStateToProps(state){
    return{
        username: state.username,
        picture: state.picture
    }
}
export default connect(mapStateToProps)(Navbar)