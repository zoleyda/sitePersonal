import React from 'react';

const About = () => {
	return (
			<section id="about" className="main special">
				<div className="container">
					<div className="content">
						<header className="major">
							<h2>Quién soy</h2>
						</header>
						<p>Licenciado en Computación egresada de la <a href="http://www.sirius.une.edu.ve/une/" title="Universidad Nueva Esparta" target="_blank"> UNE.</a></p>
						<p>En mi experiencia laboral he recorrido varias áreas de la informática, desde soporte técnico en TI hasta arquitecto de información para plataformas web. En los últimos años he decido y me ha interesado definirme como Desarrollador y por lo tanto, busco siempre mantenerme actualizada de los últimos estándares de programación, mejorar y apostar por nuevos retos.</p>
					</div>
					<a href="#skills" className="goto-next scrolly">Next</a>
				</div>
			</section>
	);
};

export default About;