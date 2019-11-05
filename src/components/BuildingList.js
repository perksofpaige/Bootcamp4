import React from 'react';
class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		var { data, filterText } = this.props;

		var buildingList = data
		.filter(directory => {
			return directory.name.indexOf(filterText) >= 0	
		})	

		.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td onClick = {() => this.props.selectedUpdate(directory.id)}> 
					{directory.name} </td>
				</tr>
			);
		});
		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
