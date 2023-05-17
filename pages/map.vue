<template>
  <div class="content container mx-auto">
    <div class="menu-body mb-5 py-10 pb-5">
      <div class="menu-lunch mb-3 grid grid-cols-12 justify-center">
        <div class="menu-header col-span-12 mb-2 text-center md:mb-3">
          <h1 class="pb-4 text-center">Visit us in Altadena</h1>
          <div
            class="border-color-slate-300 relative mx-auto mb-4 inline-block rounded-md border-2 border-solid"
          >
            <nuxt-link
              to="https://maps.google.com/maps?ll=34.189472,-118.149476&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=15463397921859248505"
              target="_blank"
              class="color-slate-500 hover:color-slate-500 block px-3 py-2 no-underline"
              title="view fair oaks burger on google maps"
            >
              <p class="pb-1">2560 N. Fair Oaks Ave</p>
              <p class="pb-1">Altadena, CA 91001</p>
            </nuxt-link>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13201.253069166502!2d-118.1494809!3d34.1894715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd699067b38ef2179!2sFair%20Oaks%20Burger!5e0!3m2!1sen!2sus!4v1599564180928!5m2!1sen!2sus"
            width="100%"
            height="600"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            style="border: 0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
