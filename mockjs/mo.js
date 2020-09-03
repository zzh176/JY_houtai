const Mock = require('mockjs');
const data = Mock.mock({
    
        "success": true,
        "data": {
          "projects|3-10": [{
            "name": "演示用",
            "url": "@url",
            "email": "@email",
            "address": "@county(true)",
            "string|1-10": "★",
            "number|1-100": 100,
            "boolean|1-2": true,
            "object|2": {
              "310000": "上海市",
              "320000": "江苏省",
              "330000": "浙江省"
            }
          }]
        }
      
    })
console.log(JSON.stringify(data, null, 2));
