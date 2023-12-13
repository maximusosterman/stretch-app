import pino from 'pino'
import pretty from 'pino-pretty'

const stream = pretty({
  colorize: true
})
const log = pino({ level: 'info' }, stream)

export default log