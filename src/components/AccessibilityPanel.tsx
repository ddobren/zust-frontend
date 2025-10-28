import { useEffect, useRef } from 'react'

type Theme = 'light' | 'dark' | 'high-contrast'

type AccessibilityPanelProps = {
  isOpen: boolean
  onClose: () => void
  onFontDecrease: () => void
  onFontIncrease: () => void
  onFontReset: () => void
  theme: Theme
  onThemeChange: (theme: Theme) => void
  dyslexiaEnabled: boolean
  onDyslexiaToggle: (enabled: boolean) => void
  readingGuideEnabled: boolean
  onReadingGuideToggle: (enabled: boolean) => void
  reduceAnimations: boolean
  onReduceAnimationsToggle: (enabled: boolean) => void
  onResetAccessibility: () => void
}

function AccessibilityPanel({
  isOpen,
  onClose,
  onFontDecrease,
  onFontIncrease,
  onFontReset,
  theme,
  onThemeChange,
  dyslexiaEnabled,
  onDyslexiaToggle,
  readingGuideEnabled,
  onReadingGuideToggle,
  reduceAnimations,
  onReduceAnimationsToggle,
  onResetAccessibility,
}: AccessibilityPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') {
      return
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) {
        return
      }

      if (panelRef.current && !panelRef.current.contains(target) && !target.closest('.accessibility-button')) {
        onClose()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <div className="accessibility-panel" id="accessibilityPanel" aria-hidden={!isOpen}>
      <div
        className={`accessibility-menu${isOpen ? ' active' : ''}`}
        id="accessibilityMenu"
        ref={panelRef}
        role="dialog"
        aria-label="Postavke pristupačnosti"
      >
        <h3>Pristupačnost</h3>

        <div className="accessibility-option">
          <span>Veličina fonta</span>
          <div className="font-size-controls">
            <button type="button" id="decreaseFontSize" aria-label="Smanji font" onClick={onFontDecrease}>
              A-
            </button>
            <button type="button" id="resetFontSize" aria-label="Resetiraj font" onClick={onFontReset}>
              A
            </button>
            <button type="button" id="increaseFontSize" aria-label="Povećaj font" onClick={onFontIncrease}>
              A+
            </button>
          </div>
        </div>

        <div className="accessibility-option">
          <span>Tema</span>
          <div className="theme-options">
            <button
              type="button"
              id="lightTheme"
              className={`theme-btn light-theme${theme === 'light' ? ' active' : ''}`}
              aria-label="Svijetla tema"
              aria-pressed={theme === 'light'}
              onClick={() => onThemeChange('light')}
            ></button>
            <button
              type="button"
              id="darkTheme"
              className={`theme-btn dark-theme${theme === 'dark' ? ' active' : ''}`}
              aria-label="Tamna tema"
              aria-pressed={theme === 'dark'}
              onClick={() => onThemeChange('dark')}
            ></button>
            <button
              type="button"
              id="highContrastTheme"
              className={`theme-btn high-contrast-theme${theme === 'high-contrast' ? ' active' : ''}`}
              aria-label="Visoki kontrast"
              aria-pressed={theme === 'high-contrast'}
              onClick={() => onThemeChange('high-contrast')}
            ></button>
          </div>
        </div>

        <div className="accessibility-option">
          <span>Mod za disleksiju</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="dyslexiaMode"
              checked={dyslexiaEnabled}
              onChange={(event) => onDyslexiaToggle(event.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="accessibility-option">
          <span>Vodič za čitanje</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="readingGuide"
              checked={readingGuideEnabled}
              onChange={(event) => onReadingGuideToggle(event.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="accessibility-option">
          <span>Smanji animacije</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="reduceAnimations"
              checked={reduceAnimations}
              onChange={(event) => onReduceAnimationsToggle(event.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <button type="button" id="resetAccessibility" className="reset-btn" onClick={onResetAccessibility}>
          Resetiraj sve
        </button>
      </div>
    </div>
  )
}

export type { Theme }
export default AccessibilityPanel
