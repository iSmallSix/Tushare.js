import Tu from './index.mjs'

const tu = new Tu('666')

tu.get('trade_cal', {
  is_open: 1
}).then(res => {
  console.log(res)
})
