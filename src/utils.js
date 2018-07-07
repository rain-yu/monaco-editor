export const subscribeEvent = (name, fn) => {
  window.addEventListener('message', (evt) => {
    const data = evt.data
    if (data && data.eventName === name) {
      fn(data.data)
    }
  })
}

export const publishEvent = (name, data) => {
  window.parent.postMessage({
    eventName: name,
    data
  }, '*')
}
