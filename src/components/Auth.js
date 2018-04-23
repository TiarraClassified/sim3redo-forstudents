import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {someverbing} from '../ducks/Reducer';

class Auth extends Component{
    constructor(){
        super()
    }

    newUser(){
        let body={
            un: this.un.value,
            pw: this.pw.value
        }
        axios.post('/newUser', body).then(res=>{
            this.props.someverbing(res.data.int, res.data.username, res.data.pic);
            this.props.history.push('/dashboard');
        })
    }

    login(){
        let body={
            un: this.un.value,
            pw: this.pw.value
        }
        axios.post('/login', body).then(res=>{
            console.log(res.data)
            if (res.data==='nope'){
                alert('You are a nobody.')
            }
            else{
                this.props.someverbing(res.data.int, res.data.username, res.data.pic)
                this.props.history.push('/dashboard')
            }
        })
    }

    render(){
        return(
            <section>
                <input placeholder='username' ref={node=> this.un = node}/>
                <input placeholder='password' ref={node=> this.pw = node}/>
                <button onClick={e=>this.login()}>Login</button>
                <button onClick={e=>this.newUser()}>Register</button>
            </section>
        )
    }
}

export default connect(null,{someverbing} )(Auth)