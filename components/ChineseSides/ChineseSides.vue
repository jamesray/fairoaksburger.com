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
          />Sides
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
            <p class="menu-item-name">Fried Zucchini</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Jumbo Eggroll</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Wontons</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
