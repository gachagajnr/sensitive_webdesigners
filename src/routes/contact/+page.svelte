<div class="container mx-auto">
	<div class="mt-16">
		<div class="">
			<h1 class="text-center text-4xl">Work With Us</h1>
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
				<div class="justify-center items-center gap-2 p-2">Info</div>
			</div>
		</div>
	</div>
	<div></div>
</div>
