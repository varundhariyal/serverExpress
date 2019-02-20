let appConfig={}
//declare value
appConfig.port=3000
appConfig.allowCorsOrigin='*' //here * means anyone can access application
appConfig.env='dev' //environment set to development
appConfig.db={
uri:{ }
}
appConfig.apiVersion='/api/v1'
module.exports={
port:appConfig.port,
allowCorsOrigin:appConfig.allowCorsOrigin,
env:appConfig.env,
database:appConfig.db,
apiVersion:appConfig.apiVersion
} //used to export module and its functionality can be used using 'require' in other module like index.js