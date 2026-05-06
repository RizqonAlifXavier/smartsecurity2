export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  // --- 1) Intersection Observer (appear on scroll) ---
  const initScrollAnimations = () => {
    if (typeof window === 'undefined') return

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.value?.observe(el))
  }

  // --- 2) Parallax scroll effect (continuous movement) ---
  const parallaxElements: { el: HTMLElement; speed: number; direction: string }[] = []
  let ticking = false

  const initParallax = () => {
    if (typeof window === 'undefined') return
    const els = document.querySelectorAll('[data-parallax]')
    els.forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset.parallaxSpeed || '0.15')
      const direction = (el as HTMLElement).dataset.parallax || 'up'
      parallaxElements.push({ el: el as HTMLElement, speed, direction })
    })
    if (parallaxElements.length > 0) {
      window.addEventListener('scroll', onParallaxScroll, { passive: true })
    }
  }

  const onParallaxScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  const updateParallax = () => {
    const scrollY = window.scrollY
    const viewH = window.innerHeight

    parallaxElements.forEach(({ el, speed, direction }) => {
      const rect = el.getBoundingClientRect()
      // Only compute when element is near the viewport
      if (rect.top < viewH + 200 && rect.bottom > -200) {
        const center = rect.top + rect.height / 2 - viewH / 2
        const offset = center * speed

        switch (direction) {
          case 'up':
            el.style.transform = `translateY(${-offset}px)`
            break
          case 'down':
            el.style.transform = `translateY(${offset}px)`
            break
          case 'left':
            el.style.transform = `translateX(${-offset}px)`
            break
          case 'right':
            el.style.transform = `translateX(${offset}px)`
            break
          case 'rotate':
            el.style.transform = `rotate(${offset * 0.3}deg)`
            break
          case 'scale': {
            const s = 1 + Math.abs(offset) * 0.0003
            el.style.transform = `scale(${Math.min(s, 1.15)})`
            break
          }
          case 'zoom': {
            // Scales from small to full size based on scroll position
            const progress = 1 - (rect.top / viewH)
            const scale = Math.max(0.7, Math.min(1, 0.7 + progress * 0.3))
            el.style.transform = `scale(${scale})`
            el.style.opacity = `${Math.max(0.3, Math.min(1, progress + 0.3))}`
            break
          }
        }
      }
    })
    ticking = false
  }

  // --- 3) Continuous scroll-linked card tilt ---
  const initScrollTilt = () => {
    if (typeof window === 'undefined') return
    const tiltCards = document.querySelectorAll('[data-scroll-tilt]')
    if (tiltCards.length === 0) return

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const viewH = window.innerHeight
          tiltCards.forEach((card) => {
            const rect = card.getBoundingClientRect()
            if (rect.top < viewH && rect.bottom > 0) {
              const progress = (viewH - rect.top) / (viewH + rect.height)
              const rotateX = (progress - 0.5) * 6
              const el = card as HTMLElement
              el.style.transform = `perspective(800px) rotateX(${rotateX}deg)`
            }
          })
          ticking = false
        })
        ticking = true
      }
    }, { passive: true })
  }

  // --- 4) Progress bar / scroll-triggered width ---
  const initScrollProgress = () => {
    if (typeof window === 'undefined') return
    const progressEls = document.querySelectorAll('[data-scroll-progress]')
    if (progressEls.length === 0) return

    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = el.dataset.scrollProgress || '100'
            el.style.width = `${target}%`
            progressObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )
    progressEls.forEach((el) => progressObserver.observe(el))
  }

  const cleanup = () => {
    observer.value?.disconnect()
    window.removeEventListener('scroll', onParallaxScroll)
  }

  onMounted(() => {
    nextTick(() => {
      initScrollAnimations()
      initParallax()
      initScrollTilt()
      initScrollProgress()
    })
  })

  onUnmounted(() => {
    cleanup()
  })

  return { initScrollAnimations, cleanup }
}
