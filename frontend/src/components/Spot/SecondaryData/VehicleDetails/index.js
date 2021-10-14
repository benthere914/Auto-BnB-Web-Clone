export const VehicleDetails = ({ allData }) => {
	const { data } = allData;
	console.log(123, data);
	return (
		<div>
			
			<div className="spotFeatures">
				<div className="feature">
					<i className="fas fa-clock"></i>
					<div className="featureText">
						<p>Entire Day</p>
						<p>You will have the vehicle for the entire day</p>
					</div>
				</div>

				<div className="feature" a>
					<i className="fas fa-pump-soap"></i>
					<div className="featureText">
						<p>Enhanced Clean</p>
						<p>Each Vehicle is thoroughly inspected and cleaned</p>
					</div>
				</div>

				{data.features.map((e) => (
					<div className="feature">
						<i className="fas fa-star"></i>
						<div className="featureText">
							<p>Bonus Feature</p>
							<p>{e}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
