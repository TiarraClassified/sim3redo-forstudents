import React, {Component} from 'react';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            search: ''
        }
    }

    updateSearch(string){
        this.setState({
            search: string
        })
    }

    search(){
        axios.get(`/searchMessages?searchTerm=${this.state.search}`).then(res=>{
            console.log(res.data)
        })
    }

    render(){
        return(
            <section>
                <input placeholder='search' value={this.state.search} onChange={e=>this.updateSearch(e.target.value)}/>
                <button onClick={()=>this.search()}>Search</button>
                <button onClick={()=>this.setState({search: ''})}>Reset</button>
            </section>
        )
    }
}