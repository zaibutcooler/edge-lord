<script>
  import AboutSection from "../components/landing/AboutSection.svelte";
  import BusinessOwner from "../components/landing/BusinessOwner.svelte";
  import ClientSection from "../components/landing/ClientSection.svelte";
  import ContactSection from "../components/landing/ContactSection.svelte";
  import DeliverySection from "../components/landing/DeliverySection.svelte";
import HeroSection from "../components/landing/HeroSection.svelte";
import LandingFooter from "../components/landing/LandingFooter.svelte";
import LandingNavbar from "../components/landing/LandingNavbar.svelte";


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<LandingNavbar/>
	<div class="mx-auto container text-cyan-900">
		<HeroSection/>
		<AboutSection/>
		<ClientSection/>
		<DeliverySection/>
		<BusinessOwner/>
		<ContactSection/>
	</div>
	<LandingFooter/>
</main>

<style>

</style>
