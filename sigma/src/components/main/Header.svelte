<script>

  import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

</script>

<section>
    <main class="w-full border-b flex items-center justify-between py-2 px-2 md:px-4 text-gray-800 font-semibold">
        <div class="">
            <a href="/" class="py-1">Home</a>

        </div>
        <div class="lg:mr-4 md:mr-3 mr-2 flex items-center text-sm">
            <div class="mx-3"><a href="/home/explore" class="py-1 px-4 rounded-full hover:bg-gray-200 hover:text-sky-400">Explore</a></div>
            <div class="mx-3"><a href="/home/explore" class="py-1 px-4 rounded-full hover:bg-gray-200 hover:text-sky-400">Services</a></div>
            <div class="mx-3"><a href="/contact" class="py-1 px-4 rounded-full hover:bg-gray-200 hover:text-sky-400">Contact</a></div>
            <div  class="mx-3"><button class="py-1 px-4 rounded-full hover:bg-gray-200"><FontAwesomeIcon icon={faUser} /></button></div>

        </div>
        
    </main>
</section>