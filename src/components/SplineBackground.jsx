import {
  Component,
  lazy,
  Suspense,
  useState,
} from 'react'
import { SPLINE_SCENE_URL } from '../config/immersive.js'

const Spline = lazy(() => import('@splinetool/react-spline'))

/**
 * @splinetool/react-spline rethrows load failures during render, which can white-screen
 * the app. This boundary shows the gradient fallback instead.
 */
class SplineErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error) {
    if (import.meta.env.DEV) {
      console.warn(
        '[MEA Spline] Scene failed. Use Export → Code → React URL in Spline, or set VITE_SPLINE_SCENE_URL, or self-host the .splinecode file. ',
        error
      )
    }
  }

  render() {
    if (this.state.error) {
      return this.props.fallback
    }
    return this.props.children
  }
}

const fallback = (
  <div
    className="l-imm-spline-fallback l-imm-spline-fallback--err"
    role="img"
    aria-label="3D background unavailable"
  />
)

function SplineWithBoundary({ sceneUrl, onLoaded }) {
  return (
    <SplineErrorBoundary key={sceneUrl} fallback={fallback}>
      <Suspense fallback={<div className="l-imm-spline-fallback" aria-hidden />}>
        <Spline scene={sceneUrl} onLoad={onLoaded} />
      </Suspense>
    </SplineErrorBoundary>
  )
}

export function SplineBackground({
  sceneUrl = SPLINE_SCENE_URL,
  className = '',
  style,
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`l-imm-spline-wrap ${className}`.trim()}
      style={style}
      data-spline-loaded={loaded ? 'true' : 'false'}
    >
      <SplineWithBoundary sceneUrl={sceneUrl} onLoaded={() => setLoaded(true)} />
    </div>
  )
}
