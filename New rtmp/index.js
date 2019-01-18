const { NodeMediaServer } = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
 trans: {  
    // ffmpeg: '/usr/bin/ffmpeg',  
    ffmpeg: 'D:\\ffmpeg\\bin\\ffmpeg.exe',  
    tasks: [  
      {  
        app: 'live',  
        ac: 'aac',  
        hls: true,  
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',  
        dash: true,  
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'  
      }  
    ]  
  },   
};

var nms = new NodeMediaServer(config)
nms.run();

/*
D:\ffmpeg\bin>ffmpeg -i rtmp://192.168.0.5:1935/live/xiaoben  -strict -2 -c:v li
bx264 -c:a aac -f hls D:\Documents\Downloads\react-module-node-vue-master\node-v
ue\back\node-media-server\media\live\xiaoben\index.m3u8

D:\ffmpeg\bin>ffmpeg -re -i  rtmp://localhost/live/xiaoben -c:v libx264 -s 720x5
76 -c:a copy -f hls -hls_time 10 D:\Documents\Downloads\react-module-node-vue-ma
ster\node-vue\back\node-media-server\media\live\xiaoben\index.m3u8


*/
