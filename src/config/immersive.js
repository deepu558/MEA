/** Spline scene (.splinecode URL from Export → Code → React). */
export const SPLINE_SCENE_URL =
  import.meta.env.VITE_SPLINE_SCENE_URL ??
  // Public demo from @splinetool/react-spline README (swap for your file’s URL)
  'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode'

/** Optional: full Webflow publish URL for the embed layout (https://…webflow.io). */
export const WEBFLOW_PUBLISH_URL = import.meta.env.VITE_WEBFLOW_URL ?? ''

/** Stock classroom / study imagery for background transitions (Unsplash). */
export const CLASSROOM_BACKGROUNDS = [
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1580582932707-520ead9374d7?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
]
