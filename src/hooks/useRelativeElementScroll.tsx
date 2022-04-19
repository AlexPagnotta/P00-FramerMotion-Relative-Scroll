import {
  useViewportScroll,
  useTransform,
  useIsomorphicLayoutEffect,
} from 'framer-motion'
import { useState, useRef } from 'react'

type Config = {
  startTrigger?: 'top' | 'bottom'
  topTriggerOffset?: number
  bottomTriggerOffset?: number
}

/**
 * An hook use to determine the scroll progress relative to a specific section and not to the entire viewport
 * @param   {string} outputRange The desired range, the scroll progress value will be transformed relative to this range
 * @param   {object} config Config for the hook, you can pass the "startTrigger" ('top' | 'bottom'), and both a "topTriggerOffset" and a "bottomTriggerOffset"
 * @return  {Ref} Ref to apply to the "parent" element
 * @return  {MotionValue} The value of the scroll progress
 */
export default function useParentElementScroll(
  outputRange: number[],
  {
    startTrigger = 'top',
    topTriggerOffset = 0,
    bottomTriggerOffset = 0,
  }: Config = {}
) {
  // Ref of the scrolling element
  const ref = useRef<HTMLDivElement>(null)

  // Framer motion hook to get scroll value relative to the full viewport
  const { scrollY } = useViewportScroll()

  // Top and bottom borders offset from the top of the viewport
  // needed to calculate when to start and stop the animation
  const [topBorderOffset, setTopBorderOffset] = useState(0)
  const [bottomBorderOffset, setBottomBorderOffset] = useState(0)

  const [clientHeight, setClientHeight] = useState(0)

  // Borders position adjusted with offset and trigger
  const topBorderPosition =
    topBorderOffset +
    topTriggerOffset -
    (startTrigger === 'top' ? clientHeight : 0)

  const bottomBorderPosition =
    bottomBorderOffset +
    bottomTriggerOffset -
    (startTrigger === 'top' ? clientHeight : 0)

  // Transform viewport scroll to element scroll
  const yScrollProgress = useTransform(
    scrollY,
    [topBorderPosition, bottomBorderPosition],
    outputRange
  )

  useIsomorphicLayoutEffect(() => {
    const calculateOffsets = () => {
      if (!ref.current) return

      // Calculate element box
      const elementBox = ref.current.getBoundingClientRect()

      // Get the current scroll value
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      // Calculate box top border distance from the viewport start
      // the current scroll is added to get the absolute value
      const elementBoxTopDistance = elementBox.top + scrollTop

      // Calculate box bottom border distance from the viewport start
      const elementBoxBottomDistance = elementBoxTopDistance + elementBox.height

      setTopBorderOffset(elementBoxTopDistance)
      setBottomBorderOffset(elementBoxBottomDistance)
      setClientHeight(window.innerHeight)
    }

    calculateOffsets()

    window.addEventListener('resize', calculateOffsets)
    return () => window.removeEventListener('resize', calculateOffsets)
  })

  return { ref, yScrollProgress }
}
