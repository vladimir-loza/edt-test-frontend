

export const copyToClipboard = async (textToCopy) => {
  try {
    await navigator.clipboard.writeText(textToCopy)
    return true
  } catch (err) {
    return false
  }

}