import React from 'react';

const Contact = () => {
	return (
			<section id="contact" className="main special">
				<div className="container">
					<div className="content">
						<header className="major">
							<h2>ESTEMOS EN CONTACTO</h2>
						</header>
						<p>Puedo decir que yo disfruto mucho el intercambio cordial de ideas, así como aprender cosas nuevas, puedes enviarme un <a href="mailto:zoleyda@me.com">correo</a> si es de tu interés compartir alguna inquietud sobre el área o trabajar conmigo.</p>
						<ul className="icons">
							<li><a href="https://github.com/zoleyda" target="_blank" title="por si quieres mirar un poco mi código" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
							<li><a href="https://www.linkedin.com/in/zoleydazambrano" title="información ampliada sobre mi experiencia" target="_blank" className="icon alt fa-linkedin"><span className="label">Linkedin</span></a></li>
							<li><a href="https://drive.google.com/file/d/0BwsK2cnveK8LZTU3akItcTVaZUE/view?usp=sharing" title="CV" target="_blank" className="icon alt fa-file-text"><span className="label">CV</span></a></li>
							<li><a href="mailto:zoleyda@me.com" target="_blank" title="contactame :)" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
							<li><a href="https://twitter.com/zoleyda" target="_blank" title="a veces twitteo..." className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>				
						</ul>
						<span className="avatar"><img src="style/images/avatar-zole.png"/></span>
					</div>
				</div>
			</section>
	);
};

export default Contact;