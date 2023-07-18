<script>
    import truck from '../../assets/images/deli_truck.png'
    import deli from '../../assets/images/deliman.png'
</script>

<section class="min-h-screen pt-14 flex justify-center items-center" id="delivery">
    <main class="container w-[900px] pb-32">
        <h1 class="text-center font-bold text-3xl mb-6">DeliverEase: Opportunities For Everyone</h1>
        <section class="flex justify-between w-full mb-28">
            <div class="w-[450px] p-4 rounded-xl border border-cyan-200">
                <h2 class="text-lg font-bold mb-4">Part-time for Youths</h2>
                <p class="text-sm font-semibold text-gray-700 leading-relaxed">
                    Join DeliverEase for part-time work and experience the convenience of our reliable and fast delivery service. Whether you're a student or a young individual seeking flexible work hours, we have opportunities for you. Earn while delivering happiness to our valued customers. Join our team, choose your own schedule, and be a part of a growing community.
                </p>
              
            </div>
            <div>
                <img alt="client" src={deli} width="400px" height="400px" />
            </div>
        </section>
        
        <section class="flex justify-between w-full mb-28">
            <div>
                <img alt="client" src={truck} width="550px" height="400px" />
            </div>
            <div class="w-[380px] p-4 rounded-xl border border-cyan-200">
                <h2 class="text-lg font-bold mb-4">Fulfilling Everyone's Needs</h2>
                <p class="text-sm font-semibold text-gray-700 leading-relaxed">
                    Discover convenience with DeliverEase. From food to products and transportation, we've got you covered. Our diverse services ensure a seamless experience for all. Join us to make life easier, bring smiles, and exceed expectations.
                </p>
              
                <button class="mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold">
                    Get Started
                </button>
            </div>
        </section>

    </main>    
</section>
