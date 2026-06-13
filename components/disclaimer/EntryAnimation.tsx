// Animation is now handled directly in DisclaimerGate via clip-path on the overlay div.
// This file is kept for import compatibility.

interface EntryAnimationProps {
  playing: boolean
  onComplete: () => void
}

export default function EntryAnimation(_props: EntryAnimationProps) {
  return null
}
