<script>
	import Logo from './images/pollen.png';
</script>

<div class="navbar bg-base-200 top-0 sticky z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<img src={Logo} alt="logo" class=" h-auto w-auto" />
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
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
		<img src={Logo} alt="logo" class="h-10 w-10" />
		<a href="/" class="btn btn-ghost text-xl text-secondary font-bold">decidedtech</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
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
	<div class="navbar-end">
		<a href="/quote" class="btn btn-primary">Get Free Quote</a>
	</div>
</div>
