import React, { Component } from 'react';
import './App.css';
import Person from './Profile/Profile';   
class App extends Component{

  state = {
    persons:[
      {
        name:"Cristiano",
        age:"35",
        id:"cr7"
      },{
        name:"Memphis",
        age:"27",
        id:"md9"  
      }
    ],
    hiddenProperty:false  
  }
  // switchName = () =>{
  //   if(!this.state.hiddenProperty){
  //     this.setState({
  //       persons:[
  //         {
  //           name:"Cristiano Ronaldo",
  //           age:"34",
  //           id: "cr7"  
  //         },{
  //           name:"Memphis Depay",
  //           age:"28",
  //           id:"md9"  
  //         }
  //       ],
  //       hiddenProperty:true    
  //     });  
  //   }else{
  //     this.setState({
  //       persons:[
  //         {
  //           name:"Cristiano Ronaldo",
  //           age:"34",
  //           id:"cr7" 
  //         },{
  //           name:"Memphis Depay",
  //           age:"28",
  //           id:"md9"  
  //         }
  //       ],
  //       hiddenProperty:false    
  //     });  
  //   }
  // }
  inputChanged = (event, key) =>{
    console.log("Key: "+key);
    console.log(event.target.value);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === key;
    })

    const resultantPerson = {
      ...this.state.persons[personIndex]
    }
    resultantPerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = resultantPerson;


    this.setState({
      persons:persons,
      hiddenProperty:false  
    });
  
  }
  deletePerson = (personIndex) =>{
    console.log("Person to Delete: "+ personIndex);
    const persons = this.state.persons;
    persons.splice(personIndex,1)
    this.setState({persons:persons});
  }
  render(){
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border : '1pz solid blue',
      padding: '8px',
      marginTop :'1%',
      cursor: 'pointer'
    }

    console.log(this.state.persons)
    return (
      <div className="App">
        <h1> Hi, This is my Blog </h1>
        <p> You'll see details about me here! </p>
        <p> I am {Math.ceil((Math.random() * 30)*10)/10} years old</p>
        <div hidden={this.state.hiddenProperty}>
          {this.state.persons.map((person, index)=>{
            return (
                    <Person 
                      click={()=>this.deletePerson(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      nameChange={(event)=>this.inputChanged(event, person.id)}
                    ></Person>
                   )
          })}
          {/* <Person nameChange={this.inputChanged} click={this.switchName} name={this.state.persons[1].name} age={this.state.persons[1].age}/> */}
        </div>
        <button style={style} className="Button">Show Person</button>
      </div>
    );  
  }
}

export default App;
