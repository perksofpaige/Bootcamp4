import React from 'react';
class RemoveBuilding extends React.Component {
render(){
    const{todelete, deletelisting} = this.props;
    return(
        <button onClick = {() => this.props.deletelisting(todelete)}>
        Delete
        </button>
    );
}
}
export default RemoveBuilding;