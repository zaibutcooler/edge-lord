<script>
    import client from '../../assets/images/client.png';
    import gift from '../../assets/images/sendgift.png'
    import taxi from '../../assets/images/taxi.png'

</script>

<section class="min-h-screen pt-14 flex justify-center items-center" id="client">
    <main class="container w-[900px] pb-32">
        <h1 class="text-center font-bold text-3xl mb-6">DeliverEase: Your Reliable and Fast Delivery Service</h1>
        <section class="flex justify-between w-full mb-28">
            <div>
                <img alt="client" src={client} width="350px" height="350px" />
            </div>
            <div class="w-[500px] p-4 rounded-xl border border-cyan-200">
                <h2 class="text-lg font-bold mb-4">Everything is right in front of your door</h2>
                <p class="text-sm font-semibold text-gray-700 leading-relaxed">
                    Experience the convenience of our reliable and fast delivery service. Whether you're craving your favorite food or need essential products delivered to your doorstep, we've got you covered. With a wide range of options and a seamless ordering process, you can sit back and relax while we take care of the rest.
                </p>
              
                <button class="mt-6 px-6 py-3 bg-primary text-white rounded-lg font-semibold">
                    Get Started
                </button>
            </div>
        </section>
        <section class="flex justify-between w-full mb-28">

            <div class="w-[400px] p-4 rounded-xl border border-cyan-200">
                <h2 class="text-lg font-bold mb-4">Wanna send a gift?</h2>
                <p class="text-sm font-semibold text-gray-700 leading-relaxed">
                    Experience the convenience of our reliable and fast delivery service. Whether you're craving your favorite food or need essential products delivered to your doorstep, we've got you covered. With a wide range of options and a seamless ordering process, you can sit back and relax while we take care of the rest.
                </p>
              
            </div>
            <div>
                <img alt="client" src={gift} width="500px" height="350px" />
            </div>
        </section>

        <section class="flex justify-between w-full mb-28">
            <div>
                <img alt="client" src={taxi} width="400px" height="350px" />
            </div>
            <div class="w-[450px] p-4 rounded-xl border border-cyan-200">
                <h2 class="text-lg font-bold mb-4">Need a ride?</h2>
                <p class="text-sm font-semibold text-gray-700 leading-relaxed">
                    Experience the convenience of our reliable and fast delivery service. Whether you're craving your favorite food or need essential products delivered to your doorstep, we've got you covered. With a wide range of options and a seamless ordering process, you can sit back and relax while we take care of the rest.
                </p>
              
            </div>
        </section>

    </main>    
</section>
