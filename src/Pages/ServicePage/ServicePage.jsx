import React from "react";
import "./servicePage.scss";
import img1 from "../../images/key.jpg";

const ServicePage = () => {
	return (
		<div className="service-page" id="service">
			<h1 className="service-page-title main-title"> Services </h1>
			<div className="service-page-wrapper">
				<div className="service-box">
					<img src={img1} alt="" className="service-page-img" />
					<div className="service-page-content">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Aspernatur, nobis voluptatem. Enim, distinctio aliquam. Harum quae
						eos consequatur reiciendis, beatae qui hic sit fuga neque
						voluptatibus repellat voluptas cumque atque ea nostrum nobis labore
						repudiandae cupiditate error. Numquam accusantium quis ducimus quasi
						dolores! Molestias neque esse soluta minus excepturi fugit quo
						dolores non sequi ipsa eius rem id nulla magni, enim numquam
						nesciunt sit hic totam! Voluptatem laborum cumque consequatur quos
						consequuntur laudantium nobis eos. Quae aspernatur voluptatibus ad
						unde?
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicePage;
