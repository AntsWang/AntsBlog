const url = {
  l1:'https://free-api.heweather.net/s6/weather/now?location=beijing&key=ea81f0dacf0c454c931b479d1c17ca40',
  l2: 'https://free-api.heweather.net/s6/weather/forecast?location=beijing&key=ea81f0dacf0c454c931b479d1c17ca40',
  l3: 'https://free-api.heweather.net/s6/weather/lifestyle?location=beijing&key=ea81f0dacf0c454c931b479d1c17ca40',
  weather: function(type,location){return 'https://free-api.heweather.net/s6/weather/'+type+'?location='+location+'&key=ea81f0dacf0c454c931b479d1c17ca40'}
}
module.exports = {
  url:url
}