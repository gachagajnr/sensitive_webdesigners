<script>
	import Logo from '$lib/images/logo.png';
	import Design from '$lib/images/wak.jpg';
</script>

<div class="container mx-auto max-w-screen-xl min-h-screen text-center justify-center">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-5xl">
				<h1 class="text-5xl font-bold">Welcome to Nerve Web Solutions</h1>
				<p class="py-6 text-3xl font-light">
					At Nerve Web Solutions, we believe in the power of digital presence. We specialize in
					crafting bespoke websites tailored to your business needs. With a focus on creativity,
					functionality, and user experience, we transform your vision into a captivating online
					reality.
				</p>
			</div>
		</div>
	</div>
	<div class="w-full grid justify-center">
		<div class="grid max-w-5xl text-center w-full justify-center">
			<div class="grid text-center justify-center items-center py-12">
				<div class="flex justify-center">
					<img src={Logo} width="150px" height="150px" alt="logo" class="" />
				</div>
				<h1 class="text-2xl font-light">
					Nerve Web Solutions is a passionate team of web developers, designers, and digital
					enthusiasts dedicated to delivering cutting-edge solutions for businesses worldwide.
					Established with the aim to revolutionize the digital landscape, we bring expertise,
					innovation, and a fresh perspective to every project.
				</h1>
			</div>
			<div class="flex flex-row flex-wrap gap-4 justify-center">
				<div class="card w-80 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title">How We Work</h2>
						<p>
							We prioritize understanding our clients' unique goals, challenges, and target
							audience. By adopting a client-centric approach, we tailor our solutions to meet their
							specific needs and exceed their expectations.
						</p>
					</div>
				</div>

				<div class="card w-80 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title">Our Focus</h2>
						<p>
							Our team of creative designers is committed to pushing the boundaries of web design.
							We strive to create visually stunning websites that not only attract attention but
							also engage users and leave a lasting impression.
						</p>
					</div>
				</div>
				<div class="card w-80 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title">Solutions That Deliver</h2>
						<p>
							We believe that exceptional user experience is paramount to the success of any
							website. Through intuitive navigation, seamless functionality, and engaging content,
							we optimize the user experience to ensure visitors have a positive interaction with
							our clients' websites.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="py-12">
		<h1 class="text-center text-4xl">How We Work</h1>

		<div class="flex flex-row justify-center gap-6 py-6 mx-4">
			<div class="container mx-auto w-3/4 p-2 md:flex hidden">
				<img
					src={Design}
					class="object-cover rounded-lg  "
					alt="how we work"
				/>
			</div>
			<div class=" md:w-full">
				<ul class="steps steps-vertical">
					<li class="step step-primary py-2">
						<div
							class="text-start p-4 shadow-md bg-base-200 rounded-lg hover:-translate-y-1 hover:cursor-pointer hover:bg-base-300 duration-150"
						>
							<h1 class="text-xl">Initial Consultation</h1>
							<p class="p-1 text-pretty">
								We kick off every project with a thorough initial consultation. This is where we sit
								down with you, preferably over a cup of tea, to truly understand your business, your
								goals, and your challenges. We believe that listening is the key to delivering
								tailored solutions that address your unique needs.
							</p>
						</div>
					</li>
					<li class="step step-primary py-2">
						<div
							class="text-start p-4 shadow-md bg-base-200 rounded-lg hover:-translate-y-1 hover:cursor-pointer hover:bg-base-300 duration-150"
						>
							<h1 class="text-xl">Needs Assessment</h1>
							<p class="p-1 text-pretty">
								Once we have a solid understanding of your business and objectives, we conduct a
								comprehensive needs assessment. This involves analyzing your current digital
								presence, identifying pain points, and uncovering opportunities for improvement. By
								delving deep into your requirements, we ensure that our solutions are precisely
								aligned with your goals.
							</p>
						</div>
					</li>
					<li class="step step-primary py-2">
						<div
							class="text-start p-4 shadow-md bg-base-200 rounded-lg hover:-translate-y-1 hover:cursor-pointer hover:bg-base-300 duration-150"
						>
							<h1 class="text-xl">Planning and Preparation</h1>
							<p class="p-1 text-pretty">
								Before diving into development, we invest time in meticulous planning and
								preparation. This involves outlining project specifications, defining milestones,
								and assembling the right team for the job. By setting clear objectives and
								expectations upfront, we ensure a smooth and efficient development process.
							</p>
						</div>
					</li>
					<li class="step step-primary py-2">
						<div
							class="text-start p-4 shadow-md bg-base-200 rounded-lg hover:-translate-y-1 hover:cursor-pointer hover:bg-base-300 duration-150"
						>
							<h1 class="text-xl">Agile Development</h1>
							<p class="p-1 text-pretty">
								We embrace agile development methodologies to ensure flexibility and adaptability
								throughout the project lifecycle. Our iterative approach allows us to respond
								quickly to changes, incorporate feedback, and deliver high-quality results on time
								and within budget. We keep you involved every step of the way, providing regular
								updates and opportunities for collaboration
							</p>
						</div>
					</li>
					<li class="step step-primary py-2">
						<div
							class="text-start p-4 shadow-md bg-base-200 rounded-lg hover:-translate-y-1 hover:cursor-pointer hover:bg-base-300 duration-150"
						>
							<h1 class="text-xl">Continuous Support</h1>
							<p class="p-1 text-pretty">
								Our commitment to your success doesn't end with project delivery. We provide
								continuous support and maintenance to ensure that your solution remains up-to-date,
								secure, and optimized for performance. Whether you need technical assistance,
								updates, or enhancements, our team is always here to help.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<p class="text-2xl">
			By following this structured and collaborative approach, we ensure that every project we
			undertake is a success, delivering tangible results and driving your business forward in the
			digital landscape
		</p>
	</div>
	<h1>How We Work</h1>
	detail our process of working
	<h1>our focus</h1>
	projects we usually work on
	<h1>contact us</h1>
	form
	<h1>inquiries</h1>
</div>
