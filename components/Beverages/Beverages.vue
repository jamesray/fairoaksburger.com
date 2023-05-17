<template>
  <div class="menu-body container mx-auto mb-5 max-w-6xl px-6 pb-5">
    <div class="menu-beverages grid grid-cols-12">
      <div class="menu-header col-span-12 mb-1 lg:col-span-2">
        <h2
          class="color-slate-500 flex flex-row items-start text-2xl font-black"
        >
          <Icon
            class="flex-shrink-0 leading-none"
            size="34"
            name="icon-park-twotone:drink"
          />Beverages
        </h2>
      </div>
      <div class="menu-list col-span-12 lg:col-span-10 lg:pl-10">
        <div
          class="max-w-200 flex flex-row flex-wrap items-center justify-start space-x-4 space-y-2 pb-1"
        >
          <span class="color-slate-500 mt-1.5 w-full pl-4 text-lg font-bold"
            >Fountain Drinks:</span
          >
          <div class="menu-item-chip">
            <p class="menu-item-name">Coke</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Diet&nbsp;Coke</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Cherry&nbsp;Coke</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Sprite</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Fanta&nbsp;Orange</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Fanta&nbsp;Strawberry</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Hi-C&nbsp;Pink&nbsp;Lemonade</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Hi-C&nbsp;Fruit&nbsp;Punch</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Barqs&nbsp;Root&nbsp;Beer</p>
          </div>
        </div>
        <div
          class="mt-3 flex flex-row flex-wrap items-center justify-start space-x-4 space-y-2"
        >
          <span class="pl-4.5 color-slate-500 mt-1.5 w-full font-bold"
            >Other:</span
          >
          <div class="menu-item-chip">
            <p class="menu-item-name">Fresh&nbsp;Brewed&nbsp;Iced&nbsp;Tea</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Horchata</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Jamaica &amp; Orange&nbsp;Bang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
