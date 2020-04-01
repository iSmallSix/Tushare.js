## Tushare for Node.js
Get your token here: https://tushare.pro/document/1?doc_id=39

Tushare APIs: https://tushare.pro/document/2?doc_id=25

Example:


    import Tu from 'Tushare.js'
    
    const tu = new Tu('your_token')
    
    tu.get('api_name', paramsObj, fieldsString).then(res => {
      console.log(res)
    })
