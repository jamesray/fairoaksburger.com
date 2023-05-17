<template>
  <div class="menu-body container mx-auto mb-5 max-w-6xl px-6 pb-5">
    <div class="menu-beverages grid grid-cols-12">
      <div class="menu-header col-span-12 mb-1 lg:col-span-2">
        <h2
          class="color-slate-500 flex flex-row items-start text-2xl font-black"
        >
          <Icon
            class="flex-shrink-0 pr-1 pt-1 leading-none"
            size="32"
            name="icon-park-outline:egg"
          />Breakfast Sides
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
            <p class="menu-item-name">Bacon / Sausage / Ham</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Eggs</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Toast</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Pancake</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Waffle</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">French Toast</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Hash browns</p>
          </div>
          <div class="menu-item-chip">
            <p class="menu-item-name">Grits</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
