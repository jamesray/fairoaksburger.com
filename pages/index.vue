<template>
  <div class="relative overflow-hidden bg-white">
    <div class="pb-30 pt-6 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-40">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="relative sm:max-w-lg xl:-mt-14 xl:pr-8">
          <h1
            class="tracking-loose line-height--1 pb-2 text-8xl font-bold text-slate-700"
          >
            Fairoaks Burger
          </h1>
          <h1 class="text-4xl font-bold tracking-tight text-slate-600">
            Family owned and operated in beautiful Altadena, California
          </h1>
          <p class="mt-4 text-xl text-slate-500">
            We ensure the finest ingredients to serve the best burgers in town.
            We are delighted to bring hearty breakfasts, delectable classic
            sandwiches and serve our international favorites with our Mexican
            and Chinese menu.
          </p>
          <p class="mt-4 text-xl text-slate-500">
            As a local favorite we promise to bring you the quality with the
            fairest prices in town.
          </p>
        </div>
        <div>
          <div class="mt-14">
            <!-- Decorative image grid -->
            <div
              aria-hidden="true"
              class="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div
                class="lg:left-6/9 xl:left-5/9 absolute z-40 transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:top-1/2 lg:-translate-x-14 lg:-translate-y-1/2 2xl:left-1/2"
              >
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div
                    class="invisible grid flex-shrink-0 grid-cols-1 gap-y-6 lg:visible lg:gap-y-8"
                  >
                    <Fancybox
                      data-fancybox="gallery"
                      href="/food/FAIROAKS_BURGER_COMBO.jpg"
                      class="h-44 w-56 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                    >
                      <img
                        src="/food/FAIROAKS_BURGER_COMBO.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                    <Fancybox
                      data-fancybox="gallery"
                      href="/food/DELUXE_NACHOS.jpg"
                      title="Deluxe Nachos"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/DELUXE_NACHOS.jpg"
                        alt="Deluxe Nachos"
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                    <Fancybox
                      data-fancybox="gallery"
                      src="/food/GRILLED_CHICKEN_SANDWICH.jpg"
                      alt="Grilled Chicken Sandwich"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/GRILLED_CHICKEN_SANDWICH.jpg"
                        alt="Grilled Chicken Sandwich"
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                  </div>
                  <div
                    class="invisible grid flex-shrink-0 grid-cols-1 gap-y-6 lg:visible lg:gap-y-8"
                  >
                    <Fancybox
                      data-fancybox="gallery"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/CRISPY_CHICKEN_SALAD.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                    <Fancybox
                      data-fancybox="gallery"
                      class="h-32 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/breakfast-burrito-cropped.jpg"
                        alt=""
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                    <Fancybox
                      data-fancybox="gallery"
                      href="/food/tacos-cropped.jpg"
                      title="Taco Plate"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/tacos-cropped.jpg"
                        alt="Taco Plate"
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                    <Fancybox
                      data-fancybox="gallery"
                      href="/food/TUNA_SANDWICH.jpg"
                      title="Tuna Sandwich"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/TUNA_SANDWICH.jpg"
                        alt="Tuna Sandwich"
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                  </div>
                  <div
                    class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                  >
                    <Fancybox
                      data-fancybox="gallery"
                      href="/food/EGG_BREAKFAST.jpg"
                      title="Egg Breakfast"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/EGG_BREAKFAST.jpg"
                        alt="Egg Breakfast"
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                    <Fancybox
                      data-fancybox="gallery"
                      href="/food/BEEF_BOWL.jpg"
                      title="Beef Bowl"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/BEEF_BOWL.jpg"
                        alt="Beef Bowl"
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                    <Fancybox
                      data-fancybox="gallery"
                      href="/food/CAMARONES_RANCHEROS.jpg"
                      title="Camarones Rancheros"
                      class="h-44 w-56 overflow-hidden rounded-lg"
                    >
                      <img
                        src="/food/CAMARONES_RANCHEROS.jpg"
                        alt="Camarones Rancheros"
                        class="h-full w-full object-cover object-center"
                      />
                    </Fancybox>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link
              to="/menu"
              class="z-60 relative inline-block rounded-md border border-transparent bg-rose-600 px-8 py-3 text-center font-bold text-white no-underline hover:cursor-pointer hover:bg-rose-700"
            >
              Explore the Full Menu <Icon name="charm:arrow-right" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
