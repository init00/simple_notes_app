import getTitleContent from './getTitleContent'

export default function() {
    let payload = getTitleContent()
    let payloadLength = payload.title.length + payload.content.length
    return payloadLength === 0
}