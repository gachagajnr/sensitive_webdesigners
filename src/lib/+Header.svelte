<script>
	import Logo from './images/logo.png';
</script>

<div class="navbar bg-base-100 top-0 sticky z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
					<!-- <img src={Logo}  width="150px" height="150px"   alt="logo" class="" /> -->
				</svg>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a class="font-bold" href="/">About</a></li>
				<li>
					<a class="font-bold" href="/focus">Our Focus</a>
				</li>
				<li>
					<a class="font-bold" href="/projects">Projects</a>
				</li>
				<li><a class="font-bold" href="/contact">Contact Us</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost text-xl text-secondary font-bold">Nerves Solutions</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a class="font-bold " href="/">About</a></li>
			<li>
				<a class="font-bold " href="/focus">Our Focus</a>
			</li>
			<li>
				<a class="font-bold " href="/projects">Projects</a>
			</li>
			<li><a class="font-bold " href="/contact">Contact Us</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/quote" class="btn btn-primary ">Get Free Quote</a>
	</div>
</div>
