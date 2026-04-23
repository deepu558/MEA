import { motion as Motion, useReducedMotion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export function Reveal({ children, className, delay = 0, y = 24, blur = true }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  const f = blur ? 'blur(6px)' : 'blur(0px)'
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y, filter: f }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </Motion.div>
  )
}
