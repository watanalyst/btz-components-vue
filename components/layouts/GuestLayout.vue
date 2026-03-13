<script setup>
defineProps({
  appName: { type: String, default: 'App' },
  appSubtitle: { type: String, default: '' },
  logoSrc: { type: String, default: '' },
  copyrightOwner: { type: String, default: 'Grupo BTZ' },
})
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Painel esquerdo — branding -->
    <div
      class="hidden lg:flex lg:w-1/2 lg:flex-col lg:items-center lg:justify-center relative overflow-hidden"
      style="background: linear-gradient(135deg, #0A1E44 0%, #093F87 50%, #061633 100%)"
    >
      <!-- Glow sutil atrás do logo -->
      <div
        class="absolute rounded-full blur-3xl opacity-20"
        style="width: 400px; height: 400px; background: radial-gradient(circle, #1565C0, transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%)"
      ></div>

      <div class="flex flex-col items-center px-12 text-center relative z-10 brand-enter">
        <!-- Logo card -->
        <slot name="logo">
          <div
            v-if="logoSrc"
            class="mb-10 rounded-3xl p-8 shadow-2xl logo-card"
            style="background: rgba(255,255,255,0.95); backdrop-filter: blur(12px)"
          >
            <img :src="logoSrc" :alt="appName" class="h-28 w-auto" />
          </div>
        </slot>

        <h1 class="text-3xl font-bold text-white mb-3 tracking-tight">{{ appName }}</h1>
        <div class="mx-auto mb-6 h-1 w-16 rounded-full glow-bar" style="background: #1565C0"></div>
        <p v-if="appSubtitle" class="text-sm max-w-xs leading-relaxed" style="color: rgba(255,255,255,0.6)">
          {{ appSubtitle }}
        </p>
      </div>

      <p class="absolute bottom-6 text-xs" style="color: rgba(255,255,255,0.25)">
        &copy; {{ new Date().getFullYear() }} {{ copyrightOwner }}
      </p>
    </div>

    <!-- Painel direito — formulário -->
    <div class="flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:w-1/2" style="background: #f3f4f6">
      <!-- Logo mobile -->
      <div class="mb-8 flex flex-col items-center lg:hidden mobile-enter">
        <img v-if="logoSrc" :src="logoSrc" :alt="appName" class="h-16 w-auto mb-3" />
        <span class="text-xl font-bold" style="color: #093F87">{{ appName }}</span>
      </div>

      <div class="w-full max-w-md form-enter">
        <div
          class="overflow-hidden rounded-2xl bg-white"
          style="box-shadow: 0 25px 50px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)"
        >
          <div class="h-1.5" style="background: linear-gradient(to right, #0A1E44, #093F87, #1565C0)"></div>
          <div class="px-8 py-8">
            <slot />
          </div>
        </div>

        <p class="mt-6 text-center text-xs text-gray-400">
          &copy; {{ new Date().getFullYear() }} {{ copyrightOwner }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brand-enter {
  animation: fadeSlideUp 0.8s ease-out both;
}

.form-enter {
  animation: fadeSlideUp 0.6s ease-out 0.15s both;
}

.mobile-enter {
  animation: fadeSlideUp 0.5s ease-out both;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.glow-bar {
  box-shadow: 0 0 20px rgba(21, 101, 192, 0.4);
}

.logo-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.logo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
}
</style>
