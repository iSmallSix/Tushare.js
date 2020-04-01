import request from 'superagent'

/* TODO
 * 1. Missing Exception handling
 */


/**
 * @description ...
 *
 * @function get
 * @param {String} apiName
 * @param {Object} params
 * @param {String} fields
 */



class Tu {
  baseUrl = 'http://api.tushare.pro/'

  baseParams = {
    api_name: '',
    token: '',
    params: { },
    fields: ''
  }

  constructor (token) {

    this.token = token

  }

  async get (apiName, params = {}, fields = '') {
    if (!this.token) {
      return 'Invalid token -:- '
    }

    const data = JSON.parse(JSON.stringify(this.baseParams))

    Object.assign(data, {
      api_name: apiName,
      token: this.token,
      params,
      fields
    })

    let output = []

    await request.post(this.baseUrl).send(data).then(res => {
      output = res.body.data
    })

    return output
  }

}

export default Tu
