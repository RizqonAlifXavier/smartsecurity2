<template>
  <nav :class="['navbar', { scrolled: isScrolled, 'menu-open': isMenuOpen }]">
    <div class="navbar-container container">
      <a href="#hero" class="navbar-logo" @click="closeMenu">
        <img src="/logo.jpg" alt="Sinergi Sempurna Solusindo" class="brand-logo-img" />
      </a>

      <div :class="['navbar-menu', { active: isMenuOpen }]">
        <a v-for="item in menuItems" :key="item.href" :href="item.href" class="navbar-link" @click="closeMenu">
          {{ item.label }}
        </a>
        <a :href="waLink" target="_blank" class="btn btn-primary btn-sm navbar-cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.855L.053 23.52a.5.5 0 00.607.607l5.665-1.467A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.76-.562-5.295-1.53l-.38-.226-3.348.868.883-3.232-.248-.395A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Contact Us
        </a>
      </div>

      <button :class="['hamburger', { active: isMenuOpen }]" @click="toggleMenu" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
const { getWhatsAppLink } = useWhatsApp()
const waLink = getWhatsAppLink('Hello Smart Security! I would like to consult about security products.')

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const menuItems = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Why Us', href: '/#features' },
  { label: 'Contact', href: '/#contact' },
]

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: all var(--transition);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 10px 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  z-index: 1001;
}

.brand-logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
  border-radius: 4px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  position: relative;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--red);
  transition: width var(--transition);
}

.navbar-link:hover {
  color: var(--white);
}

.navbar-link:hover::after {
  width: 100%;
}

.navbar-cta {
  padding: 10px 20px;
  font-size: 0.85rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 4px;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all var(--transition);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 28px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition);
  }

  .navbar-menu.active {
    opacity: 1;
    pointer-events: all;
  }

  .navbar-link {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .navbar-cta {
    padding: 14px 32px;
    font-size: 1rem;
  }
}
</style>
