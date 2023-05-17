<template>
  <div class="menu-body container mx-auto mb-5 px-6 pb-5">
    <div class="menu-beverages grid grid-cols-12">
      <div class="menu-header col-span-12 mb-1 lg:col-span-2">
        <h2
          class="color-slate-500 flex flex-row items-start text-2xl font-black"
        >
          <Icon
            class="flex-shrink-0 leading-none"
            size="34"
            name="icon-park-outline:french-fries"
          />Additional Items
        </h2>
      </div>
      <div class="menu-list col-span-12 lg:col-span-10 lg:pl-10">
        <div
          class="max-w-200 flex flex-row flex-wrap items-center justify-start space-x-4 space-y-2 pb-1"
        >
          <span class="color-slate-500 mt-1.5 hidden pl-4 text-lg font-bold"
            >&nbsp;</span
          >
          <div class="menu-item-chip">
            <p class="menu-item-name">Steak Fries</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Cheese Fries</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Chili Cheese Fries</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Chili + Pastrami Cheese Fries</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Onion Rings</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Sweet Potato Fries</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Fried Zucchini</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Jumbo Eggroll</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Wontons</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Corn Dog</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Corn Dog</p>
          </div>
        </div>
        <div
          class="mt-2 flex flex-row flex-wrap items-start justify-start space-x-4 space-y-2"
        >
          <span class="color-slate-500 mt-1.5 w-full pl-4 text-lg font-bold"
            >Plates:</span
          >
          <div class="menu-item-chip flex-grow text-left">
            <p class="menu-item-name">Chicken Strips (3) with Fries</p>
          </div>
          <div class="menu-item-chip flex-grow text-left">
            <p class="menu-item-name">
              Fried Seafood plate with fries and green salad.
            </p>
            <p class="menu-item-description pb-1.5">
              Choice of fish, shrimp or combo
            </p>
          </div>
          <div class="menu-item-chip flex-grow text-left">
            <p class="menu-item-name">Fried Chicken</p>
            <p class="menu-item-description pb-1.5">
              Breast, wing, thigh and leg served with fries and salad
            </p>
          </div>
        </div>
        <div
          class="mt-2 flex flex-row flex-wrap items-start justify-start space-x-4 space-y-2"
        >
          <span class="color-slate-500 mt-1.5 w-full pl-4 text-lg font-bold"
            >Junior Meals:</span
          >
          <div class="menu-item-chip flex-grow text-left">
            <p class="menu-item-name">
              1/2 grilled cheese with small fries and small drink
            </p>
          </div>
          <div class="menu-item-chip flex-grow text-left">
            <p class="menu-item-name">
              One chicken taco with small fries and small drink
            </p>
          </div>
          <div class="menu-item-chip flex-grow text-left">
            <p class="menu-item-name">
              One corn dog with small fries and small drink
            </p>
          </div>
          <div class="menu-item-chip flex-grow text-left">
            <p class="menu-item-name">
              One chicken strip with small fries and small drink
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-color-rose-300 mb-10 mt-8" />
    <Beverages />
  </div>
</template>
