<script>
	import Logo from './images/pollen.png';
</script>

<div class="navbar bg-neutral top-0 sticky z-50">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="">
				<img src={Logo} alt="logo" class="h-12 w-12" />
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
			>
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
 		<a href="/" class="btn btn-ghost text-xl text-accent font-bold">decidedtech</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal ">
			<li><a class="font-bold text-white" href="/">About</a></li>
			<li>
				<a class="font-bold text-white" href="/focus">Our Focus</a>
			</li>
			<li>
				<a class="font-bold text-white" href="/projects">Projects</a>
			</li>
			<li><a class="font-bold text-white" href="/contact">Contact Us</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/quote" class="btn btn-primary">Get Free Quote</a>
	</div>
</div>
