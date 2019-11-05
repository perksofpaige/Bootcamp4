import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding'
import data from './data/data'
import { thisExpression } from '@babel/types';
var listsize = 148;
class App extends React.Component {
  currentlist = this.props.data;
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 100000,
      data: this.currentlist
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addnewbuilding(newbuilding){
    listsize = listsize + 1;
    /*newinput.id = (listsize);
    newinput.code = newbuilding[0];
    newinput.name = newbuilding[1];
    newinput.address = newbuilding[4];*/
  const newinput = {
    id: (listsize),
    code: newbuilding[0],
    name: newbuilding[1],
   coordinates: {
        latitude: parseFloat(newbuilding[2]),
        longitude: parseFloat(newbuilding[3])
    },
    address: newbuilding[4]
  }
    this.currentlist.push(newinput);
  /* this.currentlist[listsize - 1] = this.currentlist[listsize - 1];
    this.currentlist[listsize - 1].code = newbuilding[0];
    this.currentlist[listsize - 1].name = newbuilding[1];
    this.currentlist[listsize - 1].address = newbuilding[4];*/
        this.setState({
      data: this.currentlist
    })
  }

  deletelisting(deletethis){
    console.log(this.currentlist);
    if (deletethis == listsize){
      this.currentlist.pop();
      listsize = listsize - 1;
    }
    else{
    this.currentlist.splice((deletethis - 1), 1)
    listsize = listsize - 1;
    for (var i = (deletethis - 1); i < (listsize); i++){
      this.currentlist[i].id--;
    }
  }
    this.setState({
      data: this.currentlist
    });
    console.log(this.currentlist)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        
          <Search 
        filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                     
                      <b>Code Building</b>
                    </td>
                  </tr>
                  
                  <BuildingList
                    data = {this.state.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              buildinginfo = {this.state.selectedBuilding}
              data = {this.state.data}
              />
            </div>
          </div>
          <AddBuilding
        addnewbuilding = {this.addnewbuilding.bind(this)}
        />
         <RemoveBuilding
        todelete = {this.state.selectedBuilding}
        deletelisting = {this.deletelisting.bind(this)}
         />
         <br>
         </br>
          <Credit />
        </main>
      </div>
    );  
  }
}

export default App;
