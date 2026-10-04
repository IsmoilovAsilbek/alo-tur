const OFFSETS = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(-50px)',
    right: 'translateX(50px)',
    zoom: 'scale(0.92)',
}

export const vReveal = {
    mounted(el, binding) {
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        if (reduce || !('IntersectionObserver' in window)) return

        const { delay = 0, duration = 700, from = 'up' } = binding.value || {}

        el.style.opacity = '0'
        el.style.transform = OFFSETS[from] || OFFSETS.up
        el.style.willChange = 'opacity, transform'

        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return
                io.disconnect()

                el.style.transition =
                    `opacity ${duration}ms ease ${delay}ms, ` +
                    `transform ${duration}ms cubic-bezier(.22,.8,.3,1) ${delay}ms`
                el.style.opacity = '1'
                el.style.transform = 'none'

                el._revealTimer = setTimeout(() => {
                    el.style.transition = ''
                    el.style.opacity = ''
                    el.style.transform = ''
                    el.style.willChange = ''
                }, duration + delay + 60)
            },
            { threshold: 0.15 }
        )

        io.observe(el)
        el._revealIO = io
    },
    unmounted(el) {
        el._revealIO?.disconnect()
        if (el._revealTimer) clearTimeout(el._revealTimer)
    },
}