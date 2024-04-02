<script>
	import '../app.css';
	import Header from '$lib/+Header.svelte';
	import Footer from '$lib/+Footer.svelte';
	import Logo from '$lib/images/pollen.png';
</script>

<Header />
<slot />
 <div class="flex flex-row flex-wrap gap-6 bg-neutral  justify-center items-start p-6">
	<div class="">
		<img src={Logo}   alt="logo" class="h-20 w-20 object-cover " />
	</div>
	<div>
		<div class="grid justify-start text-start">
			<a href="/" class="text-lg text-accent font-bold">decidedtech</a>
			<!-- <p class=" ">1st Floor</p> -->
			<p class=" text-white font-semibold">Thika Rd</p>
			<p class="text-white font-semibold ">Nairobi Kenya</p>
			<p class=" text-white font-semibold">+254706-335-880</p>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="join gap-3 cursor-pointer">
			<svg
				class="w-6 h-6 text-info"
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

			<p class="join-item font-medium text-base-300">Follow on LinkedIn</p>
		</div>

		<div class="join gap-3 cursor-pointer">
			<svg
				class="w-6 h-6 text-info"
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

			<p class="join-item font-medium text-base-300">Follow on Facebook</p>
		</div>

		<div class="join gap-3 cursor-pointer">
			<svg
				class="w-6 h-6 text-info"
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
			<p class="join-item font-medium text-base-300">Follow on Instagram</p>
		</div>
		<div class="join gap-3 cursor-pointer">
			<svg
				class="w-6 h-6 join-item text-info"
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
			<p class="join-item font-medium text-base-300">Follow on X</p>
		</div>
		<!-- <div class="divider divider-primary"></div> -->
		<div class="join gap-3 cursor-pointer">
			<svg
				class="w-6 h-6 text-info"
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

			<p class="join-item font-medium text-base-300">decidedtech@gmail.com</p>
		</div>
	</div>
</div>
<Footer />
