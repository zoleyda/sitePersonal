import React from 'react';

const Header = () => {
	return (
		<section id="header">
			<header className="major">
				<span className="avatar"><img src="style/images/avatar-zole.png" alt="" /></span>
			</header>
			<div className="container">
					<h2>ZOLEYDA ZAMBRANO</h2>
					<p>Soy una desarrolladora Front-End de Caracas, Venezuela quien esta viviendo actualmente en Santiago de Chile.</p>
				<ul className="actions">
					<li><a href="#about" className="button special scrolly">SOBRE MI</a></li>
				</ul>
			</div>
		</section>
	);
};

export default Header;