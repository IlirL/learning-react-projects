
import React, {Component} from "react"
import {Navbar} from './components/Navbar'
import {TodoRows} from './components/TodoRows'
export default class App extends Component{
 constructor(props){
   super(props);

   this.state = {
     userName:'Ilir',
     todoItems:[
       {action:'Buy Milk', done:false},
       {action:'Dentist at 5pm', done:false},
       {action:'Go to Gym', done:false},
     ],
     newToDo:""
   };
 }

//  changeStateData = () =>{
//    this.setState({
//         userName:this.state.userName === 'Name1' ? 'Name2' : 'Name1'

//    });
//   };

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? {...item, done: !item.done} :item
      )
      })

  // todoRows = () =>
  //   this.state.todoItems.map((item) =>(
  //     <tr key = {item.action}>
  //       <td>{item.action}</td>
  //       <td>
  //         <input type="checkbox" checked = {item.done} onChange = {()=>this.toggleDone(item)} />
  //       </td>
  //     </tr>
  //   ))

      todoRows = () => this.state.todoItems.map((item)=><TodoRows key = {item.action} item = {item} callback = {this.toggleDone} />)

      updateValue = (event) =>{
        this.setState({newToDo:event.target.value});
      }

      newToDo = (event) =>{
        this.setState({
          todoItems:[
            ...this.state.todoItems,
            {action:this.state.newToDo, done:false},
          ],
          newToDo:''
        });
      }
  render = () => (
    <div className="container">
      <div className="row">
          <Navbar name = {this.state.userName} />
<div className="col-12">
  <input className = "form-control" value = {this.state.newToDo} onChange = {this.updateValue}/>
  <button className="btn btn-primary" onClick = {this.newToDo}>Add</button>

</div>

<div className="col-12">
  <table className="table">
    <thead>
      <tr>
        <th>Task</th>
        <th>Complete</th>
      </tr>
    </thead>
    <tbody>{this.todoRows()}</tbody>
  </table>
</div>
        
      </div>
    </div>
  )
}