<template>
  <footer
    class="relative flex pb-5 color-slate-600 px-5 border-t-2 border-t-solid py-5"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-12 py-3 mb-1">
        <nuxt-link
          class="no-underline color-slate-500 hover:color-slate-500 col-span-12 md:col-span-12 xl:col-span-3 pb-5 py-md-5 flex flex-row justify-start items-center space-x-4"
          to="/"
        >
          <img
            class="w-100 xl:w-full h-auto lg:-ml-10 -mt-1 2xl:-ml-16 2xl:w-100 2xl:-mt-3 pointer-events-none"
            alt="Fair Oaks Burger"
            src="/FairOaksBurger.png"
          />
          <span class="hidden">Fairoaks Burger</span>
          <span class="hidden">Fair Oaks Burger</span>
        </nuxt-link>
        <div
          class="col-span-12 md:col-span-4 xl:col-span-3 pb-5 py-md-5 xl:pl-6 2xl:pl-16 2xl:mt-1"
        >
          <h3 class="pb-2">Hours</h3>
          <p class="pb-1">Monday - Saturday</p>
          <p class="pb-1">7:00am - 8:00pm</p>
        </div>
        <div
          class="location col-span-12 md:col-span-4 xl:col-span-3 pb-5 py-md-5 xl:pl-6 2xl:pl-16 2xl:mt-1"
        >
          <h3 class="pb-2">Location</h3>
          <nuxt-link
            to="https://maps.google.com/maps?ll=34.189472,-118.149476&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=15463397921859248505"
            target="_blank"
            class="no-underline color-slate-500 hover:color-slate-500"
            title="view fair oaks burger on google maps"
          >
            <p class="pb-1">2560 N. Fair Oaks Ave</p>
            <p class="pb-1">Altadena, CA 91001</p>
          </nuxt-link>
        </div>
        <div
          class="phone col-span-12 md:col-span-4 xl:col-span-3 pb-5 py-md-5 xl:pl-6 2xl:pl-16 2xl:mt-1"
        >
          <h3 class="pb-2">Phone</h3>
          <p class="pb-1">(626) 398-3630</p>
        </div>
      </div>
    </div>
  </footer>
</template>
