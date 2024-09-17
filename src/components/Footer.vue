<template>
  <footer
    class="flex flex-col justify-between items-start p-4 border-t border-gray-200 bg-white mt-5"
  >
    <div class="flex items-center justify-between w-full py-2">
      <div class="flex">
        <a href="#" aria-label="Facebook" class="text-purple-600 hover:text-purple-800 px-2">
          <img src="@/assets/icons/facebook.svg" alt="facebook" />
        </a>
        <a href="#" aria-label="Instagram" class="text-purple-600 hover:text-purple-800 px-2">
          <img src="@/assets/icons/instagram.svg" alt="instagram" />
        </a>
        <a href="#" aria-label="LinkedIn" class="text-purple-600 hover:text-purple-800 px-2">
          <img src="@/assets/icons/linkedIn.svg" alt="linkedIn" />
        </a>
        <a
          href="#"
          aria-label="X (formerly Twitter)"
          class="text-purple-600 hover:text-purple-800 px-2"
        >
          <img src="@/assets/icons/x.svg" alt="x" />
        </a>
        <a href="#" aria-label="YouTube" class="text-purple-600 hover:text-purple-800 px-2">
          <img src="@/assets/icons/youtube.svg" alt="youtube" />
        </a>
      </div>
      <div class="flex items-center right-content">
        <a href="#" class="text-purple-600 hover:text-purple-800 mn">mn</a>
        <span>/</span>
        <a href="#" class="text-pink-600 hover:text-pink-800 en">en</a>
      </div>
    </div>
    <div class="footer-text py-4">©2024 - Хаан даатгал | Бүх эрх хуулиар хамгаалагдсан.</div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
footer {
  .fab {
    font-size: 1.5rem; // Adjust icon size
  }

  a {
    transition: color 0.3s ease;
  }

  .right-content {
    .mn {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 12px;
      letter-spacing: 0.015em;
      text-align: left;
      color: rgba(102, 55, 123, 1);
    }
    .en {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 12px;
      letter-spacing: 0.015em;
      text-align: left;
      color: rgba(221, 0, 92, 1);
    }
  }
  .footer-text {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.015em;
    text-align: left;
    color: rgba(137, 145, 154, 1);
  }
}
</style>
