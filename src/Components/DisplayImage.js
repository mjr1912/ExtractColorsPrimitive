import React, {Component} from "react";
import {ColorExtractor} from 'react-color-extractor';

class DisplayImage extends Component{

	constructor(props){
		super(props);
		this.state = {
			image: null,
			colors: []
		};
	}

	renderSwatches = () => {
		const { colors } = this.state;
		return colors.map((color, id) => {
			return (
				<div
					key = {id}
					style = {{
						backgroundColor: color,
						width: 100,
						height: 100
					}}
				/>
			)
		})
	}

  getColors = colors =>
    this.setState(state => ({ colors: [...colors] }))
		

	onImageChange = event => {
		if(event.target.files && event.target.files[0]){
			let img = event.target.files[0];

			this.setState({
				image: URL.createObjectURL(img)
			});
		}
	};

	render(){

		return (
			<div>
				<div>
					<div>
						{/*<img src = {this.state.image} />*/}
						<h1> Select Image </h1>
						<input type = "file" name ="myImage" onChange={this.onImageChange}/>
					</div>
				</div>
				<ColorExtractor getColors={this.getColors}>
		          <img
		            src={this.state.image}
		            style={{ width: 300, height: 'auto' }}
		          />
		        </ColorExtractor>
		        <div
		          style={{
		            marginTop: 20,
		            display: 'flex',
		            justifyContent: 'center'
		          }}
		        >
		          {this.renderSwatches()}
		        </div>
			</div>
		);
	}

}

export default DisplayImage;

