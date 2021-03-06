import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ColgroupProps
  extends React.ColgroupHTMLAttributes<HTMLTableColElement>,
BackgroundColorHelpersProps,
    ErrorBoundaryProps {}

export class Colgroup extends React.Component<ColgroupProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('colgroup', props)
  }
}
