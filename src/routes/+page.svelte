<script>
	import Logo from '$lib/images/logo.png';
	import Design from '$lib/images/dren.png';
</script>

<div class="container mx-auto max-w-screen-xl  text-center justify-center">
	<div class="hero min-h-screen">
		<div class="hero-content flex-col lg:flex-row-reverse">
			 
			<img src={Design} alt="Nerves"  class="max-w-xl lg:flex hidden"/>
			<div class="text-center lg:text-center p-6">
				<h1 class="text-4xl font-bold text-secondary">Welcome to Nerves Web Solutions</h1>
				<p class="p-6 text-xl text-pretty">
					At Nerves Web Solutions, we believe in the power of digital presence. We specialize in
					crafting bespoke websites tailored to your business needs. With a focus on creativity,
					functionality, and user experience, we transform your vision into a captivating online
					reality.
				</p>
				<div class="flex flex-row justify-center gap-2">
					<button class="btn btn-info">Get A Free Quote</button>
					<button class="btn btn-secondary text-white">View Completed Projects</button>
				</div>
			</div>
		</div>
	</div>

	<div class="  grid justify-center bg-base-100 shadow-2xl rounded-lg p-12">
		<div class="grid max-w-5xl text-center w-full justify-center gap-6">
			<div class="py-2">
				<h1 class="text-4xl font-light text-info">
					Passionate enthusiasts dedicated to delivering cutting-edge solutions for businesses
					worldwide.
				</h1>
			</div>
			<div class="flex flex-row flex-wrap gap-4 justify-center">
				<div class="card w-80 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title text-primary">How We Work</h2>
						<p class="text-secondary">
							We prioritize understanding our clients' unique goals, challenges, and target
							audience. By adopting a client-centric approach, we tailor our solutions to meet their
							specific needs and exceed their expectations.
						</p>
					</div>
				</div>

				<div class="card w-80 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title text-primary">Our Focus</h2>
						<p class="text-secondary">
							Our team of creative designers is committed to pushing the boundaries of web design.
							We strive to create visually stunning websites that not only attract attention but
							also engage users and leave a lasting impression.
						</p>
					</div>
				</div>
				<div class="card w-80 bg-neutral text-neutral-content">
					<div class="card-body items-center text-center">
						<h2 class="card-title text-primary">Solutions That Deliver</h2>
						<p class="text-secondary">
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

	<div class="grid justify-center items-center mt-12">
		<div class=" grid justify-center">
			<h1 class="text-center text-4xl py-4 text-primary">How We Work</h1>
			<div class="max-w-4xl">
				<ul class="timeline timeline-vertical">
					<li>
						<div class="timeline-start border border-info timeline-box">
							<h1 class="text-xl text-secondary">Initial Consultation</h1>

							We kick off every project with a thorough initial consultation. This is where we sit
							down with you, preferably over a cup of tea, to truly understand your business, your
							goals, and your challenges. We believe that listening is the key to delivering
							tailored solutions that address your unique needs.
						</div>
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 text-primary"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<hr class="bg-accent" />
					</li>
					<li>
						<hr class="bg-accent" />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 text-primary"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<div class="timeline-end timeline-box border border-info">
							<h1 class="text-xl text-secondary">Needs Accessment</h1>

							Once we have a solid understanding of your business and objectives, we conduct a
							comprehensive needs assessment. This involves analyzing your current digital presence,
							identifying pain points, and uncovering opportunities for improvement. By delving deep
							into your requirements, we ensure that our solutions are precisely aligned with your
							goals.
						</div>
						<hr class="bg-secondary" />
					</li>
					<li>
						<hr class="bg-secondary" />
						<div class="timeline-start border border-secondary timeline-box">
							<h1 class="text-xl text-secondary">Planning & Preparation</h1>

							Before diving into development, we invest time in meticulous planning and preparation.
							This involves outlining project specifications, defining milestones, and assembling
							the right team for the job. By setting clear objectives and expectations upfront, we
							ensure a smooth and efficient development process.
						</div>
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 text-primary"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<hr class="bg-info" />
					</li>
					<li>
						<hr class="bg-info" />

						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
						<div class="timeline-end border border-accent timeline-box">
							<h1 class="text-xl text-info">Agile Development</h1>

							We embrace agile development methodologies to ensure flexibility and adaptability
							throughout the project lifecycle. Our iterative approach allows us to respond quickly
							to changes, incorporate feedback, and deliver high-quality results on time and within
							budget. We keep you involved every step of the way, providing regular updates and
							opportunities for collaboration
						</div>
						<hr class="bg-primary" />
					</li>
					<li>
						<hr class="bg-primary" />
						<div class="timeline-start border border-primary timeline-box">
							<h1 class="text-xl text-primary">Continuous Support</h1>

							Our commitment to your success doesn't end with project delivery. We provide
							continuous support and maintenance to ensure that your solution remains up-to-date,
							secure, and optimized for performance. Whether you need technical assistance, updates,
							or enhancements, our team is always here to help.
						</div>
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5"
								><path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class=" mt-6 p-6">
			<p class="text-2xl font-light">
				By following this structured and collaborative approach, we ensure that every project we
				undertake is a success, delivering tangible results and driving your business forward in the
				digital landscape
			</p>
		</div>
	</div>
	<div class="divider divider-neutral"></div>
	<div class="mt-6 grid justify-center items-center">
		<h1 class="text-center text-primary text-4xl">Our Focus</h1>
		<div
			class="  p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4"
		>
			<div
				class="card w-96 bg-error shadow-md bg-opacity-15 cursor-pointer rounded-2xl hover:-translate-y-2 duration-150 hover:bg-accent-content"
			>
				<div class="card-body text-start">
					<p class="">Showcase your brand identity and establish a professional online presence.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-outline">Get Quote</button>
					</div>
					<h2 class="card-title font-light text-secondary">Corporate Websites</h2>
				</div>
			</div>

			<div
				class="card w-96 bg-warning-content bg-opacity-15 cursor-pointer rounded-2xl hover:-translate-y-2 duration-150 hover:bg-accent-content"
			>
				<div class="card-body text-start">
					<p class="">Elevate your online store with our custom e-commerce solutions.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-outline">Get Quote</button>
					</div>
					<h2 class="card-title font-light text-secondary">E-commerce Platforms</h2>
				</div>
			</div>

			<div
				class="card w-96 bg-primary-content bg-opacity-55 cursor-pointer rounded-2xl hover:-translate-y-2 duration-150 hover:bg-accent-content"
			>
				<div class="card-body text-start">
					<p class="">
						Highlight your work and attract potential clients with a stunning portfolio.
					</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-outline">Get Quote</button>
					</div>
					<h2 class="card-title font-light text-secondary">Portfolio Websites</h2>
				</div>
			</div>

			<div
				class="card w-96 bg-info-content bg-opacity-15 cursor-pointer rounded-2xl hover:-translate-y-2 duration-150 hover:bg-accent-content"
			>
				<div class="card-body text-start">
					<p class="">Empower your team to manage and update your website effortlessly.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-outline">Get Quote</button>
					</div>
					<h2 class="card-title font-light text-secondary">Content Management Systems</h2>
				</div>
			</div>

			<div
				class="card w-96 bg-accent bg-opacity-15 cursor-pointer rounded-2xl hover:-translate-y-2 duration-150 hover:bg-accent-content"
			>
				<div class="card-body text-start">
					<p class="">Share your insights, stories, and expertise with the world.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-outline">Get Quote</button>
					</div>
					<h2 class="card-title font-light text-secondary">Blog & Magazine Websites</h2>
				</div>
			</div>

			<div
				class="card w-96 bg-secondary-content bg-opacity-15 cursor-pointer rounded-2xl hover:-translate-y-2 duration-150 hover:bg-accent-content"
			>
				<div class="card-body text-start">
					<p class="">
						Transform your unique business requirements into powerful web applications.
					</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-outline">Get Quote</button>
					</div>
					<h2 class="card-title font-light text-secondary">Custom Web Applications</h2>
				</div>
			</div>

			<div
				class="card w-96 bg-success bg-opacity-15 cursor-pointer rounded-2xl hover:-translate-y-2 duration-150 hover:bg-accent-content"
			>
				<div class="card-body text-start">
					<p class="">Drive targeted traffic and generate leads with our custom landing pages.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-outline">Get Quote</button>
					</div>
					<h2 class="card-title font-light text-secondary">Landing Pages & Microsites</h2>
				</div>
			</div>
		</div>
		<div class="py-8">
			<a
				href="/projects"
				class="btn btn-secondary text-white hover:-translate-y-1 hover:bg-primary hover:text-secondary duration-150"
				>View Portfolio Projects</a
			>
		</div>
	</div>
	<div class="divider divider-neutral"></div>
	<div class=" p-6 shadow-2xl mb-6">
		<!-- <h1 class="text-center text-4xl">Contact Us</h1> -->
		<p class="text-3xl">Leave us a Message</p>
		<div class="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
			<div class="  grid justify-end p-4">
				<form
					method="POST"
					class="card shadow-lg rounded-lg bg-base-300 p-4 grid justify-start gap-y-1.5"
				>
					<label class="text-sm text-start">
						<span class="font-semibold text-sm">Full Name </span>
						<input
							name="name"
							type="name"
							required
							class="input input-sm w-full"
							placeholder="Full Name"
						/>
					</label>
					<label class="text-sm text-start">
						<span class="font-semibold text-sm">Email address </span>

						<input
							name="email"
							type="email"
							required
							class="input input-sm w-full"
							placeholder="Email"
						/>
					</label>
					<label class="text-sm text-start">
						<span class="font-semibold text-sm">Phone </span>
						<input
							name="phone"
							type="phone"
							class="input input-sm w-full"
							placeholder="Phone(Optional)"
						/>
					</label>
					<label class="text-sm text-start">
						<span class="font-semibold text-sm">Subject </span>

						<input
							name="subject"
							type="text"
							required
							class="input input-sm w-full"
							placeholder="Subject"
						/>
					</label>
					<label class="text-sm text-start">
						<span class="font-semibold text-sm">Message </span>

						<textarea
							name="message"
							required
							rows="4"
							class="textarea w-full textarea-xs"
							placeholder="Message"
						/>
					</label>
					<button class="btn btn-secondary w-full">Send</button>
				</form>
			</div>
			<div class="justify-center items-center gap-2 p-2">
				<div class="card p-3 grid gap-3 justify-start">
					<div class="join gap-3 cursor-pointer">
						<svg
							class="w-6 h-6 text-secondary"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
								clip-rule="evenodd"
							/>
							<path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
						</svg>

						<p class="join-item font-semibold">Follow on LinkedIn</p>
					</div>

					<div class="join gap-3 cursor-pointer">
						<svg
							class="w-6 h-6 text-secondary"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
								clip-rule="evenodd"
							/>
						</svg>

						<p class="join-item font-semibold">Follow on Facebook</p>
					</div>

					<div class="join gap-3 cursor-pointer">
						<svg
							class="w-6 h-6 text-secondary"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
							/>
						</svg>
						<p class="join-item font-semibold">Follow on Instagram</p>
					</div>
					<div class="join gap-3 cursor-pointer">
						<svg
							class="w-6 h-6 join-item text-secondary"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
							/>
						</svg>
						<p class="join-item font-semibold">Follow on X</p>
					</div>
					<div class="divider divider-primary"></div>
					<div class="join gap-3 cursor-pointer">
						<svg
							class="w-6 h-6 text-secondary"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"
							/>
						</svg>

						<p class="join-item font-semibold">nervewebsolutions@gmail.com</p>
					</div>
					<div class="card grid gap-1 justify-center text-start">
						<img src={Logo} width={60} height={60} alt="logo" class="join-item" />
						<h2 class="text-xl font-semibold text-primary">Nerve Web Solutions</h2>

						<h2 class="font-bold text-sm">KIUU Containers</h2>
						<h2 class="font-bold text-sm">Nairobi Kenya</h2>
						<h2 class="font-bold text-sm">0706335880</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
