import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, buildinginfo} = this.props;
		if ((data[buildinginfo - 1]) && (data[buildinginfo - 1].coordinates)){
		return (
			<div>
				<p>
					{'Address: '}
					{data[buildinginfo - 1].address}
					{', Latitude: '}
					{data[buildinginfo - 1].coordinates.latitude.toString()}
					{', Longitude: '}
					{data[buildinginfo - 1].coordinates.longitude.toString()}
				</p>
			</div>
		);
		}
		else if (data[buildinginfo - 1]){
			return(
			<div>
				<p>
					{' '}
					{data[buildinginfo - 1].address}
				</p>
			</div>
			);
		}
		else {
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
		}
	}
}
export default ViewBuilding;