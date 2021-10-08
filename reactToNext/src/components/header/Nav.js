	<!-- Start Navbar Area -->
	<div class="navbar-area">
		// <div class="vegan-responsive-nav">
		// 	<Container>
		// 		<div class="vegan-responsive-menu">
		// 			<div class="logo">
		// 				<a href={home.path}>
		// 					<img  src={logo_1} class="white-logo" alt="logo" />
		// 					<img  src={logo_1} class="black-logo" alt="logo" />
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</Container>
		// </div>
		<div class="vegan-nav">
			<Container>
				<Navbar expand="md" variant="light">
					<NavbarBrand href={home.path}>
						<img  src={logo_1} class="white-logo" alt="logo" />
						<img  src={logo_1} class="black-logo" alt="logo" />
					</NavbarBrand>
					<Navbar.Collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
						<ul class="navbar-nav">
							<li class="nav-item">	
                            <a href="index.html" class="nav-link active">
                            Home 
                            <i class="fas fa-chevron-down"></i>
                            </a>
								<ul class="dropdown-menu">
									<li class="nav-item">	
                                    <a href="index.html" class="nav-link active">
                                        Home Default
                                    </a>
									</li>
									<li class="nav-item">	<a href="slider-index.html" class="nav-link">Slider Version</a>
									</li>
								</ul>
							</li>
							<li class="nav-item">	<a href="about.html" class="nav-link">About Us</a>
							</li>
							<li class="nav-item">	<a href="#" class="nav-link">Our Menu <i class="fas fa-chevron-down"></i></a>
								<ul class="dropdown-menu">
									<li class="nav-item">	<a href="menu-1.html" class="nav-link">Menu 1</a>
									</li>
									<li class="nav-item">	<a href="menu-2.html" class="nav-link">Menu 2</a>
									</li>
								</ul>
							</li>
							<li class="nav-item">	<a href="gallery.html" class="nav-link">Gallery</a>
							</li>
							<li class="nav-item">	<a href="#" class="nav-link">Event <i class="fas fa-chevron-down"></i></a>
								<ul class="dropdown-menu">
									<li class="nav-item">	<a href="event.html" class="nav-link">Event</a>
									</li>
									<li class="nav-item">	<a href="blog.html" class="nav-link">Blog</a>
									</li>
									<li class="nav-item">	<a href="single-blog.html" class="nav-link">Blog Details</a>
									</li>
								</ul>
							</li>
							<li class="nav-item">
								<a href="contact.html" class="nav-link">Contact</a>
							</li>
						</ul>
						<div class="other-option">
							<a class="default-btn" href="tel:0802235678">Call to Reservation</a>
						</div>
					</div>
				</Navbar>
			</div>
		</div>
	</div>